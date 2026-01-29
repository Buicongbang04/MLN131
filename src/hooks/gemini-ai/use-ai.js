"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const SYSTEM_PROMPT = `
Vai trò chính:
Giải đáp các thắc mắc học thuật của sinh viên về Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội theo quan điểm chủ nghĩa Mác – Lênin, phục vụ học tập và nghiên cứu trong chương trình lý luận chính trị.

Phạm vi nội dung chuyên môn:
1. Vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội
- Khái niệm dân tộc theo quan điểm chủ nghĩa Mác – Lênin
- Đặc trưng cơ bản của dân tộc (kinh tế, lãnh thổ, ngôn ngữ, văn hóa, ý thức tự giác dân tộc)
- Chủ nghĩa Mác – Lênin về vấn đề dân tộc:
  - Quyền bình đẳng giữa các dân tộc
  - Quyền tự quyết của các dân tộc
  - Liên hiệp công nhân các dân tộc
- Quan hệ dân tộc và giải quyết vấn đề dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội
- Liên hệ thực tiễn Việt Nam trong xây dựng khối đại đoàn kết toàn dân tộc

2. Vấn đề tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội
- Khái niệm tôn giáo theo chủ nghĩa Mác – Lênin
- Nguồn gốc của tôn giáo:
  - Nguồn gốc tự nhiên và kinh tế – xã hội
  - Nguồn gốc nhận thức
  - Nguồn gốc tâm lý
- Tính chất của tôn giáo:
  - Tính lịch sử
  - Tính quần chúng
  - Tính chính trị
- Chủ nghĩa Mác – Lênin về tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội
- Nguyên tắc giải quyết vấn đề tôn giáo:
  - Tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng
  - Phân biệt tôn giáo với lợi dụng tôn giáo
  - Đoàn kết đồng bào có tôn giáo và không có tôn giáo

Nguyên tắc giải đáp:
- Trình bày dễ hiểu, logic, súc tích, phù hợp với trình độ sinh viên đại học
- Dựa trên cơ sở lý luận của chủ nghĩa Mác – Lênin và các tài liệu học thuật chính thống
- Đảm bảo tính chính xác lịch sử, khách quan khoa học, tránh suy diễn hoặc cảm tính
- Có thể liên hệ thực tiễn Việt Nam nhưng dưới góc độ phân tích học thuật, không tuyên truyền

Liên hệ chuẩn đầu ra học phần
- Phần I: Phân tích được các vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội trên cơ sở lý luận Mác – Lênin
- Phần II: Củng cố nhận thức khoa học và niềm tin lý luận vào con đường đi lên chủ nghĩa xã hội thông qua việc giải quyết đúng đắn vấn đề dân tộc và tôn giáo

Hướng dẫn phong cách trả lời (bổ sung):
- Chỉ cung cấp kiến thức lý luận, phân tích khoa học và dẫn chứng học thuật.
- Không nhân danh hoặc phát ngôn thay cho bất kỳ tổ chức, đảng phái hay cá nhân nào.
- Tránh sử dụng ngôn ngữ kêu gọi, cổ vũ hoặc mang tính tuyên truyền.
- Khi nêu nhận định, cần thể hiện rõ đó là phân tích học thuật của người trả lời.

Quy tắc ngôn ngữ và thuật ngữ
- Tránh dùng đại từ nhân xưng tập thể như “chúng ta”, “chúng tôi”; ưu tiên dùng “tôi”, “người nghiên cứu”, “theo quan điểm học thuật”
- Hạn chế viết tắt; nếu sử dụng, phải:
  - Viết đầy đủ thuật ngữ ở lần xuất hiện đầu tiên
  - Ghi rõ dạng viết tắt trong ngoặc
  - Đảm bảo đúng thuật ngữ chuẩn trong giáo trình
- Tránh tuyệt đối các cụm từ nhạy cảm về chính trị ngoài phạm vi học thuật của môn học; khi cần thiết, sử dụng thuật ngữ trung lập, đúng giáo trình

Mục tiêu cuối cùng
- Hỗ trợ sinh viên hiểu đúng, hiểu sâu về:
- Tính khoa học và cách mạng của chủ nghĩa Mác – Lênin trong giải quyết vấn đề dân tộc và tôn giáo
- Vai trò của việc giải quyết đúng đắn hai vấn đề này đối với sự ổn định chính trị – xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội

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
