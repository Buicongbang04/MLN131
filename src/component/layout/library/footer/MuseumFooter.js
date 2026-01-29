"use client";

import { HeartOutlined, StarOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import "./MuseumFooter.css";

const { Footer } = Layout;

export default function MuseumFooter() {
  return (
    <Footer className="museum-footer">
      <div className="footer-content">
        <div className="footer-quote-section">
          <div className="quote-ornament">❋</div>
          <div className="footer-quote">
            <p className="quote-main">"Không có gì quý hơn độc lập, tự do"</p>
            <p className="quote-author">— Chủ tịch Hồ Chí Minh</p>
          </div>
          <div className="quote-ornament">❋</div>
        </div>

        <div className="footer-divider" />

        <Row gutter={[48, 32]} className="footer-info">
          <Col xs={24} md={8}>
            <div className="footer-section">
              <h4 className="footer-title">
                <StarOutlined className="title-icon" />
                Đề tài
              </h4>
              <p className="footer-text">
                Sự Lãnh đạo Độc lập, Sáng tạo của Đảng Cộng sản Việt Nam trong
                Kháng chiến Chống Mỹ và Hoàn thành Thống nhất Đất nước
                (1954–1975)
              </p>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div className="footer-section">
              <h4 className="footer-title">
                <HeartOutlined className="title-icon" />
                Mục tiêu Học tập
              </h4>
              <ul className="footer-list">
                <li>
                  CLO2: Phân tích sự lãnh đạo của Đảng trong kháng chiến chống
                  Mỹ
                </li>
                <li>CLO4: Củng cố niềm tin vào sự lãnh đạo của Đảng</li>
              </ul>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div className="footer-section">
              <h4 className="footer-title">
                <StarOutlined className="title-icon" />
                Thông tin
              </h4>
              <p className="footer-text">
                <strong>Môn học:</strong> VNR202 - Lịch sử Đảng
                <br />
                <strong>Nhóm:</strong> Nhóm 5 - Haft_2 SE1737
                <br />
                <strong>Niên khóa:</strong> 2024 - 2025
              </p>
            </div>
          </Col>
        </Row>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-flame">🔥</div>
          <p className="footer-message">
            Thế hệ trẻ Việt Nam - Tiếp nối truyền thống vẻ vang, xây dựng tương
            lai tươi sáng
          </p>
          <div className="footer-flame">🔥</div>
        </div>

        <div className="footer-copyright">
          <p>
            © 2025 VNR202 - Nhóm 5. Tất cả nội dung phục vụ mục đích học tập.
          </p>
          <div className="vietnam-flag">🇻🇳</div>
        </div>
      </div>
    </Footer>
  );
}
