"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./NorthSection.css";

export default function NorthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 3);
  const section31 = chapter.sections.find((s) => s.section_id === "3.1");
  const section32 = chapter.sections.find((s) => s.section_id === "3.2");

  return (
    <div className="north-section">
      {/* Section 3.1: Xây dựng CNXH và Vai trò Hậu phương */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">3.1</div>
            <h3 className="subsection-title">{section31.title}</h3>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Vai trò của Miền Bắc XHCN",
                  <div>
                    <p>
                      Sau Hiệp định Giơnevơ (1954), miền Bắc được giải phóng
                      hoàn toàn và trở thành{" "}
                      <strong>căn cứ địa cách mạng</strong> cho cả nước. Đảng
                      Lao động Việt Nam xác định rõ vai trò quyết định nhất của
                      miền Bắc trong toàn bộ sự nghiệp cách mạng.
                    </p>
                    {/* <div className="modal-image-grid">
                      <div className="modal-image-item">
                        <Image
                          src="https://cdn.hvcsnd.edu.vn/uploads/2025/04/08/6/unnamed-57-1744104303.jpg?q=75&f=6&s=mp6hq0egmwc"
                          alt="Xây dựng miền Bắc XHCN"
                          style={{
                            width: "50%",
                            maxWidth: "400px",
                            borderRadius: "4px",
                          }}
                          preview={true}
                        />
                        <p className="modal-caption">Xây dựng miền Bắc XHCN</p>
                      </div>
                      <div className="modal-image-item">
                        <Image
                          src="https://baophapluat.vn/stores/news_dataimages/dieulinh/032021/18/15/nhip-song-mien-bac-xa-hoi-chu-nghia.jpg"
                          alt="Nhịp sống miền Bắc"
                          preview={true}
                        />
                        <p className="modal-caption">
                          Nhịp sống miền Bắc thập niên 1960
                        </p>
                      </div>
                    </div> */}
                    <p>
                      <strong>Tư tưởng chiến lược:</strong> "Miền Nam là tiền
                      tuyến lớn, miền Bắc là hậu phương lớn" - Chủ tịch Hồ Chí
                      Minh. Vai trò này thể hiện qua việc cung cấp nguồn lực vật
                      chất, tinh thần và con người cho cuộc kháng chiến chống
                      Mỹ, cứu nước.
                    </p>
                  </div>
                )
              }
            />
          </div>
        </ScrollReveal>

        {/* Vai trò của Miền Bắc XHCN và Vai trò chiến lược và Hero Image */}
        <div className="content-section">
          <h4 className="content-heading">Vai trò của Miền Bắc XHCN</h4>

          <div
            className="strategic-quote"
            style={{
              backgroundColor: "rgba(92, 122, 107, 0.15)",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <p>
              "Miền Bắc XHCN giữ vai trò quyết định nhất đối với toàn bộ sự
              nghiệp cách mạng"
            </p>
            <p className="quote-author">- Chủ tịch Hồ Chí Minh</p>
          </div>

          <div className="two-column-grid" style={{ marginTop: "2rem" }}>
            <div>
              <p className="content-text">
                Giai đoạn 1961–1965, miền Bắc thực hiện Kế hoạch 5 năm lần thứ
                nhất nhằm xây dựng bước đầu cơ sở vật chất-kỹ thuật của CNXH.
              </p>
              <p className="content-text">
                Khi Mỹ mở rộng chiến tranh phá hoại miền Bắc (từ 5/8/1964), Đảng
                đã kịp thời chuyển hướng xây dựng kinh tế cho phù hợp với chiến
                tranh. Miền Bắc tiến hành chiến tranh nhân dân chống chiến tranh
                phá hoại, vừa sản xuất vừa chiến đấu, với tinh thần "Không có gì
                quý hơn độc lập, tự do".
              </p>
              <p className="content-text">
                Các phong trào thi đua như "Ba sẵn sàng" (thanh niên), "Ba đảm
                đang" (phụ nữ), "Tay cày tay súng" (nông dân) được triển khai
                mạnh mẽ, đảm bảo sản xuất và chi viện cho tiền tuyến.
              </p>
            </div>

            <div className="hero-image-wrapper">
              <Image
                src="https://uongtrathoi.com/upload/Pages/2-8598-1636337948.jpg"
                alt=" Xây dựng cơ sở vật chất miền Bắc xã hội chủ nghĩa"
                preview={true}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <p className="image-caption">
                Xây dựng cơ sở vật chất miền Bắc xã hội chủ nghĩa
              </p>
            </div>
          </div>
        </div>

        {/* Five Year Plan - Expanded Content */}
        <ScrollReveal variant="slideLeft" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">
              Kế hoạch 5 năm lần thứ nhất (
              {section31.content.first_five_year_plan.period})
            </h4>

            <p className="content-text">
              <strong>Mục tiêu:</strong>{" "}
              {section31.content.first_five_year_plan.goal}
            </p>

            <div className="two-column-grid">
              <div className="content-column">
                <h5 className="column-title">Mục tiêu chính</h5>
                <ul className="info-list">
                  <li>Xây dựng bước đầu cơ sở vật chất-kỹ thuật của CNXH</li>
                  <li>Phát triển công nghiệp, đặc biệt là công nghiệp nặng</li>
                  <li>
                    Cải tạo nông nghiệp theo hướng{" "}
                    <strong
                      className="highlight-term"
                      onClick={() =>
                        openModal(
                          "Tập thể hóa nông nghiệp",
                          <div>
                            <p>
                              <strong>Tập thể hóa nông nghiệp</strong> là quá
                              trình chuyển đổi từ sản xuất nhỏ, manh mún sang
                              sản xuất tập thể theo mô hình hợp tác xã.
                            </p>
                            <p>
                              <strong>Mục đích:</strong> Nâng cao năng suất, cơ
                              giới hóa nông nghiệp, cải thiện đời sống nông dân.
                            </p>
                            <p>
                              <strong>Kết quả:</strong> Đến năm 1965, 90% hộ
                              nông dân miền Bắc tham gia hợp tác xã.
                            </p>
                          </div>
                        )
                      }
                    >
                      tập thể hóa{" "}
                      <InfoCircleOutlined
                        style={{ fontSize: "0.85em", color: "#1890ff" }}
                      />
                    </strong>
                  </li>
                  <li>Nâng cao đời sống vật chất và tinh thần nhân dân</li>
                </ul>
              </div>

              <div className="content-column">
                <h5 className="column-title">Thành tựu nổi bật</h5>
                <ul className="info-list">
                  <li>
                    Xây dựng các nhà máy công nghiệp quan trọng:{" "}
                    <strong>Nhà máy Thép Thái Nguyên, Xi măng Hải Phòng</strong>
                  </li>
                  <li>
                    Hoàn thành tập thể hóa nông nghiệp cơ bản vào năm 1965
                  </li>
                  <li>Phát triển giáo dục và y tế miễn phí cho nhân dân</li>
                  <li>
                    Tăng trưởng GDP bình quân <strong>6,5%/năm</strong>{" "}
                    (1961-1964)
                  </li>
                </ul>
              </div>
            </div>

            <div className="image-grid-2">
              <div className="image-item">
                <Image
                  src="https://thainguyen.dcs.vn/uploads/hoat-dong-cua-cac-dang-bo/2024_06/image-20240604134132-3.jpeg"
                  alt="Nhà máy Thép Thái Nguyên"
                  preview={true}
                  sizes="50%"
                  className="section-image"
                />
                <p className="image-caption">
                  Nhà máy Thép Thái Nguyên - Biểu tượng công nghiệp hóa
                </p>
              </div>
              <div className="image-item">
                <Image
                  src="https://image.plo.vn/w1000/Uploaded/2025/abxbflu/2014_04_30/11_PJFS.jpg.webp"
                  alt="Đời sống miền Bắc"
                  preview={true}
                  className="section-image"
                />
                <p className="image-caption">
                  Đời sống nhân dân miền Bắc thập niên 1960
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Wartime Adjustment - Expanded */}
        <ScrollReveal variant="slideRight" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">
              Điều chỉnh Chiến lược trong Chiến tranh
            </h4>

            <div>
              <p className="warning-text">
                <strong>Bối cảnh:</strong> Từ ngày 5/8/1964, Mỹ bắt đầu cuộc{" "}
                <strong
                  className="highlight-term"
                  onClick={() =>
                    openModal(
                      "Chiến tranh phá hoại miền Bắc",
                      <div>
                        <p>
                          <strong>
                            Chiến tranh phá hoại miền Bắc (1964-1972)
                          </strong>{" "}
                          là chiến dịch không kích quy mô lớn của Mỹ nhằm phá
                          hủy hệ thống kinh tế, giao thông và tinh thần chiến
                          đấu của miền Bắc.
                        </p>
                        <p>
                          <strong>Quy mô:</strong> Gần 3 triệu tấn bom đạn được
                          ném xuống miền Bắc, nhiều hơn tổng số bom đạn trong
                          Thế chiến II.
                        </p>
                        <p>
                          <strong>Mục đích:</strong> Phá hoại kinh tế, gây hoang
                          mang và buộc Việt Nam phải đầu hàng, ngừng chi viện
                          cho miền Nam.
                        </p>
                        <div className="modal-image-grid">
                          <div className="modal-image-item">
                            <Image
                              src="https://cdnphoto.dantri.com.vn/M4ylaWSUZZiPtu8nw5vBogpQM_8=/zoom/1200_630/2024/09/04/chien-tranh-phao-huy-mien-bac-crop-1725420799537.jpeg"
                              alt="Máy bay B-52"
                              preview={true}
                            />
                            <p className="modal-caption">
                              Máy bay B-52 Mỹ đánh phá miền Bắc
                            </p>
                          </div>
                          <div className="modal-image-item">
                            <Image
                              src="https://baoquocte.vn/stores/news_dataimages/hoangoanh/112019/22/15/croped/1_1.jpg"
                              alt="Phòng không"
                              preview={true}
                            />
                            <p className="modal-caption">
                              Nhân dân tham gia phòng không
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                >
                  chiến tranh phá hoại miền Bắc{" "}
                  <InfoCircleOutlined
                    style={{ fontSize: "0.85em", color: "#1890ff" }}
                  />
                </strong>{" "}
                bằng không quân và hải quân. Đế quốc Mỹ ném hàng triệu tấn bom
                đạn, nhằm phá hoại kinh tế và buộc Việt Nam đầu hàng.
              </p>
            </div>

            <div className="two-column-grid">
              <div>
                <h5 className="section-subheading">Phương châm điều chỉnh</h5>
                <div>
                  <p className="strategy-slogan">
                    "Vừa sản xuất vừa chiến đấu"
                  </p>
                  <ul className="info-list">
                    <li>
                      Điều chỉnh kế hoạch xây dựng kinh tế phù hợp chiến tranh
                    </li>
                    <li>Tản cư dân cư và nhà máy ra các vùng an toàn</li>
                    <li>Huy động toàn dân tham gia phòng không</li>
                    <li>Duy trì sản xuất trong điều kiện bom đạn</li>
                  </ul>
                </div>
              </div>

              <div>
                <h5 className="section-subheading">Kết quả đạt được</h5>
                <div>
                  <ul className="info-list">
                    <li>Miền Bắc vẫn duy trì được sản xuất và đời sống</li>
                    <li>Tiếp tục chi viện cho tiền tuyến miền Nam</li>
                    <li>Bắn rơi hàng nghìn máy bay Mỹ</li>
                    <li>
                      Tinh thần "Không có gì quý hơn độc lập, tự do" lan tỏa
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="emphasis-quote">
            <p>"{section31.content.wartime_adjustment.spirit}"</p>
            <p className="quote-author">
              - Tinh thần chiến đấu của nhân dân Việt Nam
            </p>
          </div> */}
          </div>
        </ScrollReveal>

        {/* Emulation Movements - Expanded */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="content-section">
            <h4 className="content-heading">Phong trào Thi đua Yêu nước</h4>

            <p className="section-intro">
              Trong bối cảnh chiến tranh, Đảng phát động các phong trào thi đua
              yêu nước nhằm huy động toàn dân tham gia xây dựng và bảo vệ miền
              Bắc, đồng thời chi viện cho tiền tuyến miền Nam.
            </p>

            <div className="movements-grid-expanded">
              {/* Ba sẵn sàng */}
              <div className="movement-card-expanded">
                <div className="movement-header youth">
                  <h5 className="movement-title">Ba sẵn sàng</h5>
                  <span className="movement-badge">Thanh niên</span>
                </div>
                <ul className="movement-content-list">
                  <li>
                    <strong>Sẵn sàng đi bộ đội</strong> - Tham gia quân đội bảo
                    vệ Tổ quốc
                  </li>
                  <li>
                    <strong>Sẵn sàng đi công tác</strong> - Nhận nhiệm vụ ở bất
                    kỳ đâu
                  </li>
                  <li>
                    <strong>Sẵn sàng đi làm việc</strong> - Ở bất cứ nơi đâu Tổ
                    quốc cần
                  </li>
                </ul>
                <div className="movement-image">
                  <Image
                    src="https://doanthanhnien.vn/Content/uploads/images/132829702148100812_3-san-sang-080821.jpg"
                    alt="Thanh niên xung phong"
                    preview={true}
                    className="movement-img"
                  />
                  <p className="image-caption">Thanh niên xung phong</p>
                </div>
              </div>

              {/* Ba đảm đang */}
              <div className="movement-card-expanded">
                <div className="movement-header women">
                  <h5 className="movement-title">Ba đảm đang</h5>
                  <span className="movement-badge">Phụ nữ</span>
                </div>
                <ul className="movement-content-list">
                  <li>
                    <strong>Đảm đang công việc của chồng</strong> - Khi chồng đi
                    chiến đấu
                  </li>
                  <li>
                    <strong>Đảm đang sản xuất</strong> - Phát triển kinh tế,
                    nuôi sống gia đình
                  </li>
                  <li>
                    <strong>Đảm đang nuôi dạy con</strong> - Chăm sóc gia đình
                    và xã hội
                  </li>
                </ul>
                <div className="movement-image">
                  <Image
                    src="https://cdn.nhandan.vn/images/11f4e8a9cd502b98d7f9c51888e4aacaacb6299525b9638014fae82f8984aa5ba12a2623f745faf2db5624b2f2365334e2a64358745e0ad5ff703e4a542f813ebd785253b965d63491ad35d8cbe8ce4143313a37993e9ca5ab86f2a561726753/vnapotalky-1587825863-70-7012.jpg.webp"
                    alt="Phụ nữ ba đảm đang"
                    preview={true}
                    className="movement-img"
                  />
                  <p className="image-caption">Phụ nữ Việt Nam ba đảm đang</p>
                </div>
              </div>

              {/* Tay cày tay súng */}
              <div className="movement-card-expanded">
                <div className="movement-header farmer">
                  <h5 className="movement-title">Tay cày tay súng</h5>
                  <span className="movement-badge">Nông dân</span>
                </div>
                <ul className="movement-content-list">
                  <li>
                    <strong>Vừa làm nông nghiệp</strong> - Vừa sẵn sàng chiến
                    đấu
                  </li>
                  <li>
                    <strong>Tham gia dân quân du kích</strong> - Bảo vệ quê
                    hương
                  </li>
                  <li>
                    <strong>Duy trì sản xuất</strong> - Trong điều kiện chiến
                    tranh
                  </li>
                </ul>
                <div className="movement-image">
                  <Image
                    src="https://phunu.hochiminhcity.gov.vn/img/Upload/web2b/Album/ContentNews/2016-9/36546-3a_10920160816.jpg"
                    alt="Tay cày tay súng"
                    preview={true}
                    className="movement-img"
                  />
                  <p className="image-caption">Nông dân tay cày tay súng</p>
                </div>
              </div>
            </div>

            <div className="significance-box">
              <h5 className="significance-title">Ý nghĩa lịch sử</h5>
              <p className="significance-text">
                Các phong trào thi đua này đã{" "}
                <strong>huy động sức mạnh toàn dân</strong>, tạo nên khối đại
                đoàn kết vững mạnh, góp phần quyết định vào thắng lợi cuối cùng
                của cách mạng Việt Nam. Đây là biểu hiện của sức mạnh chiến
                tranh nhân dân, khi mỗi người dân đều là chiến sĩ bảo vệ Tổ
                quốc.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section 3.2: Đường Hồ Chí Minh */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">3.2</div>
            <h3 className="subsection-title">{section32.title}</h3>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Kỳ tích Đường Hồ Chí Minh",
                  <div>
                    <p>
                      Đường Hồ Chí Minh (còn gọi là Đường Trường Sơn) là một
                      trong những kỳ tích vĩ đại nhất của dân tộc Việt Nam trong
                      cuộc kháng chiến chống Mỹ, cứu nước. Đây là tuyến đường
                      vận tải chiến lược huyết mạch nối liền miền Bắc và miền
                      Nam, thể hiện ý chí kiên cường và trí tuệ sáng tạo của
                      nhân dân Việt Nam.
                    </p>
                    <div className="modal-image-grid">
                      <div className="modal-image-item">
                        <Image
                          src="https://vnanet.vn/Data/Articles/2020/01/11/4369830/vna_potal_90_nam_dcs_viet_nam_mo_duong_truong_son_-_su_nhay_ben_tu_duy_va_tai_thao_luoc_trong_chi_dao_chien_tranh_cua_dang__stand.jpg"
                          alt="Đường Trường Sơn"
                          preview={true}
                        />
                        <p className="modal-caption">
                          Xây dựng Đường Trường Sơn
                        </p>
                      </div>
                      <div className="modal-image-item">
                        <Image
                          src="https://file1.dangcongsan.vn/data/0/images/2019/05/19/upload_2271/doan-559-copy1.jpg"
                          alt="Đoàn 559"
                          preview={true}
                        />
                        <p className="modal-caption">Bộ đội Đoàn 559</p>
                      </div>
                    </div>
                    <p>
                      <strong>Tên gọi:</strong> Đường 559 (theo ngày ra đời
                      19/5/1959), Đường Hồ Chí Minh (để tưởng nhớ Chủ tịch Hồ
                      Chí Minh), Đường Trường Sơn (theo địa danh dãy núi Trường
                      Sơn).
                    </p>
                    <p>
                      <strong>Tuyến đường huyền thoại:</strong> Đường Hồ Chí
                      Minh đã chịu đựng gần 3 triệu tấn bom đạn của Mỹ, kể cả
                      chiến tranh hóa học, nhưng vẫn duy trì hoạt động liên tục
                      suốt 16 năm. Đây là biểu tượng của sức mạnh chiến tranh
                      nhân dân, của tinh thần bất khuất và trí tuệ Việt Nam.
                    </p>
                  </div>
                )
              }
            />
          </div>
        </ScrollReveal>
        {/* Hero Image
        <div className="hero-image-wrapper">
          <Image
            src="https://vnanet.vn/Data/Articles/2020/01/11/4369830/vna_potal_90_nam_dcs_viet_nam_mo_duong_truong_son_-_su_nhay_ben_tu_duy_va_tai_thao_luoc_trong_chi_dao_chien_tranh_cua_dang__stand.jpg"
            alt="Đường Hồ Chí Minh"
            preview={true}
            className="hero-image"
          />
          <p className="image-caption">
            Đoàn 567 xuyên núi thông Đường Trường Sơn (10/1973)
          </p>
        </div> */}
        {/* Founding & Strategic Thinking - Expanded */}
        <div className="content-section">
          <h4 className="content-heading">Thành lập Đoàn 559</h4>

          <div className="founding-info-box">
            <div className="founding-detail">
              <span className="detail-label">Ngày thành lập:</span>
              <span className="detail-value">
                {section32.content.founding.date}
              </span>
            </div>
            <div className="founding-detail">
              <span className="detail-label">Tên gọi:</span>
              <span className="detail-value">
                {section32.content.founding.name}
              </span>
            </div>
            <div className="founding-detail">
              <span className="detail-label">Chức năng:</span>
              <span className="detail-value">
                {section32.content.founding.function}
              </span>
            </div>
          </div>

          <div className="">
            <div>
              <h5 className="section-subheading">Lý do thành lập</h5>
              <ul className="info-list">
                <li>
                  Miền Nam cần nguồn chi viện về vũ khí, lương thực, quân số từ
                  miền Bắc
                </li>
                <li>
                  Đường biển bị{" "}
                  <strong
                    className="highlight-term"
                    onClick={() =>
                      openModal(
                        "Phong tỏa biển của Hải quân Mỹ",
                        <div>
                          <p>
                            <strong>Phong tỏa biển</strong> là chiến lược của
                            Hải quân Mỹ nhằm ngăn chặn mọi hoạt động vận chuyển
                            vũ khí, lương thực từ miền Bắc vào miền Nam qua
                            đường biển.
                          </p>
                          <p>
                            <strong>Lực lượng:</strong> Hạm đội 7 Hải quân Mỹ
                            triển khai hàng chục tàu chiến, máy bay tuần tra.
                          </p>
                          <p>
                            <strong>Hậu quả:</strong> Buộc Việt Nam phải tìm
                            tuyến đường vận tải thay thế qua đường bộ.
                          </p>
                        </div>
                      )
                    }
                  >
                    Hải quân Mỹ phong tỏa{" "}
                    <InfoCircleOutlined
                      style={{ fontSize: "0.85em", color: "#1890ff" }}
                    />
                  </strong>
                  , cần tuyến đường bộ an toàn
                </li>
                <li>
                  Thực hiện tư tưởng chiến lược "Miền Bắc là hậu phương lớn,
                  miền Nam là tiền tuyến lớn"
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="emphasis-quote">
            <p>"{section32.content.strategic_thinking}"</p>
            <p className="quote-author">- Tư tưởng chiến lược của Đảng</p>
          </div> */}

          <div className="image-grid-2">
            <div className="image-item">
              <Image
                src="https://baotanglichsu.vn/DataFiles/Uploaded/Portal0/Images/Tintuc_cgs_vn_201651718h28m34s.jpg"
                alt="Đoàn 559"
                preview={true}
                className="section-image"
              />
              <p className="image-caption">Bộ đội Đoàn 559 xây dựng đường</p>
            </div>
            <div className="image-item">
              <Image
                src="https://binhdoan12.vn/wp-content/uploads/2022/08/duong-truong-son-huyen-thoai-2.jpg"
                alt="Đoàn xe chi viện cho miền Nam đi qua Trường Sơn"
                preview={true}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "4px",
                }}
                className="section-image"
              />
              <p className="image-caption">Chiến sĩ Trường Sơn vận chuyển</p>
            </div>
          </div>
        </div>
        {/* Specifications - Expanded */}
        <div className="content-section">
          <h4 className="content-heading">Quy mô và Thông số Kỹ thuật</h4>

          <p className="section-intro">
            Đường Hồ Chí Minh là một{" "}
            <strong>hệ thống vận tải chiến lược đồ sộ</strong>, bao gồm nhiều
            tuyến đường, cầu cống, đường ống dẫn xăng dầu và hệ thống thông tin
            liên lạc. Đây là công trình kỹ thuật vĩ đại được xây dựng bằng sức
            người trong điều kiện chiến tranh khốc liệt.
          </p>

          <div className="specs-grid">
            <div className="spec-item">
              <div className="spec-value">
                {section32.content.specifications.duration}
              </div>
              <div className="spec-label">Thời gian hoạt động</div>
              <p className="spec-desc">
                Duy trì liên tục suốt cuộc kháng chiến
              </p>
            </div>
            <div className="spec-item">
              <div className="spec-value">
                {section32.content.specifications.road_length}
              </div>
              <div className="spec-label">Đường bộ</div>
              <p className="spec-desc">Cho xe cơ giới qua địa hình hiểm trở</p>
            </div>
            <div className="spec-item">
              <div className="spec-value">
                {section32.content.specifications.pipeline_length}
              </div>
              <div className="spec-label">Đường ống xăng dầu</div>
              <p className="spec-desc">Cung cấp nhiên liệu cho chiến trường</p>
            </div>
            <div className="spec-item">
              <div className="spec-value">
                {section32.content.specifications.communication_lines}
              </div>
              <div className="spec-label">Thông tin liên lạc</div>
              <p className="spec-desc">Đảm bảo chỉ huy thông suốt</p>
            </div>
          </div>

          <div className="construction-box">
            <h5 className="construction-title">Kỹ thuật xây dựng</h5>
            <p className="construction-text">
              Trong điều kiện <strong>thiếu thốn máy móc</strong>, bộ đội Trường
              Sơn đã sử dụng công cụ thô sơ (cuốc, xẻng, thuốc nổ tự chế), kết
              hợp <strong>sức người và trí tuệ sáng tạo</strong> để xây dựng
              tuyến đường xuyên qua địa hình hiểm trở nhất Việt Nam: núi cao,
              rừng rậm, sông suối.
            </p>
          </div>

          <div className="image-grid-2">
            <div className="image-item">
              <Image
                src="https://baothainguyen.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/052024/1-duong_truong_son_20240517163117_20240518092656.jpg"
                alt="Xuyên núi thông đường"
                preview={true}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "4px",
                }}
                className="section-image"
              />
            </div>
            <div className="image-item">
              <Image
                src="https://media.vov.vn/sites/default/files/styles/large/public/2024-05/123100b4945735096c46.jpg"
                alt="Vận chuyển"
                preview={true}
                style={{
                  width: "98%",
                  maxWidth: "400px",
                  borderRadius: "4px",
                }}
                className="section-image"
              />
            </div>
          </div>
        </div>
        {/* Challenges - Expanded */}
        <div className="content-section">
          <h4 className="content-heading">Thử thách và Khó khăn</h4>

          <p className="section-intro">
            Đường Hồ Chí Minh là{" "}
            <strong>mục tiêu tấn công hàng đầu của Mỹ</strong>. Đế quốc Mỹ đã sử
            dụng mọi thủ đoạn nhằm phá hủy tuyến đường này, nhưng bộ đội Trường
            Sơn vẫn kiên cường bảo vệ và duy trì hoạt động.
          </p>

          <div className="challenges-grid">
            <div className="challenge-item danger">
              <h5 className="challenge-name">Bom đạn dữ dội</h5>
              <p className="challenge-detail">
                <strong>Gần 3 triệu tấn bom đạn</strong> được ném xuống (nhiều
                hơn tổng số bom đạn trong Thế chiến II). Mỹ sử dụng{" "}
                <strong
                  className="highlight-term"
                  onClick={() =>
                    openModal(
                      "Các loại bom đạn của Mỹ",
                      <div>
                        <p>
                          <strong>Bom thảm (carpet bombing):</strong> Ném hàng
                          trăm quả bom cùng lúc, phá hủy diện rộng.
                        </p>
                        <p>
                          <strong>Bom bi:</strong> Bom chứa hàng nghìn viên bi
                          thép, gây sát thương cao với người.
                        </p>
                        <p>
                          <strong>Bom chùm:</strong> Phát tán thành hàng trăm
                          bom nhỏ, bao phủ diện tích lớn.
                        </p>
                        <p>
                          <strong>Bom xuyên:</strong> Thiết kế để xuyên sâu
                          trước khi nổ, phá hủy boongke, hầm trú ẩn.
                        </p>
                      </div>
                    )
                  }
                >
                  bom thảm, bom bi, bom chùm{" "}
                  <InfoCircleOutlined
                    style={{ fontSize: "0.85em", color: "#1890ff" }}
                  />
                </strong>
              </p>
            </div>

            <div className="challenge-item warning">
              <h5 className="challenge-name">Chiến tranh hóa học</h5>
              <p className="challenge-detail">
                Phun{" "}
                <strong
                  className="highlight-term"
                  onClick={() =>
                    openModal(
                      "Chiến tranh hóa học",
                      <div>
                        <p>
                          <strong>Chất độc da cam (Agent Orange):</strong> Chất
                          diệt cỏ độc hại gây ung thư, dị tật bẩm sinh.
                        </p>
                        <p>
                          <strong>Mục đích:</strong> Phá rừng che phủ đường, làm
                          lộ mục tiêu cho máy bay ném bom.
                        </p>
                        <p>
                          <strong>Hậu quả:</strong> Hàng triệu người Việt Nam bị
                          ảnh hưởng, hệ sinh thái bị tàn phá nặng nề.
                        </p>
                      </div>
                    )
                  }
                >
                  chất độc da cam{" "}
                  <InfoCircleOutlined
                    style={{ fontSize: "0.85em", color: "#1890ff" }}
                  />
                </strong>
                , chất diệt cỏ để phá rừng che phủ, làm lộ mục tiêu
              </p>
            </div>

            <div className="challenge-item terrain">
              <h5 className="challenge-name">Địa hình khắc nghiệt</h5>
              <p className="challenge-detail">
                Núi cao, rừng rậm, sông suối hiểm trở. Đường xuyên qua{" "}
                <strong>dãy Trường Sơn</strong> với độ cao lên tới 2,000m
              </p>
            </div>

            <div className="challenge-item nature">
              <h5 className="challenge-name">Thiên tai</h5>
              <p className="challenge-detail">
                Mưa lũ, sạt lở đất thường xuyên. Mùa mưa kéo dài 6-8 tháng/năm,
                gây khó khăn cho vận chuyển
              </p>
            </div>

            <div className="challenge-item health">
              <h5 className="challenge-name">Dịch bệnh</h5>
              <p className="challenge-detail">
                Sốt rét, sốt xuất huyết hoành hành trong rừng sâu. Thiếu thuốc
                men, điều kiện y tế khó khăn
              </p>
            </div>
          </div>

          <div>
            <h5 className="victory-title">Ý chí chiến thắng</h5>
            <p className="victory-text">
              Bất chấp mọi khó khăn, bộ đội Trường Sơn đã kiên trì xây dựng, bảo
              vệ và duy trì hoạt động của tuyến đường suốt{" "}
              <strong>16 năm</strong>. Họ đã viết nên câu chuyện huyền thoại về
              ý chí kiên cường và tinh thần bất khuất của dân tộc Việt Nam.{" "}
              <strong>
                "Đường có thể bị phá, nhưng không bao giờ bị đứt!"
              </strong>
            </p>
          </div>
        </div>
        {/* Support Results */}
        <div className="">
          <h4 className="content-heading">Kết quả Chi viện</h4>

          <div>
            <h5 className="stats-heading">Tổng thể (1959-1975)</h5>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">
                  {section32.content.support_results.overall.troops}
                </div>
                <div className="stat-label">Bộ đội chủ lực</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">
                  {section32.content.support_results.overall.weapons_food}
                </div>
                <div className="stat-label">Vũ khí & Lương thực</div>
              </div>
            </div>
          </div>

          {/* <div className="campaign-block">
            <h5 className="stats-heading">
              Chiến dịch Mùa Xuân 1975
              <Button
                type="text"
                size="small"
                icon={<InfoCircleOutlined />}
                onClick={() =>
                  openModal(
                    "Chi viện quyết định cho Chiến dịch Mùa Xuân 1975",
                    <div>
                      <p>
                        Trong giai đoạn quyết định của cuộc kháng chiến,{" "}
                        <strong>từ tháng 1 đến tháng 4 năm 1975</strong>, Đường
                        Hồ Chí Minh đã phát huy tối đa năng lực chi viện, đóng
                        vai trò then chốt trong thắng lợi của Chiến dịch Hồ Chí
                        Minh.
                      </p>
                      <div className="modal-section">
                        <h5 className="modal-subheading">
                          Thành tựu chi viện:
                        </h5>
                        <ul>
                          <li>
                            <strong>115.000 quân:</strong> Bộ đội chủ lực được
                            vận chuyển nhanh chóng vào chiến trường Nam Bộ
                          </li>
                          <li>
                            <strong>90.000 tấn hàng:</strong> Vũ khí, đạn dược,
                            lương thực, trang bị được chi viện kịp thời
                          </li>
                          <li>
                            <strong>Thần tốc:</strong> Vận chuyển liên tục ngày
                            đêm, đảm bảo tiến độ cho chiến dịch 55 ngày đêm
                          </li>
                        </ul>
                      </div>
                      <div className="modal-image-grid">
                        <div className="modal-image-item">
                          <Image
                            src="https://file1.dangcongsan.vn/data/0/images/2019/05/19/upload_2271/doan-559-copy1.jpg"
                            alt="Vận chuyển 1975"
                            preview={true}
                          />
                          <p className="modal-caption">
                            Vận chuyển quân số và vật tư
                          </p>
                        </div>
                        <div className="modal-image-item">
                          <Image
                            src="https://vnanet.vn/Data/Articles/2020/01/11/4369830/vna_potal_90_nam_dcs_viet_nam_mo_duong_truong_son_-_su_nhay_ben_tu_duy_va_tai_thao_luoc_trong_chi_dao_chien_tranh_cua_dang__stand.jpg"
                            alt="Đường Trường Sơn 1975"
                            preview={true}
                          />
                          <p className="modal-caption">
                            Đường Trường Sơn năm 1975
                          </p>
                        </div>
                      </div>
                      <p>
                        <strong>Ý nghĩa quyết định:</strong> Nếu không có Đường
                        Hồ Chí Minh và sự chi viện kịp thời này, Chiến dịch Hồ
                        Chí Minh khó có thể thành công nhanh chóng như vậy.
                        Đường Hồ Chí Minh đã góp phần quyết định vào thắng lợi
                        lịch sử ngày 30/4/1975.
                      </p>
                    </div>
                  )
                }
              />
            </h5>
            <div className="text-block">
              <p>
                <strong>Thời gian:</strong>{" "}
                {section32.content.support_results["1975_campaign"].period}
              </p>
              <p>
                <strong>Quân số:</strong>{" "}
                {
                  section32.content.support_results["1975_campaign"]
                    .troops_transported
                }
              </p>
              <p>
                <strong>Hàng hóa:</strong>{" "}
                {
                  section32.content.support_results["1975_campaign"]
                    .supplies_transported
                }
              </p>
              <p>
                <strong>Điểm đến:</strong>{" "}
                {section32.content.support_results["1975_campaign"].destination}
              </p>
            </div>
          </div> */}
        </div>
        {/* Comparison Table */}
        <div className="content-section">
          <h4 className="content-heading">
            {section32.content.comparison_table.title}
          </h4>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Đặc điểm</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                {section32.content.comparison_table.data.map((row, idx) => (
                  <tr key={idx}>
                    <td className="table-label">{row.characteristic}</td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={700}
        className="info-modal"
      >
        {modalContent.content}
      </Modal>
    </div>
  );
}
