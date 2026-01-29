"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import ARImage from "@/component/common/ARImage";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./FoundationSection.css";
import { Link } from 'next/link';

export default function FoundationSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter1 = contentData.chapters.find((ch) => ch.chapter_number === 1);
  const section11 = chapter1?.sections[0];
  const section12 = chapter1?.sections[1];
  const section13 = chapter1?.sections[2];

  return (
    <div className="foundation-section">
      {/* Section 1.1: Bối cảnh Quốc tế và Trong nước */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.1</div>
            <h3 className="subsection-title">{section11?.title}</h3>
          </div>
        </ScrollReveal>

        {/* Bối cảnh Quốc tế */}
        <ScrollReveal variant="slideLeft" delay={0.2} duration={0.7}>
          <div className="context-section international">
            <h4 className="context-title">
              <span className="title-marker">✦</span>
              Khái niệm dân tộc (theo Mác – Lênin)
            </h4>

            <div className="split-content">
              <div className="text-content">
                <div className="favorable-block">
                  <p className="context-text">
                    {section11?.content.international_context.favorable}
                  </p>
                </div>

                <div className="challenges-block">
                  <strong className="block-label challenges">
                    Quá trình hình thành
                  </strong>
                  <ul className="challenges-list">
                    {section11?.content.international_context.challenges.map(
                      (ch, i) => (
                        <li key={i} className="challenge-item">
                          {ch.includes("Thị tộc") ? (
                            <>
                              {ch.replace("Thị tộc", "")}
                              <strong>Thị tộc</strong>
                              <Button
                                type="text"
                                size="small"
                                icon={
                                  <InfoCircleOutlined
                                    style={{ color: "#1890ff" }}
                                  />
                                }
                                onClick={() =>
                                  openModal(
                                    "Thị tộc là gì?",
                                    <div>
                                      <p>
                                        Thị tộc là hình thức cộng đồng người sớm nhất trong lịch sử, gồm những người:
                                      </p>
                                      <ul>
                                        <li> - Có quan hệ huyết thống (cùng dòng máu)</li>
                                        <li> - Cùng sinh sống, lao động và hưởng thụ chung</li>
                                        <li> - Có tài sản chung, chưa có tư hữu</li>
                                        <li> - Tổ chức xã hội còn đơn giản, chưa có nhà nước</li>
                                        <li> ➡ Thị tộc tồn tại chủ yếu trong xã hội nguyên thủy.</li>
                                      </ul>
                                      <div
                                        style={{
                                          display: "grid",
                                          gridTemplateColumns: "repeat(2, 1fr)",
                                          gap: "1rem",
                                          marginTop: "1rem",
                                        }}
                                      >
                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="https://api.toploigiai.vn/storage/uploads/thi-toc-la-gi_1"
                                            alt="Hình ảnh thị tộc"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                          
                                        </div>
                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="https://api.toploigiai.vn/storage/uploads/thi-toc-la-gi_2"
                                            alt="Hình ảnh thị tộc"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                        </div>

                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="https://cdn.accgroup.vn/wp-content/uploads/2023/06/che-do-thi-toc-mau-he-la-gi.png"
                                            alt="Hình ảnh thị tộc"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                        </div>

                                        <div style={{ textAlign: "center" }}>
                                          <Image
                                            src="https://img.hoidap247.com/picture/answer/20210926/large_1632645326608.jpg?v=0"
                                            alt="Hình ảnh thị tộc"
                                            style={{
                                              width: "180px",
                                              height: "auto",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }
                              />
                            </>
                          ) : ch.includes("Bộ lạc") ? (
                            <><strong>Bộ lạc</strong> 
                              <Button
                                type="text"
                                size="small"
                                icon={
                                  <InfoCircleOutlined
                                    style={{ color: "#1890ff" }}
                                  />
                                }
                                onClick={() =>
                                  openModal(
                                    "Bộ lạc là gì?",
                                    <div>
                                      <p>
                                        Bộ lạc là liên minh của nhiều thị tộc có:
                                      </p>
                                      <ul>
                                        <li> - Cùng nguồn gốc gần gũi</li>
                                        <li> - Chung lãnh thổ cư trú</li>
                                        <li> - Chung ngôn ngữ và phong tục, tập quán</li>
                                        <li> - Có tổ chức quản lý sơ khai (tù trưởng, hội đồng)</li>
                                        <li> ➡ Bộ lạc là bước phát triển cao hơn thị tộc, nhưng chưa hình thành nhà nước.</li>
                                      </ul>
                                    </div>
                                  )
                                }
                              />
                            </>
                          ) : ch.includes("Bộ tộc") ? (
                            <>
                              <strong>Bộ tộc</strong>
                              <Button
                                type="text"
                                size="small"
                                icon={
                                  <InfoCircleOutlined
                                    style={{ color: "#1890ff" }}
                                  />
                                }
                                onClick={() =>
                                  openModal(
                                    "Bộ tộc là gì ?",
                                    <div>
                                      <p>
                                        Bộ tộc là hình thức cộng đồng người phát triển cao hơn bộ lạc, đặc trưng bởi:
                                      </p>
                                      <ul>
                                        <li> - Dân số đông hơn</li>
                                        <li> - Địa bàn cư trú rộng hơn</li>
                                        <li> - Có sự phân hóa xã hội bước đầu</li>
                                        <li> - Có tổ chức quản lý tương đối ổn định</li>
                                        <li> - Là tiền đề cho sự hình thành dân tộc</li>
                                        <li> ➡ Bộ tộc xuất hiện khi xã hội bắt đầu có sở hữu tư nhân và phân hóa giai cấp sơ khai.</li>
                                      </ul>

                                      <div
                                        style={{ display: "flex", gap: "1rem" }}
                                      >
                                        <div style={{ flex: 1 }}>
                                          <Image
                                            src="https://photo.znews.vn/w960/Uploaded/ngtmns/2015_04_29/FindingnativeAmerica.jpg"
                                            alt="Bộ tộc"
                                            preview={true}
                                            style={{
                                              width: "100%",
                                              borderRadius: "8px",
                                            }}
                                          />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                          <Image
                                            src="https://cdnphoto.dantri.com.vn/6A4zuWLW70FSp3Q8AvzKkQbI8AU=/thumb_w/960/2021/01/04/3112-kinh-hai-bo-lac-dung-tro-cot-nguoi-lam-thuc-andocx-1609723402691.jpeg"
                                            alt="Bộ tộc Yanomami"
                                            preview={true}
                                            style={{
                                              width: "100%",
                                              borderRadius: "2px",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }
                              />
                            </>
                          ) : ch.includes("Dân tộc") ? (
                            <>
                              <strong>Dân tộc</strong>
                              <Button
                                type="text"
                                size="small"
                                icon={
                                  <InfoCircleOutlined
                                    style={{ color: "#1890ff" }}
                                  />
                                }
                                onClick={() =>
                                  openModal(
                                    "Dân tộc là gì ?",
                                    <div>
                                      <p>
                                        Dân tộc là cộng đồng người ổn định và bền vững nhất, hình thành trong lịch sử, có:
                                      </p>
                                      <ul>
                                        <li> - Chung lãnh thổ</li>
                                        <li> - Chung ngôn ngữ</li>
                                        <li> - Chung đời sống kinh tế</li>
                                        <li> - Chung nền văn hóa và tâm lý dân tộc</li>
                                        <li> - Có nhà nước quản lý (đối với dân tộc – quốc gia)</li>
                                        <li> ➡ Dân tộc là hình thức cộng đồng cao nhất, tồn tại lâu dài trong xã hội hiện đại.</li>
                                      </ul>

                                      <div
                                        style={{ display: "flex", gap: "1rem" }}
                                      >
                                        <div style={{ flex: 1 }}>
                                          <Image
                                            src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/9/18/1242987/Gac1.jpeg"
                                            alt="Dân tộc Việt Nam"
                                            preview={true}
                                            style={{
                                              width: "100%",
                                              borderRadius: "8px",
                                            }}
                                          />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                          <Image
                                            src="https://cdn.diaocthongthai.com/2021/04/hinh-anh-dan-toc-vn.jpg"
                                            alt="Dân tộc Việt Nam"
                                            preview={true}
                                            style={{
                                              width: "100%",
                                              borderRadius: "2px",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }
                              />
                            </>
                          ) : (
                            ch
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              <div className="image-content">
                <Image
                  src="https://cdn.accgroup.vn/wp-content/uploads/2023/06/che-do-mau-he-thoi-nguyen-thuy.jpg"
                  alt="Hội nghị Giơnevơ 1954"
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p className="image-caption">Chế độ mẫu hệ thời nguyên thuỷ</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dân tộc ở Phương Tây và Phương Đông */}
        <ScrollReveal variant="slideRight" delay={0.2} duration={0.7}>
          <div className="context-section domestic">
            <h4 className="context-title">
              <span className="title-marker">✦</span>
              Dân tộc ở Phương Tây và Phương Đông
            </h4>

            <div className="split-content reverse">
              <div className="text-content">
                <div className="region-info north">
                  <h5 className="region-label">Phương Tây</h5>
                  <p className="region-text">
                    {section11?.content.domestic_context.west}
                  </p>
                </div>
              </div>
              <div className="text-content">
                <div className="region-info north">
                  <h5 className="region-label">Phương Đông</h5>
                  <p className="region-text">
                    {section11?.content.domestic_context.east}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Hai nghĩa cơ bản của Dân tộc */}
        <ScrollReveal variant="slideRight" delay={0.2} duration={0.7}>
          <div className="context-section domestic">
            <h4 className="context-title">
              <span className="title-marker">✦</span>
              Dân tộc được hiểu theo hai nghĩa cơ bản
            </h4>

            <div className="split-content reverse">
              <div className="text-content">
                <div className="region-info north">
                  <h5 className="region-label">Dân tộc (nation) hay quốc gia dân tộc là cộng đồng chính trị - xã hội có những đặc trưng cơ bản sau đây:</h5>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_1.first}
                  </p>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_1.second}
                  </p>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_1.third}
                  </p>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_1.fourth}
                  </p>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_1.fifth}
                  </p>
                </div>
              </div>
              <div className="text-content">
                <div className="region-info north">
                  <h5 className="region-label p-33">Dân tộc - tộc người (ethnies) có ba đặc trưng sau:</h5>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_2.first}
                  </p>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_2.second}
                  </p>
                  <p className="region-text">
                    - {section11?.content.domestic_context.mean_2.third}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section 1.2: Đường lối Chiến lược Hai nhiệm vụ */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.2</div>
            <h3 className="subsection-title">{section12?.title}</h3>
          </div>
        </ScrollReveal>

        {/* Hai xu hướng khách quan của sự phát triển quan hệ dân tộc */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="congress-intro">
            <div>
              <div className="text-content">
                <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Hai xu hướng khách quan của sự phát triển quan hệ dân tộc
                </h4>
                <p className="ctext">
                  Xu hướng thứ nhất, cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập.
                </p>
                <p className="ctext">
                  Xu hướng thứ hai, các dân tộc trong từng quốc gia, thậm chí các dân tộc ở nhiều quốc gia muốn liên hiệp lại với nhau.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="congress-intro">
                <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin
                </h4>
            <div className="split-content">
              <div className="text-content">
                <p className="ctext">
                  Một là: Các dân tộc hoàn toàn bình đẳng.
                </p>
                <p className="ctext">
                  Hai là: Các dân tộc được quyền tự quyết.
                </p>
                <p className="ctext">
                  Ba là: Liên hiệp công nhân tất cả các dân tộc.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Section 1.3: Dân tộc và quan hệ dân tộc ở Việt Nam */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.3</div>
            <h3 className="subsection-title">{section13?.title}</h3>
          </div>
        </ScrollReveal>

        {/* Đặc điểm dân tộc ở Việt Nam */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="congress-intro">
            <div className="split-content">
              <div className="text-content">
                <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Đặc điểm dân tộc ở Việt Nam
                </h4>
                <p className="ctext">
                  Thứ nhất: có sự chênh lệch về số dân giữa các tộc người.
                </p>
                <p className="ctext">
                  Thứ hai: các dân tộc cư trú xen kẽ nhau.
                </p>
                <p className="ctext">
                  Thứ ba: các dân tộc thiểu số ở Việt Nam phân bố chủ yếu ở địa bàn có chiến lược quan trọng.
                </p>
                <p className="ctext">
                  Thứ tư: các dân tộc ở Việt Nam có trình độ phát triển không đồng đều.
                </p>
                <p className="ctext">
                  Thứ năm: Các dân tộc Việt Nam có truyền thống đoàn kết gắn bó lâu đời trong cộng đồng dân tộc - quốc gia thống nhất.
                </p>
                <p className="ctext">
                  Thứ sáu: Mỗi dân tộc có bản sắc văn hoá riêng, góp phần tạo nên sự phong phú, đa dạng của nền văn hoá Việt Nam thống nhất.
                </p>
              </div>

              <div className="image-content">
                <Image
                  src="https://cdn.nhandan.vn/assets/web/styles/img/54dantoc/zone-2-1.png"
                  alt="Dân tộc Việt Nam"
                  preview={true}
                  style={{ width: "50%", borderRadius: "8px" }}
                />
                <p className="image-caption">Dân tộc Việt Nam</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin */}
        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="congress-intro">
                <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Quan điểm và chính sách của Đảng, Nhà nước Việt Nam về vấn đề dân tộc
                </h4>
              <div className="text-content p-33">
                <h5 className="region-label">
                  Quan điểm của Đảng, Nhà nước Việt Nam về dân tộc và giải quyết quan hệ dân tộc:
                </h5>
                <p className="ctext">
                  Vấn đề dân tộc và đoàn kết dân tộc là vấn đề chiến lược cơ bản, lâu dài, đồng thời cũng là vấn đề cấp bách hiện nay của cách mạng Việt Nam.
                </p>
                <p className="ctext">
                  Các dân tộc trong đại gia đình Việt Nam bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển,...
                </p>
                <p className="ctext">
                  Phát triển toàn diện chính trị, kinh tế, văn hoá, xã hội và an ninh - quốc phòng trên địa bàn vùng dân tộc và miền núi,...
                </p>
                <p className="ctext">
                  Ưu tiên đầu tư phát triển kinh tế - xã hội các vùng dân tộc và miền núi,...
                </p>
                <p className="ctext">
                  Công tác dân tộc và thực hiện chính sách dân tộc là nhiệm vụ của toàn Đảng, toàn dân, toàn quân, của các cấp, các ngành và toàn bộ hệ thống chính trị.
                </p>
              </div>

              <div className="text-content">
                <h5 className="region-label">
                  Chính sách dân tộc của Đảng, Nhà nước Việt Nam:
                </h5>
                <p className="ctext">
                  Về chính trị: thực hiện bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển giữa các dân tộc
                </p>
                <p className="ctext">
                  Về kinh tế: nội dung, nhiệm vụ kinh tế trong chính sách dân tộc là các chủ trưởng, chính sách phát triển kinh tế - xã hội miền núi, vùng đồng bào các dân tộc thiểu số.
                </p>
                <p className="ctext">
                  Về văn hoá: xây dựng nền văn hoá Việt Nam tiên tiến đậm đà bản sắc dân tộc.
                </p>
                <p className="ctext">
                  Về xã hội: thực hiện chính sách xã hội, đảm bảo an sinh xã hội trong vùng đồng bào dân tộc thiểu số.
                </p>
                <p className="ctext">
                  Về an ninh quốc phòng: tăng cường sức mạnh bảo vệ tổ quốc trên cơ sở đảm bảo ổn định chính trị, thực hiện tốt an ninh chính trị, trật tự an toàn xã hội.
                </p>
              </div>
          </div>
        </ScrollReveal>

        
      </div>

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
      >
        <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </div>
      </Modal>
    </div>
  );
}
