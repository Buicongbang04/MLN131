"use client";

import { FlagOutlined, StarOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import "./MuseumHero.css";

const { Title, Paragraph } = Typography;

export default function MuseumHero() {
  return (
    <div className="museum-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <StarOutlined className="badge-icon" />
          <span>MLN131 - Nhóm 7</span>
        </div>

        <Title level={1} className="hero-main-title">
          Vấn đề dân tộc và tôn giáo trong
          <br />
          thời kỳ quá độ lên chủ nghĩa xã hội
        </Title>

        <div className="hero-divider">
          <span className="divider-star">✦</span>
        </div>

        <Title level={2} className="hero-subtitle">
          Sau khi thống nhất Đất Nước
          <br />
          và Đại hội IV của Đảng (năm 1976)
        </Title>

        <div className="hero-years">
          <FlagOutlined className="years-icon" />
          <span>Sau 1975</span>
        </div>

        <div className="hero-learning-outcomes">
          <div className="outcome-badge">
            <span className="outcome-label">Phần I</span>
            <span className="outcome-text">
              Phân tích "Dân tộc" trong thời kỳ quá độ lên chủ nghĩa xã hội
            </span>
          </div>
          <div className="outcome-badge">
            <span className="outcome-label">Phần II</span>
            <span className="outcome-text">
              Tìm hiểu "Tôn giáo" trong thời kì quá độ lên chủ nghĩa xã hội
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
