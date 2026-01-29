"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import ARImage from "@/component/common/ARImage";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./StrategySection.css";

export default function StrategySection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 2);
  const section21 = chapter.sections.find((s) => s.section_id === "2.1");
  const section22 = chapter.sections.find((s) => s.section_id === "2.2");

  return (
    <div className="strategy-section">
      {/* Section 2.1: Nghị quyết 15 */}
      <div className="resolution-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">2.1</div>
            <h3 className="subsection-title">{section21.title}</h3>
          </div>

          <div className="resolution-content">
            <div className="">
              <div className="decision-card">
                <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Bản chất, nguồn gốc và tính chất của tôn giáo
                </h4>

                <div className="decision-header">Bản chất của tôn giáo</div>
                <p>{section21.content.key_decisions.basic_mission}</p>
                <p className="pl">- Là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan. Thông qua sự phản ánh đó, các lực lượng tự nhiên và xã hội trở thành siêu nhiên, thần bí.</p>
                <p className="pl">- Là một thực thể xã hội: có niềm tin sâu vào đấng siêu nhiên, đấng tối cao, thần linh đề tôn thờ; có hệ thống cơ sở thờ tự; có tổ chức nhân sự, quản lý việc điều hành việc đạo; có hệ thống tín đồ đông đảo.</p>
                <p className="pl">- Là một hiện tượng xã hội - văn hoá do con người sáng tạo ra. Con người sáng tạo tôn giáo vì mục đích, lợi ích của họ, phản ánh những ước mơ, nguyện vọng, suy nghĩ của họ.</p>
                <p className="pl">- Tôn giáo và tín ngưỡng không đồng nhất, nhưng có giao thoa nhất định.</p>
                <p className="pl">- Mê tín là niềm tin mê muội, viển vông, không dựa trên một cơ sở khoa học nào.</p>
                <p className="pl">- Mê tín dị đoan là niềm tin của con người vào các lực lượng siêu nhiên thần thánh đến mức độ mê muội, cuồng tín.</p>

                <div className="decision-header mt">Nguồn gốc của tôn giáo</div>
                <div className="key-decisions-grid">
                  <div className="decision-card">
                    <div className="info-item">
                      <strong>Nguồn gốc tự nhiên</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            "Nguồn gốc tự nhiên",
                            <div>
                              <p>Trong lịch sử, khi lực lượng sản xuất còn thấp, con người:</p>
                              <p className="pl">- Chưa có khả năng nhận thức và cải tạo tự nhiên</p>
                              <p className="pl">- Phụ thuộc nặng nề vào thiên nhiên</p>

                              <p>Con người bất lực, sợ hãi trước các hiện tượng tự nhiên:</p>
                              <p className="pl">- Mưa bão, sấm sét, lũ lụt</p>
                              <p className="pl">- Hạn hán, động đất, dịch bệnh</p>
                              <p className="pl">- Sinh – lão – bệnh – tử</p>

                              <p>Hệ quả:</p>
                              <p className="pl">- Con người nhân cách hóa tự nhiên</p>
                              <p className="pl">- Gán cho tự nhiên quyền lực siêu nhiên</p>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="decision-card">
                    <div className="info-item">
                      <strong>Nguồn gốc kinh tế – xã hội</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            "Nguồn gốc kinh tế – xã hội",
                            <div>
                              <p>Khi xã hội xuất hiện:</p>
                              <p className="pl">- Chế độ tư hữu</p>
                              <p className="pl">- Giai cấp</p>
                              <p className="pl">- Áp bức, bóc lột</p>
                              <p className="pl">- Bất công xã hội</p>

                              <p>Con người:</p>
                              <p className="pl">- Không làm chủ được số phận</p>
                              <p className="pl">- Sống trong nghèo đói, chiến tranh, đau khổ</p>

                              <p>Vai trò của tôn giáo:</p>
                              <p className="pl">- An ủi tinh thần con người</p>
                              <p className="pl">- Hứa hẹn hạnh phúc ở thế giới bên kia</p>
                              <p className="pl">- Giúp con người chấp nhận hiện thực khổ đau</p>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="decision-card">
                    <div className="info-item">
                      <strong>Nguồn gốc nhận thức</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            "Nguồn gốc nhận thức",
                            <div>
                              <p>Ở trình độ nhận thức thấp:</p>
                              <p className="pl">- Con người chưa hiểu rõ bản chất thế giới</p>
                              <p className="pl">- Không phân biệt được:</p>
                              <p className="pl-2">- Cái thực và cái ảo</p>
                              <p className="pl-2">- Nguyên nhân và kết quả</p>

                              <p>Tư duy mang tính:</p>
                              <p className="pl">- Cảm tính</p>
                              <p className="pl">- Thần thoại</p>
                              <p className="pl">- Huyền bí</p>

                              <p>Con người dùng trí tưởng tượng để giải thích:</p>
                              <p className="pl">- Nguồn gốc vũ trụ</p>
                              <p className="pl">- Sự sống</p>
                              <p className="pl">- Số phận con người</p>

                              <p>Từ đó xuất hiện các quan niệm:</p>
                              <p className="pl">- Thế giới do thần linh tạo ra</p>
                              <p className="pl">- Số phận do “ý trời”, “ý Chúa”</p>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="decision-card">
                    <div className="info-item">
                      <strong>Nguồn gốc tâm lý</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            "Nguồn gốc tâm lý",
                            <div>
                              <p>Trong đời sống cá nhân và xã hội, con người thường trải qua:</p>
                              <p className="pl">- Đau khổ</p>
                              <p className="pl">- Bất hạnh</p>
                              <p className="pl">- Mất mát</p>
                              <p className="pl">- Bệnh tật</p>
                              <p className="pl">- Sợ hãi cái chết</p>

                              <p>Những trạng thái tâm lý này:</p>
                              <p className="pl">- Khiến con người mong muốn được che chở</p>
                              <p className="pl">- Tìm chỗ dựa tinh thần để vượt qua khủng hoảng</p>

                              <p>Tôn giáo đáp ứng nhu cầu đó bằng cách:</p>
                              <p className="pl">- Tạo niềm tin vào lực lượng siêu nhiên</p>
                              <p className="pl">- Mang lại cảm giác bình an, hy vọng</p>

                              <p>Biểu hiện:</p>
                              <p className="pl">- Cầu xin, cầu nguyện</p>
                              <p className="pl">- Tin vào sự cứu rỗi</p>
                              <p className="pl">- Tin vào linh hồn, thế giới bên kia</p>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="decision-header mt">Tính chất của tôn giáo</div>
                <div className="key-decisions-grid">
                  <div className="decision-card">
                    <div className="info-item">
                      <strong>Tính lịch sử</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            "Tính lịch sử",
                            <div>
                              <p>Tôn giáo:</p>
                              <p className="pl">- Ra đời trong những điều kiện lịch sử nhất định</p>
                              <p className="pl">- Biến đổi theo sự phát triển của xã hội</p>
                              <p className="pl">- Không phải hiện tượng vĩnh hằng, bất biến</p>

                              <p>Mỗi tôn giáo gắn với:</p>
                              <p className="pl">- Một trình độ phát triển kinh tế – xã hội</p>
                              <p className="pl">- Một bối cảnh lịch sử cụ thể</p>

                              <p>Biểu hiện:</p>
                              <p className="pl">- Tôn giáo nguyên thủy xuất hiện khi con người bất lực trước tự nhiên</p>
                              <p className="pl">- Các tôn giáo lớn (Phật giáo, Kitô giáo, Hồi giáo…) ra đời khi xã hội đã có giai cấp</p>
                              <p className="pl">- Nội dung, giáo lý, tổ chức của tôn giáo thay đổi theo thời gian</p>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="decision-card">
                    <div className="info-item">
                      <strong>Tính quần chúng</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            "Tính quần chúng",
                            <div>
                              <p>Tôn giáo:</p>
                              <p className="pl">- Là nhu cầu tinh thần của một bộ phận quần chúng nhân dân</p>
                              <p className="pl">- Phản ánh khát vọng sống, niềm tin và ước mơ của con người</p>
                              <p className="pl">- Không phải hiện tượng vĩnh hằng, bất biến</p>

                              <p>Đối tượng chính của tôn giáo thường là:</p>
                              <p className="pl">- Người lao động</p>
                              <p className="pl">- Người nghèo</p>
                              <p className="pl">- Những người gặp khó khăn trong cuộc sống</p>

                              <p>Biểu hiện:</p>
                              <p className="pl">- Tôn giáo tồn tại và phát triển trong quần chúng</p>
                              <p className="pl">- Có hệ thống nghi lễ, sinh hoạt cộng đồng</p>
                              <p className="pl">- Gắn bó với đời sống văn hóa – tinh thần của nhân dân</p>
                              
                              <div className="key-decisions-grid">
                                <div className="decision-card">
                                  <div>
                                    <p>Mặt tích cực:</p>
                                    <p className="pl">- Góp phần an ủi tinh thần</p>
                                    <p className="pl">- Khuyến khích đạo đức, lối sống hướng thiện</p>
                                  </div>
                                </div>
                                <div className="decision-card">
                                  <div>
                                    <p>Hạn chế:</p>
                                    <p className="pl">- Có thể làm con người cam chịu, thụ động</p>
                                    <p className="pl">- Dễ bị lợi dụng nếu thiếu nhận thức khoa học</p>
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="decision-card">
                    <div className="info-item">
                      <strong>Tính chính trị</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            "Tính chính trị",
                            <div>
                              <p>Tôn giáo không thuần túy là vấn đề tinh thần, mà luôn:</p>
                              <p className="pl">- Gắn với lợi ích giai cấp</p>
                              <p className="pl">- Gắn với quyền lực chính trị</p>

                              <p>Trong xã hội có giai cấp, tôn giáo thường bị:</p>
                              <p className="pl">- Giai cấp thống trị lợi dụng</p>
                              <p className="pl">- Sử dụng như công cụ để:</p>
                              <p className="pl-2">- Củng cố địa vị thống trị</p>
                              <p className="pl-2">- Kiểm soát tư tưởng quần chúng</p>

                              <p>Biểu hiện:</p>
                              <p className="pl">- Tôn giáo được dùng để biện minh cho bất công xã hội</p>
                              <p className="pl">- Được sử dụng trong các cuộc xung đột, chiến tranh</p>
                              <p className="pl">- Trở thành công cụ can thiệp chính trị, chia rẽ dân tộc</p>
                              
                              <p>Tuy nhiên:</p>
                              <p className="pl">- Không phải mọi hoạt động tôn giáo đều phản động</p>
                              <p className="pl">- Nhiều tín đồ và chức sắc tôn giáo:</p>
                              <p className="pl-2">- Yêu nước</p>
                              <p className="pl-2">- Gắn bó với dân tộc</p>
                              <p className="pl-2">- Đồng hành cùng cách mạng</p>
                            </div>
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="resolution-content">
            <div className="decision-card">
              <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Nguyên tắc giải quyết vấn đề tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội
              </h4>
                <p className="pl">- Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân.</p>
                <p className="pl">- Khắc phục dần những ảnh hưởng tiêu cực của tôn giáo phải gắn liền với quá trình cải tạo xã hội cũ, dây dựng xã hội mới.</p>
                <p className="pl">- Phân biệt hai mặt chính trị và tư tưởng; tín ngưỡng, tôn giáo và lợi dụng tín ngưỡng, tôn giáo trong quá trình giải quyết vấn đề tôn giáo.</p>
                <p className="pl">- Quan điểm lịch sử cụ thể trong giải quyết vấn đề tín ngưỡng tôn giáo.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Section 2.2: */}
      <div className="dongkhoi-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">2.2</div>
            <h3 className="subsection-title">{section22.title}</h3>
          </div>
        </ScrollReveal>

        
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="resolution-content">
            <div className="decision-card">
              <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Đặc điểm của tôn giáo ở Việt Nam
              </h4>
              
              <div className="info-item">
                      <strong>Thứ nhất:</strong> Việt Nam là một quốc gia có nhiều tôn giáo
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            <div>
                              <p>Nước ta hiện nay có 13 tôn giáo đã được công nhận tư cách pháp nhân (Phật giáo, Công giáo, Hồi giáo, Tin lành, Cao Đài, Phật giáo Hoà Hảo, Tứ Ân Hiếu Nghĩa, Bửu Sơn Kì Hương, BaHa'i, Minh Lý đạo - Tam Tông miếu, Giáo hội Phật đường Nam Tông Minh Sư Đạo, Tịnh độ Cư sĩ Phật hội, Bà la môn) và trên 40 tổ chức tôn giáo đã được công nhận về mặt tổ chức hoặc đã đăng ký hoạt động với khoảng 24 triệu tính đồ, 95.000 chức sắc, 200.000 chức việc và hơn 23.250 cơ sở thờ tự... (Nguồn: Ban tôn giáo chính phủ, 12/2017)</p>
                            </div>
                          )
                        }
                      />
              </div>

              <div className="info-item">
                      <strong>Thứ hai:</strong> Tôn giáo ở Việt Nam đa dạng, đan xen, chung sống hoà bình và không có xung đột, chiến tranh tôn giáo.
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            <div>
                              <p>Việt Nam là nơi giao lưu của nhiều luồng văn hoá thế giới. Các tôn giáo ở Việt Nam có sự đa dạng về nguồn gốc và truyền thống lịch sử. Mỗi tôn giáo ở Việt Nam có quá trình lịch sử tồn tại và phát triển khác nhau, nên sự gắn bó với dân tộc cũng khác nhau. Tín đồ của các tôn giáo khác nhau cùng chung sống hoà bình trên một địa bàn, giữa họ có sự tôn trọng niềm tin của nhau và chưa từng xảy ra xung đột, chiến tranh tôn giáo. Thực tế cho thấy, không có một tôn giáo nào du nhập vào Việt Nam mà không mang dấu ấn, không chịu ảnh hưởng của bản sắc văn hoá Việt Nam.</p>
                            </div>
                          )
                        }
                      />
              </div>

              <div className="info-item">
                      <strong>Thứ ba:</strong> Tín đồ các tôn giáo Việt Nam phần lớn là nhân dân lao động, có lòng yêu nước, tinh thần dân tộc.
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            <div>
                              <p>Tín đồ các tôn giáo Việt Nam có thành phần rất đa dạng, chủ yếu là người lao động, bao gồm nông dân, công nhân... Đa số tín đồ các tôn giáo đều có tinh thần yêu nước, chống ngoại xâm, tôn trọng công lý, gắn bó với dân tộc, đi theo Đảng, theo cách mạng, hăng hái tham gia xây dựng và bảo vệ Tổ quốc Việt Nam. Trong các giai đoạn lịch sử , tín đồ các tôn giáo cùng với các tầng lớp nhân dân làm nên những thắng lợi to lớn, vẻ vang của dân tộc. Nhưng là tín đồ tôn giáo, đồng bào có nhu cầu tín ngưỡng, có ước vọng sống "tốt đời, đẹp đạo".</p>
                            </div>
                          )
                        }
                      />
              </div>
              <div className="info-item">
                <strong>Thứ tư:</strong> Hàng ngũ chức sắc các tôn giáo có vai trò, vị trí quan trọng trong giáo hội, có uy tín, ảnh hưởng với tín đồ
              </div>
              <div className="info-item">
                <strong>Thứ năm:</strong> Các tôn giáo ở Việt Nam đều có quan hệ với các tổ chức, cá nhân tôn giáo ở nước ngoài.
              </div>
            </div>
          </div>
        </ScrollReveal>   
        
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="resolution-content">
            <div className="decision-card">
              <h4 className="context-title">
                  <span className="title-marker">✦</span>
                  Chính sách của Đảng, Nhà nước Việt Nam đối với tín ngưỡng, tôn giáo hiện nay
              </h4>

              <div className="info-item">
                Tín ngưỡng, tôn giáo là như cầu tinh thần của một bộ phận nhân dân, đang và sẽ tồn tại cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội ở nước ta.
              </div>
              <div className="info-item">
                Đảng, Nhà nước thực hiện nhất quán chính sách đại đoàn kết dân tộc.
              </div>
              <div className="info-item">
                Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng
              </div>
              <div className="info-item">
                Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị.
              </div>
              <div className="info-item">
                      <strong>Vấn đề theo đạo và truyền đạo</strong>
                      <Button
                        type="text"
                        size="small"
                        icon={<InfoCircleOutlined style={{ color: "#1890ff" }} />}
                        onClick={() =>
                          openModal(
                            <div>
                              <p>Mọi tín đồ đều có quyền tự do hành đạo tại gia đình và cơ sở thờ tự hợp pháp theo quy định của pháp luật. Các tổ chức tôn giáo được Nhà nước thừa nhận được hoạt động theo pháp luật và được pháp luật bảo hộ. Việc theo đạo truyền đạo cũng như mọi hoạt động tôn giáo khác đều phải tuân thủ Hiến pháp và Pháp luật; không được lợi dụng tôn giáo tuyên truyền tà đạo, hoạt động mê tín dị đoan, không được ép buộc người dân theo đạo. Nghiêm cấm các tổ chức truyền đạo, người truyền đạo và các cách thức truyền đạo trái phép, vi phạm các quy định của Hiến pháp và pháp luật.</p>
                            </div>
                          )
                        }
                      />
              </div>
            </div>
          </div>
        </ScrollReveal>
        
      </div>

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={700}
      >
        <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </div>
      </Modal>
    </div>
  );
}
