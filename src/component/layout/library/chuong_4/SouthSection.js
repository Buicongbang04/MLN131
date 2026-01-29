"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import ARImage from "@/component/common/ARImage";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./SouthSection.css";

export default function SouthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 4);
  const section41 = chapter?.sections.find((s) => s.section_id === "4.1");
  const section42 = chapter?.sections.find((s) => s.section_id === "4.2");
  const section43 = chapter?.sections.find((s) => s.section_id === "4.3");
  const section44 = chapter?.sections.find((s) => s.section_id === "4.4");

  return (
    <div className="south-section">
      {/* ==================== SECTION 4.1 ==================== */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">4.1</div>
            <h3 className="subsection-title">{section41?.title}</h3>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Chiến tranh Cục bộ (1965-1968)",
                  <div className="modal-content">
                    <h4>Khái niệm "Chiến tranh Cục bộ"</h4>
                    <p>
                      <strong>Chiến tranh Cục bộ</strong> là chiến lược quân sự
                      mà Mỹ triển khai sau khi chiến lược "Chiến tranh Đặc biệt"
                      thất bại. Đặc điểm nổi bật:
                    </p>
                    <ul>
                      <li>
                        Mỹ trực tiếp đưa quân viễn chinh vào chiến đấu, kết hợp
                        với quân đội Sài Gòn
                      </li>
                      <li>
                        Nhằm tiêu diệt lực lượng cách mạng miền Nam bằng chiến
                        thuật "tìm và tiêu diệt"
                      </li>
                      <li>
                        Sử dụng vũ khí hiện đại, hỏa lực mạnh, máy bay ném bom
                        B-52
                      </li>
                    </ul>
                    <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                      <Image
                        src="https://file3.qdnd.vn/DATA/OLD_IMG/phucthang/2015/4/9/09042015tcq10095312914.jpg"
                        alt="Quân Mỹ"
                        style={{
                          width: "100%",
                          maxWidth: "500px",
                          borderRadius: "4px",
                        }}
                        preview={true}
                      />
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          marginTop: "0.5rem",
                        }}
                      >
                        Quân viễn chinh Mỹ chiến đấu tại miền Nam Việt Nam
                      </p>
                    </div>
                    <h4>Quy mô quân Mỹ</h4>
                    <p>
                      Đến cuối năm 1965, Mỹ đưa <strong>184.000 quân</strong>{" "}
                      vào miền Nam. Con số này tăng lên <strong>385.000</strong>{" "}
                      (1966) và đạt đỉnh <strong>543.000</strong> (1968).
                    </p>
                  </div>
                )
              }
            />
          </div>

          {/* Đường lối của Đảng */}
          <div className="content-section">
            <h4 className="content-heading">Đường lối Chiến lược của Đảng</h4>
            <div className="split-content">
              <div>
                <p className="content-text">
                  Khi Mỹ đưa quân chiến đấu trực tiếp vào miền Nam từ tháng
                  3/1965, Đảng đã kịp thời ban hành{" "}
                  <strong>Nghị quyết Trung ương 11 và 12 (1965)</strong>, phát
                  động cuộc kháng chiến chống Mỹ, cứu nước trên phạm vi toàn
                  quốc.
                </p>
                <div className="strategic-quote">
                  <p>
                    "Kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc
                    Mỹ trong bất cứ tình huống nào, giữ vững thế chiến lược tiến
                    công"
                  </p>
                </div>
                <p className="content-text">
                  Coi <strong>chống Mỹ, cứu nước</strong> là nhiệm vụ thiêng
                  liêng của cả dân tộc. Đảng xác định rõ: Đây là cuộc chiến
                  tranh giải phóng dân tộc chính nghĩa, dù đối thủ là cường quốc
                  quân sự số một thế giới, nhân dân ta vẫn kiên quyết chiến đấu
                  đến thắng lợi.
                </p>
              </div>
              <div>
                <Image
                  src="https://special.nhandan.vn/duong-loi-va-chien-luoc-quan-su-Viet-Nam-phat-trien-cao-thoi-ky-khang-chien-chong-My-cuu-nuoc/assets/rBMwPsNgEe/vna_potal_90_nam_dcs_viet_nam_dang_lanh_dao_ca_nuoc_truc_tiep_chien_dau_chong_de_quoc_my_xam_luoc_1965_-_1973__151902709_stand-665x463.jpg"
                  alt="Toàn dân kháng chiến"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Đảng lãnh đạo toàn dân chiến đấu chống quân viễn chinh Mỹ
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Thắng lợi quân sự */}
        <ScrollReveal variant="slideRight" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">Thắng lợi Quân sự Tiêu biểu</h4>
            <div className="achievement-block">
              <h5>Các trận chiến quan trọng</h5>
              <ul>
                <li>
                  <strong>Chiến thắng Núi Thành (5/1965)</strong>: Trận đánh đầu
                  tiên tiêu diệt một đơn vị quân Mỹ, phá tan huyền thoại "bất
                  khả chiến bại" của quân đội Mỹ.
                  <Button
                    type="text"
                    size="small"
                    icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                    onClick={() =>
                      openModal(
                        "Chiến thắng Núi Thành (5/1965)",
                        <div className="modal-content">
                          <p>
                            Đây là trận chiến đầu tiên quân ta tiêu diệt hoàn
                            toàn một đơn vị quân Mỹ. Trận đánh diễn ra tại Núi
                            Thành (Quảng Ngãi), lực lượng bộ đội chủ lực phối
                            hợp với du kích địa phương tiêu diệt gần 1 tiểu đoàn
                            thủy quân lục chiến Mỹ.
                          </p>
                          <div
                            style={{ textAlign: "center", margin: "1.5rem 0" }}
                          >
                            <Image
                              src="https://nguonluc.com.vn/uploads/images/2023/07/26/h12a-1690365608.jpg"
                              alt="Quân ta chiến đấu"
                              style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "2px",
                              }}
                              preview={true}
                            />
                            <p
                              style={{
                                fontSize: "0.85rem",
                                color: "#666",
                                marginTop: "0.5rem",
                                textAlign: "center",
                              }}
                            >
                              Tượng đài chiến thắng Núi Thành
                            </p>
                          </div>
                          <p>
                            <strong>Ý nghĩa:</strong> Phá tan huyền thoại "bất
                            khả chiến bại" của quân đội Mỹ, tạo niềm tin lớn cho
                            quân và dân ta.
                          </p>
                        </div>
                      )
                    }
                  />
                </li>
                <li>
                  <strong>Chiến thắng Vạn Tường (8/1965)</strong>: Tiêu diệt gần
                  1 tiểu đoàn Mỹ, bẻ gẫy hai cuộc phản công chiến lược mùa khô
                  của Mỹ.
                  <Button
                    type="text"
                    size="small"
                    icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                    onClick={() =>
                      openModal(
                        "Chiến thắng Vạn Tường (8/1965)",
                        <div className="modal-content">
                          <p>
                            Trận Vạn Tường diễn ra từ ngày 18-20/8/1965 tại Vạn
                            Tường (Quảng Ngãi). Quân ta tiêu diệt gần 1.000 tên
                            địch, trong đó có gần 1 tiểu đoàn bộ binh Mỹ và 1
                            tiểu đoàn thiết giáp VNCH.
                          </p>

                          <p>
                            <strong>Ý nghĩa:</strong> Đây là chiến thắng lớn đầu
                            tiên đánh bại kế hoạch "Tìm và tiêu diệt" của Mỹ,
                            chứng tỏ quân ta hoàn toàn có thể chiến thắng quân
                            Mỹ trong điều kiện địch áp đảo về hỏa lực.
                          </p>
                        </div>
                      )
                    }
                  />
                </li>
              </ul>
            </div>

            <div className="split-content reverse">
              <div>
                <Image
                  src="https://thcshaithuonghl.quangtri.edu.vn/upload/30587/fck/qti-hailang-thcshaithuong/2022_06_04_14_03_282.jpg"
                  alt="Chiến thắng quân sự"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Bộ đội ta chiến đấu anh dũng chống quân Mỹ
                </p>
              </div>
              <div>
                <div className="text-block">
                  <p>
                    <strong>Kết quả tổng thể (1965-1968):</strong> Làm thất bại
                    hoàn toàn kế hoạch "tìm và diệt" của địch. Đến giữa năm
                    1968:
                  </p>
                  <ul>
                    <li>
                      Tiêu diệt gần <strong>500.000</strong> tên địch
                    </li>
                    <li>
                      Bắn rơi hơn <strong>3.000</strong> máy bay Mỹ
                    </li>
                    <li>Giải phóng nhiều vùng nông thôn quan trọng</li>
                  </ul>
                </div>
                <div className="emphasis-block">
                  <p>
                    <strong>Thắng lợi miền Bắc (1/11/1968):</strong> Mỹ buộc
                    phải chấm dứt không điều kiện đánh phá miền Bắc bằng không
                    quân và hải quân, sau thất bại trong cuộc Chiến tranh phá
                    hoại lần thứ nhất.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Ba mũi giáp công */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="content-section">
            <h4 className="content-heading">
              Phương châm "Ba mũi giáp công"
              <Button
                type="text"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Ba mũi giáp công",
                    <div className="modal-content">
                      <p>
                        <strong>Ba mũi giáp công</strong> là phương châm chiến
                        lược độc đáo của cách mạng Việt Nam trong kháng chiến
                        chống Mỹ. Đây là sự kết hợp hài hòa ba mũi tiến công
                        đồng thời từ ba hướng khác nhau, tạo nên sức mạnh tổng
                        hợp vượt trội.
                      </p>
                      <h4>1. Mũi Quân sự</h4>
                      <p>
                        Sử dụng vũ trang tiêu diệt sinh lực địch bằng chiến
                        tranh du kích và chiến tranh chính quy. Kết hợp giữa
                        chiến tranh du kích (nhân dân đánh giặc) và chiến tranh
                        chính quy (bộ đội chủ lực).
                      </p>
                      <h4>2. Mũi Chính trị</h4>
                      <p>
                        Vận động quần chúng đấu tranh chính trị, nổi dậy giành
                        chính quyền. Tổ chức biểu tình, đấu tranh đòi quyền lợi,
                        phản đối chính sách của Mỹ-ngụy.
                      </p>
                      <h4>3. Mũi Binh vận</h4>
                      <p>
                        Vận động, phân hóa, làm tan rã quân đội địch từ bên
                        trong. Tuyên truyền, vận động lính ngụy đầu hàng, trốn
                        ngũ, nổi dậy chống lại chính quyền.
                      </p>
                      <p>
                        <strong>Hiệu quả:</strong> Ba mũi giáp công tạo nên sức
                        mạnh tổng hợp, khiến địch phải ứng phó trên nhiều mặt
                        trận, không thể tập trung lực lượng. Đây là một trong
                        những yếu tố quan trọng dẫn đến thắng lợi cuối cùng.
                      </p>
                    </div>
                  )
                }
              />
            </h4>
            <div className="key-decisions-grid">
              <div className="decision-card">
                <h5 className="decision-header">Mũi Quân sự</h5>
                <p>
                  Tiêu diệt sinh lực địch bằng chiến tranh du kích và chiến
                  tranh chính quy. Kết hợp đánh địch ở nông thôn và thành thị.
                </p>
              </div>
              <div className="decision-card">
                <h5 className="decision-header">Mũi Chính trị</h5>
                <p>
                  Vận động quần chúng đấu tranh chính trị, nổi dậy giành chính
                  quyền. Tổ chức biểu tình, đòi quyền lợi, phản đối Mỹ-ngụy.
                </p>
              </div>
              <div className="decision-card">
                <h5 className="decision-header">Mũi Binh vận</h5>
                <p>
                  Vận động, phân hóa, làm tan rã quân đội địch từ bên trong.
                  Tuyên truyền, vận động lính ngụy đầu hàng, trốn ngũ.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 4.2: TẾT MẬU THÂN ==================== */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">4.2</div>
            <h3 className="subsection-title">{section42?.title}</h3>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Tổng tiến công và nổi dậy Tết Mậu Thân 1968",
                  <div className="modal-content">
                    <h4>Tổng quan cuộc Tổng tiến công Tết Mậu Thân</h4>
                    <p>
                      Tổng tiến công và nổi dậy Tết Mậu Thân 1968 là một đòn
                      tiến công chiến lược táo bạo và bất ngờ, đánh thẳng vào
                      trung tâm đầu não của địch vào đêm 30 Tết Nguyên đán Mậu
                      Thân (30-31/1/1968).
                    </p>
                    <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                      <Image
                        src="https://cand.com.vn/Files/Image/nguyenbinh/2018/02/01/4dc5cc76-8dcb-4b2a-9cfa-11b77307b59a.jpg"
                        alt="Quân giải phóng miền Nam tấn công sân bay Tân Sơn Nhất"
                        style={{
                          width: "100%",
                          maxWidth: "500px",
                          borderRadius: "4px",
                        }}
                        preview={true}
                      />
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          marginTop: "0.5rem",
                          textAlign: "center",
                        }}
                      >
                        Bộ đội ta tiến công vào sân bay Tân Sơn Nhất Tết Mậu
                        Thân 1968
                      </p>
                    </div>
                    <h4>Quy mô</h4>
                    <ul>
                      <li>
                        Tấn công đồng loạt hơn <strong>100 thành phố</strong> và
                        thị xã
                      </li>
                      <li>
                        Công kích các mục tiêu quan trọng: Đại sứ quán Mỹ, Dinh
                        Độc Lập, Đài Phát thanh...
                      </li>
                      <li>Huy động hàng chục vạn bộ đội và du kích</li>
                    </ul>
                    <h4>Ý nghĩa</h4>
                    <p>
                      Mặc dù ta chịu tổn thất lớn về lực lượng, Tổng tiến công
                      Tết Mậu Thân có ý nghĩa chiến lược cực kỳ to lớn: Đánh bại
                      ý chí xâm lược của giới cầm quyền Mỹ, buộc Mỹ phải chấp
                      nhận ngồi vào bàn đàm phán tại Paris (5/1968).
                    </p>
                  </div>
                )
              }
            />
          </div>

          {/* Quyết tâm chiến lược */}
          <div className="content-section">
            <h4 className="content-heading">Quyết tâm Chiến lược</h4>
            <div className="split-content reverse">
              <div>
                <ARImage
                  src="https://baothainguyen.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/022024/1-untitled-1_20240211081340.jpg"
                  alt="Tổng tiến công Tết Mậu Thân"
                  qrCodePath={Assets.QRImage1968QrCode}
                  preview={true}
                  style={{ width: "100%", borderRadius: "2px" }}
                  caption="Chủ tịch Hồ Chí Minh chủ trì Hội nghị Bộ Chính trị bàn về Chiến dịch Tết Mậu Thân 1968"
                />
              </div>
              <div>
                <p className="content-text">
                  Bộ Chính trị quyết định{" "}
                  <strong>
                    chuyển cuộc chiến tranh cách mạng miền Nam sang thời kỳ tiến
                    lên giành thắng lợi quyết định
                  </strong>{" "}
                  bằng phương pháp{" "}
                  <strong>tổng công kích—tổng khởi nghĩa</strong> vào tất cả các
                  đô thị và dinh lũy của Mỹ-ngụy.
                </p>
                <p className="content-text">
                  Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 là một đòn
                  tiến công chiến lược táo bạo và bất ngờ, đánh thẳng vào{" "}
                  <strong>trung tâm đầu não của địch</strong> vào đêm 30 Tết
                  Nguyên đán Mậu Thân (30-31/1/1968).
                </p>
                <div className="emphasis-block">
                  <p>
                    Quy mô: Tấn công đồng loạt hơn{" "}
                    <strong>100 thành phố</strong> và thị xã, công kích các mục
                    tiêu quan trọng như Đại sứ quán Mỹ, Dinh Độc Lập, Đài Phát
                    thanh Sài Gòn...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Vai trò Biệt động Sài Gòn */}
        <ScrollReveal variant="slideLeft" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">
              Vai trò của Lực lượng Biệt động Sài Gòn
              <Button
                type="text"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Lực lượng Biệt động Sài Gòn",
                    <div className="modal-content">
                      <h4>Lực lượng Biệt động Sài Gòn</h4>
                      <p>
                        Lực lượng Biệt động Sài Gòn là lực lượng đặc công, hoạt
                        động bí mật trong nội đô Sài Gòn, có nhiệm vụ tấn công
                        bất ngờ vào các mục tiêu quan trọng của địch.
                      </p>
                      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLmZb-4xTO6BrCCt1b9q0Msia5KlqIT2E7Q&s"
                          style={{
                            width: "100%",
                            maxWidth: "400px",
                            borderRadius: "4px",
                          }}
                          preview={true}
                        />
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "#666",
                            textAlign: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          Lực lượng Biệt động Sài Gòn trong cuộc Tổng tiến công
                          Tết Mậu Thân 1968
                        </p>
                      </div>
                      <p>
                        Anh hùng Biệt động Sài Gòn Trần Văn Lai đã sử dụng{" "}
                        <strong>ba ngôi nhà bí mật</strong> để giấu vũ khí ngay
                        trong nội đô Sài Gòn, phục vụ cho cuộc Tổng tiến công
                        Tết Mậu Thân. Các địa điểm này nằm rải rác ở nhiều quận
                        khác nhau, tạo điều kiện thuận lợi cho việc chuẩn bị và
                        triển khai tấn công.
                      </p>
                      <p>
                        Trong đêm 30 Tết, lực lượng Biệt động Sài Gòn đã tấn
                        công thẳng vào Đại sứ quán Mỹ, Dinh Độc Lập, Đài Phát
                        thanh Sài Gòn và nhiều mục tiêu quan trọng khác, gây
                        chấn động dư luận thế giới.
                      </p>
                    </div>
                  )
                }
              />
            </h4>
            <div className="split-content">
              <div>
                <p className="content-text">
                  Trong Tổng tiến công Mậu Thân 1968, lực lượng Biệt động Sài
                  Gòn đóng vai trò quan trọng, tấn công thẳng vào các mục tiêu
                  đầu não của địch như <strong>Đại sứ quán Mỹ</strong>,{" "}
                  <strong>Dinh Độc Lập</strong>, <strong>Đài Phát thanh</strong>
                  .
                </p>
                <p className="content-text">
                  Điển hình là{" "}
                  <strong>Anh hùng Biệt động Sài Gòn Trần Văn Lai</strong> đã sử
                  dụng ba ngôi nhà bí mật để giấu vũ khí ngay trong nội đô Sài
                  Gòn, phục vụ cho cuộc tổng tiến công.
                </p>
                <div className="emphasis-block">
                  <p>
                    Các đơn vị Biệt động đã thâm nhập sâu vào Sài Gòn từ nhiều
                    tháng trước, chuẩn bị vũ khí, nắm địa hình, sẵn sàng cho
                    cuộc tấn công bất ngờ vào đêm 30 Tết.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="https://kenh14cdn.com/203336854389633024/2024/5/21/photo-4-1716265512621318166468.jpeg"
                  alt="Anh hùng Trần Văn Lai"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Hầm chứa vũ khí bí mật trong nội đô của Anh hùng Trần Văn Lai
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Kết quả và Ý nghĩa */}
        <ScrollReveal variant="slideRight" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">Kết quả và Ý nghĩa Chiến lược</h4>
            <div className="achievement-block">
              <h5>Kết quả trực tiếp</h5>
              <ul>
                <li>Tiêu diệt và làm tan rã hàng chục nghìn quân địch</li>
                <li>Giải phóng nhiều vùng nông thôn và ngoại thành</li>
                <li>Gây chấn động dư luận trong nước và quốc tế</li>
              </ul>
            </div>

            <div className="text-block">
              <p>
                Mặc dù ta chịu tổn thất lớn về lực lượng sau các đợt tấn công,
                thắng lợi này có{" "}
                <strong>ý nghĩa chiến lược cực kỳ to lớn</strong>: Nó đánh bại ý
                chí xâm lược của giới cầm quyền Mỹ. Mỹ buộc phải chấp nhận{" "}
                <strong>ngồi vào bàn đàm phán</strong> với ta tại Paris
                (5/1968).
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 4.3: ĐÁNH BẠI VIỆT NAM HÓA ==================== */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">4.3</div>
            <h3 className="subsection-title">{section43?.title}</h3>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  'Chiến lược "Việt Nam hóa Chiến tranh"',
                  <div className="modal-content">
                    <h4>Chiến lược "Việt Nam hóa Chiến tranh"</h4>
                    <p>
                      Sau Tổng tiến công Tết Mậu Thân 1968, Tổng thống Mỹ
                      Richard Nixon chuyển sang chiến lược mới:{" "}
                      <strong>"Việt Nam hóa Chiến tranh"</strong> (1969-1973).
                    </p>
                    <h4>Nội dung chiến lược</h4>
                    <ul>
                      <li>
                        <strong>Rút dần quân Mỹ</strong> khỏi Việt Nam để giảm
                        thiệt hại và áp lực dư luận trong nước
                      </li>
                      <li>
                        <strong>Tăng cường viện trợ vũ khí</strong> hiện đại cho
                        quân đội Sài Gòn
                      </li>
                      <li>
                        <strong>Duy trì cố vấn quân sự</strong> và hỗ trợ không
                        quân
                      </li>
                      <li>
                        Mục tiêu: "Dùng người Việt Nam đánh người Việt Nam"
                      </li>
                    </ul>

                    <h4>Bản chất</h4>
                    <p>
                      Đây không phải là từ bỏ chiến tranh, mà là thay đổi cách
                      thức tiến hành: thay quân Mỹ bằng quân Sài Gòn, nhưng vẫn
                      duy trì ảnh hưởng và kiểm soát chiến tranh.
                    </p>
                  </div>
                )
              }
            />
          </div>

          {/* Chiến lược Việt Nam hóa */}
          <div className="content-section">
            <h4 className="content-heading">
              Chiến lược "Việt Nam hóa Chiến tranh" (1969–1973)
            </h4>
            <div className="split-content reverse">
              <div>
                <Image
                  src="https://nghiencuuquocte.org/wp-content/uploads/2019/04/Vietnamize.jpg"
                  alt="Chiến lược Việt Nam hóa"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Nixon tuyên bố rút quân nhưng tăng viện trợ cho Sài Gòn
                </p>
              </div>
              <div>
                <p className="content-text">
                  Sau Mậu Thân, Tổng thống Mỹ Nixon chuyển sang chiến lược{" "}
                  <strong>"Việt Nam hóa Chiến tranh"</strong> (1969–1973) nhằm{" "}
                  <strong>"dùng người Việt Nam đánh người Việt Nam"</strong> và
                  rút dần quân Mỹ, nhưng vẫn duy trì ảnh hưởng thông qua viện
                  trợ vũ khí và cố vấn quân sự.
                </p>
                <div className="strategic-quote">
                  <p>
                    Đảng ta kiên định giữ vững đường lối chiến lược tiến công,
                    nhận định đây chỉ là thủ đoạn mới của Mỹ để kéo dài chiến
                    tranh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Chiến công liên hợp */}
        <ScrollReveal variant="slideLeft" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">Các Chiến công Liên hợp</h4>
            <div className="achievement-block">
              <h5>Thắng lợi quân sự tiêu biểu</h5>
              <ul>
                <li>
                  <strong>
                    Chiến thắng Lam Sơn 719 (Đường 9 – Nam Lào, 1971)
                  </strong>
                  : Đánh bại cuộc hành quân lớn nhất của Ngụy quân, tiêu diệt 2
                  sư đoàn tinh nhuệ "Nhảy dù" và "Thiết xa".
                  <Button
                    type="text"
                    size="small"
                    icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                    onClick={() =>
                      openModal(
                        "Chiến thắng Lam Sơn 719 (1971)",
                        <div className="modal-content">
                          <p>
                            Lam Sơn 719 là chiến dịch của quân Sài Gòn (có sự hỗ
                            trợ của Mỹ) nhằm cắt đứt Đường Hồ Chí Minh qua Đường
                            9 - Nam Lào vào tháng 2-3/1971.
                          </p>
                          <div
                            style={{ textAlign: "center", margin: "1.5rem 0" }}
                          >
                            <Image
                              src="https://file.qdnd.vn/data/images/0/2021/03/17/vuhuyen/2012020huyen6773g.jpg?dpi=150&quality=100&w=575"
                              alt="Lam Sơn 719"
                              style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "4px",
                              }}
                              preview={true}
                            />
                            <p
                              style={{
                                fontSize: "0.85rem",
                                color: "#666",
                                textAlign: "center",
                                marginTop: "0.5rem",
                              }}
                            >
                              Quân ta chiến đấu tại Đường 9
                            </p>
                          </div>
                          <h4>Kết quả</h4>
                          <ul>
                            <li>
                              Tiêu diệt và làm tan rã 2 sư đoàn tinh nhuệ của
                              Ngụy quân
                            </li>
                            <li>
                              Bắn rơi và phá hủy hàng trăm máy bay trực thăng
                              của Mỹ
                            </li>
                            <li>Bảo vệ thành công Đường Hồ Chí Minh</li>
                          </ul>
                          <p>
                            <strong>Ý nghĩa:</strong> Chứng tỏ khả năng phối hợp
                            chiến đấu của quân ta, làm suy yếu nghiêm trọng
                            "xương sống" của Ngụy quân Sài Gòn, chứng minh chiến
                            lược "Việt Nam hóa" của Mỹ thất bại.
                          </p>
                        </div>
                      )
                    }
                  />
                </li>
                <li>
                  <strong>
                    Chiến dịch Toàn thắng 1-1971 (Đông Bắc Campuchia)
                  </strong>
                  : Chứng tỏ khả năng phối hợp chiến đấu, làm suy yếu "xương
                  sống" của Ngụy quân Sài Gòn.
                </li>
              </ul>
            </div>

            <div className="split-content">
              <div>
                <p className="content-text">
                  Hai chiến thắng này có ý nghĩa đặc biệt quan trọng, chứng minh
                  rằng dù Mỹ viện trợ vũ khí hiện đại, Ngụy quân Sài Gòn vẫn
                  không thể chống lại được quân và dân ta.
                </p>
                <div className="text-block">
                  <p>
                    Thắng lợi này đã tạo tiền đề cho các chiến dịch lớn sau này,
                    khẳng định chiến lược "Việt Nam hóa chiến tranh" của Mỹ đã
                    hoàn toàn thất bại.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="https://file3.qdnd.vn/data/images/0/2024/11/17/upload_2087/doi_khong_ten.jpg?dpi=150&quality=100&w=870"
                  alt="Chiến thắng Lam Sơn 719"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Xác máy bay trực thăng của Mỹ bị quân giải phóng Trung đoàn 64
                  (Sư đoàn 320) bắn rơi trên đồi Không Tên, thuộc huyện Cam Lộ,
                  tỉnh Quảng Trị.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Điện Biên Phủ trên không */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="content-section">
            <h4 className="content-heading">
              Chiến thắng Điện Biên Phủ trên không (12/1972)
              <Button
                type="text"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Điện Biên Phủ trên không",
                    <div className="modal-content">
                      <h4>Điện Biên Phủ trên không</h4>
                      <p>
                        Đây là tên gọi được dùng để chỉ thắng lợi oanh liệt của
                        quân và dân miền Bắc (chủ yếu là Quân chủng Phòng không
                        - Không quân) trong <strong>12 ngày đêm</strong> từ 18
                        đến 30/12/1972, khi đánh trả cuộc tập kích chiến lược
                        bằng máy bay B-52 của không quân Mỹ vào Hà Nội, Hải
                        Phòng và một số địa phương khác.
                      </p>
                      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                        <Image
                          src="https://img.cand.com.vn/resize/600x600/NewFiles/Images/2022/12/19/may_bay-1671458134828.jpg"
                          alt="Điện Biên Phủ trên không"
                          style={{
                            width: "100%",
                            maxWidth: "500px",
                            borderRadius: "4px",
                          }}
                          preview={true}
                        />
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "#666",
                            textAlign: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          Tên lửa phòng không bắn rơi B-52
                        </p>
                      </div>
                      <h4>Máy bay B-52</h4>
                      <p>
                        B-52 là loại máy bay ném bom chiến lược của Mỹ, được coi
                        là "pháo đài bay" bất khả xâm phạm, bay ở độ cao
                        10.000m, mang theo hàng chục tấn bom.
                      </p>
                      <h4>Chiến công</h4>
                      <ul>
                        <li>
                          Bắn rơi <strong>84 máy bay Mỹ</strong>
                        </li>
                        <li>
                          Trong đó có <strong>34 chiếc B-52</strong>
                        </li>
                        <li>
                          Bắt sống <strong>43 giặc lái</strong>
                        </li>
                      </ul>
                      <h4>Ý nghĩa</h4>
                      <p>
                        Chiến thắng này buộc Mỹ phải tuyên bố ngừng mọi hoạt
                        động phá hoại miền Bắc và quay lại bàn đàm phán Paris.
                        Đây là thắng lợi quân sự vang dội, chứng tỏ ý chí kiên
                        cường của nhân dân ta.
                      </p>
                    </div>
                  )
                }
              />
            </h4>

            <div className="emphasis-block">
              <p>
                <strong>Bối cảnh:</strong> Mỹ mở cuộc chiến tranh phá hoại miền
                Bắc lần thứ hai, đỉnh cao là cuộc rải thảm bom bằng pháo đài bay
                B-52 trong <strong>12 ngày đêm (18–30/12/1972)</strong> ở Hà Nội
                và Hải Phòng.
              </p>
            </div>

            <div className="split-content">
              <div>
                <p className="content-text">
                  Quân và dân miền Bắc đã lập nên trận "Điện Biên Phủ trên
                  không", bắn rơi <strong>84 máy bay Mỹ</strong> (trong đó có{" "}
                  <strong>34 chiếc B-52</strong>), bắt sống{" "}
                  <strong>43 giặc lái</strong>.
                </p>
                <div className="text-block">
                  <p>
                    <strong>Ý nghĩa đặc biệt:</strong> B-52 là loại máy bay được
                    Mỹ coi là "bất khả xâm phạm", bay ở độ cao 10.000m. Việc bắn
                    rơi hàng chục chiếc B-52 là kỳ tích quân sự, làm lung lay
                    niềm tin của Mỹ vào ưu thế công nghệ.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="https://file3.qdnd.vn/data/images/0/2025/04/27/upload_2134/1.png?dpi=150&quality=100&w=870"
                  alt="Điện Biên Phủ trên không"
                  preview={true}
                  style={{ width: "100%", borderRadius: "2px" }}
                />
                <p className="image-caption">
                  Bộ đội Tên lửa quán triệt nhiệm vụ trong Chiến dịch Phòng
                  không Hà Nội-Hải Phòng, năm 1972
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Hiệp định Paris */}
        <ScrollReveal variant="slideRight" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">
              Hiệp định Paris (27/1/1973)
              <Button
                type="text"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Hiệp định Paris (27/1/1973)",
                    <div className="modal-content">
                      <h4>Hiệp định Paris về chấm dứt chiến tranh</h4>
                      <p>
                        Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở
                        Việt Nam được ký kết tại Paris, Pháp vào ngày{" "}
                        <strong>27/1/1973</strong>.
                      </p>
                      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                        <Image
                          src="https://dangbo.lhu.edu.vn/Data/News/117/images/40_nam_ky_Hiep_dinh_Paris/H1_iay4l.jpg"
                          alt="Lễ ký Hiệp định Paris"
                          style={{
                            width: "100%",
                            maxWidth: "500px",
                            borderRadius: "4px",
                          }}
                          preview={true}
                        />
                      </div>
                      <h4>Nội dung chính</h4>
                      <ul>
                        <li>
                          Mỹ cam kết <strong>rút hết quân viễn chinh</strong>{" "}
                          khỏi Việt Nam trong vòng 60 ngày
                        </li>
                        <li>
                          <strong>
                            Tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn
                            lãnh thổ
                          </strong>{" "}
                          của Việt Nam
                        </li>
                        <li>
                          Ngừng bắn tại chỗ, hai bên giữ nguyên vùng kiểm soát
                        </li>
                        <li>
                          Giải quyết vấn đề chính trị miền Nam do người Việt Nam
                          quyết định
                        </li>
                      </ul>
                      <h4>Ý nghĩa lịch sử</h4>
                      <p>
                        Hiệp định Paris là thắng lợi có tính chất quyết định,
                        khẳng định nghệ thuật chuyển hóa thành công thắng lợi
                        quân sự thành lợi thế chính trị-ngoại giao của Đảng. Đây
                        là bước ngoặt quan trọng dẫn đến thắng lợi cuối cùng năm
                        1975.
                      </p>
                    </div>
                  )
                }
              />
            </h4>

            <div className="split-content reverse">
              <div>
                <ARImage
                  src="https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/012023/anh_2_20230118093747.jpg"
                  alt="Hiệp định Paris"
                  qrCodePath={Assets.QRImageParisCOnfQrCode}
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
              <div>
                <p className="content-text">
                  Chiến thắng Điện Biên Phủ trên không đã trực tiếp buộc Mỹ phải
                  tuyên bố ngừng mọi hoạt động phá hoại miền Bắc và ký kết{" "}
                  <strong>
                    Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở Việt
                    Nam
                  </strong>{" "}
                  vào ngày <strong>27/1/1973</strong>.
                </p>
                <div className="achievement-block">
                  <h5>Cam kết của Mỹ</h5>
                  <ul>
                    <li>Rút hết quân viễn chinh khỏi Việt Nam</li>
                    <li>
                      Tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh
                      thổ Việt Nam
                    </li>
                  </ul>
                </div>
                <div className="strategic-quote">
                  <p>
                    Đây là thắng lợi có tính chất quyết định, khẳng định nghệ
                    thuật chuyển hóa thành công thắng lợi quân sự thành lợi thế
                    chính trị-ngoại giao của Đảng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 4.4: TỔNG TIẾN CÔNG MÙA XUÂN 1975 ==================== */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">4.4</div>
            <h3 className="subsection-title">{section44?.title}</h3>
            <Button
              type="text"
              icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
              onClick={() =>
                openModal(
                  "Tổng tiến công và nổi dậy Mùa Xuân 1975",
                  <div className="modal-content">
                    <h4>Cuộc Tổng tiến công lịch sử</h4>
                    <p>
                      Cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975 là chiến dịch
                      quân sự lớn nhất và thành công nhất trong lịch sử cách
                      mạng Việt Nam, diễn ra trong <strong>55 ngày đêm</strong>{" "}
                      từ 10/3 đến 30/4/1975.
                    </p>
                    <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
                      <Image
                        src="https://file.qdnd.vn/data/images/0/2020/04/26/xuandung/q533.jpg?dpi=150&quality=100&w=575"
                        alt="Tổng tiến công 1975"
                        style={{
                          width: "100%",
                          maxWidth: "500px",
                          borderRadius: "4px",
                        }}
                        preview={true}
                      />
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#666",
                          marginTop: "0.5rem",
                          textAlign: "center",
                        }}
                      >
                        Lực lượng thọc sâu của Quân đoàn 1 vượt đường 16 tiến
                        vào giải phóng Sài Gòn
                      </p>
                    </div>
                    <h4>Đặc điểm</h4>
                    <ul>
                      <li>
                        <strong>Thần tốc:</strong> Chỉ 55 ngày thay vì kế hoạch
                        2 năm
                      </li>
                      <li>
                        <strong>Táo bạo:</strong> Tiến công đồng loạt nhiều
                        hướng
                      </li>
                      <li>
                        <strong>Linh hoạt:</strong> Điều chỉnh kế hoạch theo
                        tình hình thực tế
                      </li>
                    </ul>
                    <h4>Khẩu hiệu</h4>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "var(--lacquer-red)",
                        textAlign: "center",
                      }}
                    >
                      "Thần tốc, thần tốc hơn nữa! Táo bạo, táo bạo hơn nữa!"
                    </p>
                  </div>
                )
              }
            />
          </div>

          {/* Phước Long */}
          <div className="content-section">
            <h4 className="content-heading">
              Chiến thắng Phước Long (6/1/1975) - Đòn Thăm dò Chiến lược
              <Button
                type="text"
                icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                onClick={() =>
                  openModal(
                    "Chiến thắng Phước Long",
                    <div className="modal-content">
                      <h4>Chiến thắng Phước Long (6/1/1975)</h4>
                      <p>
                        Phước Long là tỉnh lỵ đầu tiên được giải phóng hoàn toàn
                        sau Hiệp định Paris (27/1/1973). Chiến thắng này diễn ra
                        vào ngày <strong>6/1/1975</strong>.
                      </p>
                      <h4>Ý nghĩa như đòn thăm dò</h4>
                      <ul>
                        <li>
                          <strong>Thăm dò phản ứng của Mỹ:</strong> Mỹ đã từ
                          chối can thiệp quân sự trở lại
                        </li>
                        <li>
                          <strong>Kiểm tra sức mạnh Ngụy quân:</strong> Ngụy
                          quân Sài Gòn không có khả năng chiếm lại
                        </li>
                        <li>
                          <strong>Thăm dò dư luận quốc tế:</strong> Không có
                          phản ứng mạnh từ cộng đồng quốc tế
                        </li>
                      </ul>
                      <p>
                        <strong>Kết luận:</strong> Thời cơ giải phóng miền Nam
                        đã chín muồi, tạo cơ sở để Bộ Chính trị quyết định đẩy
                        nhanh tiến độ giải phóng.
                      </p>
                    </div>
                  )
                }
              />
            </h4>

            <div className="split-content">
              <div>
                <p className="content-text">
                  Hội nghị Trung ương 21 (7/1973) đã khẳng định con đường cách
                  mạng miền Nam là <strong>bạo lực cách mạng</strong>, giữ vững
                  thời cơ và thế tiến công.
                </p>
                <p className="content-text">
                  <strong>Chiến thắng Phước Long</strong> (6/1/1975) là tỉnh lỵ
                  đầu tiên được giải phóng hoàn toàn sau Hiệp định Paris. Chiến
                  thắng này có ý nghĩa như một{" "}
                  <strong>đòn thăm dò chiến lược</strong>, chứng minh:
                </p>
                <div className="achievement-block">
                  <h5>Các phát hiện quan trọng</h5>
                  <ul>
                    <li>Ngụy quân Sài Gòn đã suy yếu nghiêm trọng</li>
                    <li>Mỹ không thể quay lại can thiệp (từ chối viện trợ)</li>
                    <li>Thời cơ giải phóng miền Nam đã chín muồi</li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2025-01/12_2.jpg"
                  alt="Chiến thắng Phước Long"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">
                  Quân giải phóng cắm cờ quyết chiến trước dinh Tỉnh trưởng
                  Phước Long ngày 6/1/1975
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Quyết tâm chiến lược */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="content-section">
            <h4 className="content-heading">
              Quyết tâm Lịch sử của Bộ Chính trị
            </h4>
            <div className="emphasis-block">
              <p>
                <strong>Bộ Chính trị</strong> đề ra quyết tâm chiến lược giải
                phóng miền Nam với <strong>kế hoạch hai năm 1975-1976</strong>,
                nhưng linh hoạt:{" "}
                <strong>
                  "Nếu thời cơ đến, lập tức giải phóng miền Nam ngay trong năm
                  1975"
                </strong>
                .
              </p>
            </div>

            <div className="text-block">
              <p>
                Đây là thể hiện bản lĩnh chính trị và nghệ thuật lãnh đạo: vừa
                chặt chẽ trong kế hoạch, vừa linh hoạt trong thực hiện. Khi thời
                cơ đến, Đảng đã quyết đoán ra quyết định lịch sử.
              </p>
            </div>

            <div className="strategic-quote">
              <p>"Thần tốc, thần tốc hơn nữa! Táo bạo, táo bạo hơn nữa!"</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Tổng tiến công 1975 */}
        <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">
              Cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975
            </h4>

            <div className="campaign-stats">
              <div className="stat-item">
                <div className="stat-label">Thời gian</div>
                <div className="stat-value">55 ngày đêm</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Bắt đầu</div>
                <div className="stat-value">10/3/1975</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Kết thúc</div>
                <div className="stat-value">30/4/1975</div>
              </div>
            </div>

            <div className="timeline-section">
              <div className="timeline-item">
                <h5 className="timeline-date">
                  10/3/1975: Chiến dịch Tây Nguyên
                  <Button
                    type="text"
                    size="small"
                    icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                    onClick={() =>
                      openModal(
                        "Chiến dịch Tây Nguyên",
                        <div className="modal-content">
                          <p>
                            Chiến dịch Tây Nguyên mở màn cho Tổng tiến công Mùa
                            Xuân 1975, bắt đầu bằng việc giải phóng{" "}
                            <strong>Buôn Ma Thuột</strong> - thành phố chiến
                            lược ở Tây Nguyên.
                          </p>
                          <h4>Ý nghĩa chiến lược</h4>
                          <ul>
                            <li>
                              Cắt đứt liên lạc giữa miền Bắc và miền Nam của
                              Ngụy quyền
                            </li>
                            <li>
                              Tạo thế chủ động cho các chiến dịch tiếp theo
                            </li>
                            <li>
                              Làm rối loạn hoàn toàn kế hoạch phòng thủ của địch
                            </li>
                          </ul>
                        </div>
                      )
                    }
                  />
                </h5>
                <p className="timeline-event">
                  Mở màn bằng giải phóng Buôn Ma Thuột - cắt đứt liên lạc giữa
                  miền Bắc và miền Nam của Ngụy quyền. Đây là đòn tiến công bất
                  ngờ, làm rối loạn hoàn toàn kế hoạch phòng thủ của địch.
                </p>
              </div>

              <div className="timeline-item">
                <h5 className="timeline-date">
                  Tháng 3/1975: Chiến dịch Huế - Đà Nẵng
                </h5>
                <p className="timeline-event">
                  Giải phóng hai thành phố lớn ở miền Trung trong thời gian kỷ
                  lục. Ngụy quân tháo chạy hỗn loạn, bỏ lại hàng nghìn tấn vũ
                  khí và trang bị.
                </p>
              </div>

              <div className="timeline-item">
                <h5 className="timeline-date">
                  26-30/4/1975: Chiến dịch Hồ Chí Minh
                  <Button
                    type="text"
                    size="small"
                    icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                    onClick={() =>
                      openModal(
                        "Chiến dịch Hồ Chí Minh",
                        <div className="modal-content">
                          <h4>Chiến dịch Hồ Chí Minh (26-30/4/1975)</h4>
                          <p>
                            Chiến dịch tiến công chiến lược lớn nhất, mang tên
                            Chủ tịch Hồ Chí Minh kính yêu, nhằm giải phóng hoàn
                            toàn Sài Gòn và các tỉnh phía Nam.
                          </p>
                          <h4>Phương án tác chiến</h4>
                          <ul>
                            <li>
                              <strong>Tiến công từ nhiều hướng:</strong> Đông,
                              Tây, Nam, Bắc
                            </li>
                            <li>
                              <strong>Tạo "thế trận khép vòng vây"</strong> bao
                              vây Sài Gòn
                            </li>
                            <li>
                              <strong>Phối hợp ba thứ quân:</strong> Bộ binh,
                              Thiết giáp, Pháo binh
                            </li>
                            <li>
                              <strong>Kết hợp quân sự và chính trị:</strong> Vừa
                              đánh vừa vận động địch đầu hàng
                            </li>
                          </ul>
                          <div
                            style={{ textAlign: "center", margin: "1.5rem 0" }}
                          >
                            <Image
                              src="https://cdn.baogialai.com.vn/images/a7e8807136154960810ddb22e3671596d00515809b82358f3211917da963fd1453b5a98c4d5f10d10118c88ceec3473a8858ebed0e54664f6493ccb897769615/images2530108_x_1.jpg"
                              alt="Chiến dịch Hồ Chí Minh"
                              style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "4px",
                              }}
                              preview={true}
                            />
                            <p
                              style={{
                                fontSize: "0.85rem",
                                color: "#666",
                                textAlign: "center",
                                marginTop: "0.5rem",
                              }}
                            >
                              Xe tăng tiến vào Sài Gòn
                            </p>
                          </div>
                          <h4>Kết quả</h4>
                          <p>
                            Chỉ trong 5 ngày đêm (26-30/4), quân ta đã hoàn toàn
                            giải phóng Sài Gòn và các tỉnh phía Nam, chấm dứt 30
                            năm chiến tranh, hoàn thành sự nghiệp giải phóng dân
                            tộc, thống nhất Tổ quốc.
                          </p>
                        </div>
                      )
                    }
                  />
                </h5>
                <p className="timeline-event">
                  Chiến dịch tiến công chiến lược lớn nhất, tiến công từ nhiều
                  hướng (Đông, Tây, Nam, Bắc), tạo "thế trận khép vòng vây" bao
                  vây Sài Gòn. Chỉ trong 5 ngày đêm, quân ta hoàn toàn giải
                  phóng Sài Gòn.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Khoảnh khắc lịch sử */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="content-section">
            <h4 className="content-heading">Khoảnh khắc Lịch sử</h4>
            <div className="split-content">
              <div>
                <div className="historic-moment">
                  <p className="historic-time">11 giờ 30 phút</p>
                  <p className="historic-date">Ngày 30 tháng 4 năm 1975</p>
                  <p className="historic-event">
                    <strong>Cờ cách mạng cắm trên Dinh Độc Lập</strong>
                  </p>
                  <p className="historic-meaning">
                    Đánh dấu chiến thắng hoàn toàn của Chiến dịch Hồ Chí Minh và
                    sự thống nhất Tổ quốc. Kết thúc 30 năm chiến tranh liên tục,
                    hoàn thành khát vọng độc lập, thống nhất của dân tộc.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="https://congan.daklak.gov.vn/documents/10181/1050256/3.jpg/5c3fc357-a336-4ea2-bb4f-94880d7b99b1?t=1714550121779"
                  alt="30 tháng 4 năm 1975"
                  preview={true}
                  style={{ width: "100%", borderRadius: "2px" }}
                />
                <p className="image-caption">
                  Bốn chiến sỹ đoàn Hương Giang tiến vào cắm cờ trên nóc phủ
                  tống thống nguỵ quyền Sài Gòn ngày 30/4/1975
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bài học lãnh đạo */}
        <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
          <div className="content-section">
            <h4 className="content-heading">Bài học về Nghệ thuật Lãnh đạo</h4>
            <div className="lessons-grid">
              <div className="lesson-item">
                <h5>Nắm vững Thời cơ</h5>
                <p>
                  Biết chờ đợi và tích lũy lực lượng, nhưng khi thời cơ đến,
                  quyết đoán hành động ngay lập tức. Từ kế hoạch 2 năm, điều
                  chỉnh thành 55 ngày khi nhận thấy địch suy yếu.
                </p>
              </div>
              <div className="lesson-item">
                <h5>Linh hoạt Chỉ đạo</h5>
                <p>
                  Vừa chặt chẽ trong kế hoạch, vừa linh hoạt trong thực hiện.
                  Điều chỉnh phương án tác chiến theo tình hình thực tế, không
                  cứng nhắc theo kế hoạch ban đầu.
                </p>
              </div>
              <div className="lesson-item">
                <h5>Kết hợp Nghệ thuật</h5>
                <p>
                  Phối hợp chặt chẽ giữa quân sự và chính trị, vừa đánh vừa vận
                  động, khiến địch tan rã từ bên trong. Ba mũi giáp công phát
                  huy tối đa hiệu quả.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
      >
        {modalContent.content}
      </Modal>
    </div>
  );
}
