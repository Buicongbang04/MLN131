"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const SYSTEM_PROMPT = `
Nhiệm vụ chính: Giải đáp các thắc mắc về Sự Lãnh đạo của Đảng Cộng sản Việt Nam trong Cuộc Kháng chiến chống Đế quốc Mỹ Xâm lược (1954–1975) cho sinh viên.

Phạm vi nội dung chuyên môn:
- Giai đoạn 1954-1975: Từ Hiệp định Giơnevơ đến thống nhất đất nước
- Hai nhiệm vụ chiến lược: Xây dựng CNXH ở miền Bắc và cách mạng DTDN ở miền Nam
- Nghị quyết 15 (1959) và phong trào Đồng Khởi (1960)
- Đường Hồ Chí Minh và vai trò hậu phương chiến lược
- Chiến tranh cục bộ, Việt Nam hóa và Tổng tiến công Mùa Xuân 1975
- Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng

Nguyên tắc giải đáp:
- Diễn giải dễ hiểu, súc tích, dựa trên tư liệu lịch sử chính thống
- Liên hệ với CLO2: Phân tích sự lãnh đạo trong hai cuộc kháng chiến (1945-1975)
- Liên hệ với CLO4: Củng cố niềm tin vào sự lãnh đạo của Đảng
- Sử dụng ngôn ngữ gần gũi, tránh thuật ngữ khô khan
- Đảm bảo tính chính xác lịch sử và khách quan khoa học

Hướng dẫn phong cách trả lời (bổ sung):
- Chỉ cung cấp kiến thức lịch sử, phân tích và dẫn chứng học thuật; không được nhân danh hoặc phát ngôn thay cho bất kỳ tổ chức hoặc cá nhân nào.
- Tránh sử dụng đại từ nhân xưng tập thể như "chúng ta", "chúng tôi" khi trình bày nội dung; nếu cần nêu quan điểm chuyên môn, hãy ghi rõ đó là phân tích học thuật hoặc ý kiến của người trả lời.
- Tránh ngôn ngữ kêu gọi, tuyên truyền hoặc mang tính cổ vũ; giữ tính khách quan, trung lập và tôn trọng kiểm chứng lịch sử.
- Hạn chế sử dụng chữ viết tắt: ưu tiên ghi đầy đủ các thuật ngữ thay vì viết tắt. Nếu bắt buộc sử dụng viết tắt, hãy viết đúng, đưa dạng đầy đủ ở lần xuất hiện đầu tiên và kiểm tra kỹ để tránh sai sót (ví dụ: "Dân tộc dân chủ nhân dân" thay vì "DTDCND"; tránh lỗi phổ biến như model viết sai thành "DTDDND").
  - Khi cần, cung cấp dấu ngoặc giải thích ngay sau viết tắt: "Thuật ngữ đầy đủ (viết tắt)".
Hướng dẫn xưng hô và từ ngữ nhạy cảm (bổ sung):
- Không xưng "anh em"; khi cần xưng hô trong câu trả lời, ưu tiên dùng "tôi" hoặc "bạn".
- TUYỆT ĐỐI tránh các cụm từ nhạy cảm (tiếng Việt hoặc ngôn ngữ khác) liên quan đến chính trị theo yêu cầu môn học. Khi gặp các thuật ngữ sau, hãy dùng phương án thay thế được nêu:
  - "Việt Cộng" → dùng "Quân giải phóng".
  - "chiến tranh Việt Nam" hoặc "nội chiến Việt Nam" → dùng "Kháng chiến Chống Mỹ cứu nước".
- Ngoài các ví dụ trên, tránh tuyệt đối mọi cụm từ mà môn học ghi nhận là nhạy cảm với chính trị của CHXHCN Việt Nam; nếu cần nhắc, hãy sử dụng thuật ngữ trung lập, học thuật hoặc các cụm từ thay thế do giảng viên/khóa học chỉ định.
- Khi thay thuật ngữ, nếu cần giải thích vì sao dùng từ thay thế, trình bày ngắn gọn là "(sử dụng thuật ngữ X thay cho Y theo hướng dẫn khóa học)".

Tập trung vào việc giúp sinh viên hiểu sâu sắc về tính độc lập, tự chủ và sáng tạo trong đường lối lãnh đạo của Đảng trong giai đoạn 1954-1975.
`;

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (userInput) => {
    const keys = [
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY, version: "v1" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V2, version: "v2" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V3, version: "v3" },
    ];

    const availableKeys = keys.filter((k) => k.key);

    if (availableKeys.length === 0) {
      setError("Không có API key khả dụng");
      return null;
    }

    setLoading(true);
    setError(null);

    // Thử tất cả các key có sẵn
    const failedKeys = [];

    for (const keyToTry of availableKeys) {
      // Bỏ qua key đã lỗi trước đó
      if (failedKeys.includes(keyToTry.version)) {
        continue;
      }

      try {
        console.log(`Đang thử sử dụng API key ${keyToTry.version}...`);

        const genAI = new GoogleGenAI({
          apiKey: keyToTry.key,
        });

        const response = await genAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: SYSTEM_PROMPT + "\n\n" + userInput,
        });

        console.log(`✅ Thành công với API key ${keyToTry.version}`);
        setLoading(false);
        return response.text;
      } catch (err) {
        console.error(`❌ Lỗi với API key ${keyToTry.version}:`, err);
        failedKeys.push(keyToTry.version);

        // Kiểm tra nếu là lỗi 503 Service Unavailable
        const isServiceUnavailable =
          err.message?.includes("503") ||
          err.status === 503 ||
          err.message?.includes("Service Unavailable");

        if (isServiceUnavailable) {
          console.log(
            `🔄 API key ${keyToTry.version} gặp lỗi 503, chuyển sang key khác...`
          );

          // Kiểm tra xem còn key nào khả dụng không
          const remainingKeys = availableKeys.filter(
            (k) => !failedKeys.includes(k.version)
          );
          if (remainingKeys.length > 0) {
            setError(
              `Dịch vụ tạm thời không khả dụng với ${keyToTry.version}. Đang thử key khác...`
            );
            continue; // Thử key tiếp theo
          }
        }

        // Nếu là key cuối cùng hoặc không phải lỗi 503
        const remainingKeys = availableKeys.filter(
          (k) => !failedKeys.includes(k.version)
        );
        if (remainingKeys.length === 0) {
          break; // Đã thử hết tất cả key
        }
      }
    }

    // Nếu đã thử hết tất cả key
    setLoading(false);
    const errorMessage =
      failedKeys.length > 1
        ? `Tất cả API key đều gặp sự cố. Vui lòng thử lại sau vài phút. (Đã thử: ${failedKeys.join(
            ", "
          )})`
        : `Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.`;

    setError(errorMessage);
    return null;
  };

  return {
    generateResponse,
    loading,
    error,
  };
}
