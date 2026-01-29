"use client";

import { BookOutlined, MenuOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "./MuseumHeader.css";

const { Header } = Layout;

export default function MuseumHeader({ activeSection, setActiveSection }) {
  const menuItems = [
    { key: "hero", label: "Trang chủ", icon: <StarOutlined /> },
    { key: "foundation", label: "I. Dân tộc", icon: <BookOutlined /> },
    { key: "strategy", label: "II. Tôn giáo", icon: <BookOutlined /> },
  ];

  const handleMenuClick = (e) => {
    // Directly change chapter instead of scrolling
    setActiveSection(e.key);
  };

  return (
    <Header className="museum-header">
      <div className="header-container">
        {/* Brand Section */}
        <div className="header-brand">
          <img
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Logo Đảng"
            className="header-logo"
          />
          <div className="header-title-group">
            <h1 className="header-title">Chủ nghĩa Mác - Lênin</h1>
            <p className="header-subtitle">
              <StarOutlined className="subtitle-icon" />
              Nhóm 7 - Half1_SE1842 | MLN131
            </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={menuItems}
          onClick={handleMenuClick}
          className="header-menu"
        />

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="menu-mobile-btn"
        />
      </div>
    </Header>
  );
}
