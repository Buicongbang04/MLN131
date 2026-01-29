"use client";

import HeroSection from "@/component/layout/dashboard/sections/hero-section";

export default function Dashboard() {
  // Historical images from the Vietnam War era (1954-1975)
  const historicalImages = [
    {
      title: "1",
      thumbnail: "https://cdn.accgroup.vn/wp-content/uploads/2023/06/che-do-mau-he-thoi-nguyen-thuy.jpg",
    },
    {
      title: "2",
      thumbnail:
        "https://img.loigiaihay.com/picture/2021/0921/4.jpg",
    },
    {
      title: "3",
      thumbnail:
        "https://cdn2.tuoitre.vn/thumb_w/1200/2018/11/22/photo-2-15428678593871121518204.jpg",
    },
    {
      title: "4",
      thumbnail:
        "	https://cdn2.tuoitre.vn/thumb_w/1200/2018/11/22/photo-3-15428678593911776973478.jpg",
    },
    {
      title: "5",
      thumbnail:
        "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/05/09/danh-sach-cac-ton-giao.png",
    },
    {
      title: "6",
      thumbnail:
        "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2023-03/ton_giao_1.jpg",
    },
    {
      title: "7",
      thumbnail:
        "https://media.vov.vn/sites/default/files/styles/large/public/2023-03/dai_hoi_phat_giao.jpg",
    },
    {
      title: "8",
      thumbnail:
        "https://media.vov.vn/sites/default/files/styles/large/public/2023-03/Ton%20giao%203.jpg",
    },
    {
      title: "9",
      thumbnail:
        "	https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/6/14/a2-1686760085501310009433.jpg",
    },
    {
      title: "10",
      thumbnail:
        "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/6/14/a1-16867600854041025557441.jpg",
    },
    {
      title: "11",
      thumbnail:
        "https://static.tuoitre.vn/tto/r/2015/12/26/d042e27e.jpg",
    },
    {
      title: "12",
      thumbnail:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/7/19/w-phat-giao-2614.jpg?width=0&s=x4Nz6piC7VfFflu_IFApsA",
    },
    {
      title: "13",
      thumbnail:
        "https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/24/8/31/tg_66d278f400974.jpg",
    },
    {
      title: "14",
      thumbnail:
        "https://bcp.cdnchinhphu.vn/thumb_w/777/334894974524682240/2025/2/27/dantoc-17406304498162036247784.jpg",
    },
    {
      title: "15",
      thumbnail:
        "https://vanhoatinnguong.vn/Uploads/images/Vua%20H%C3%B9ng-%20%C4%90%E1%BB%A9c%20t%E1%BB%95%20c%E1%BB%A7a%20c%C3%A1c%20l%C3%A0ng%20ngh%E1%BB%81.jpg",
    },
  ];

  // Navigation cards for main features
  const navigationCards = [
    {
      title: "Thư Viện",
      description:
        "Khám phá tài liệu và hình ảnh",
      link: "/library",
      icon: "BookOutlined",
      color: "lacquer-red",
    },
    {
      title: "Trắc Nghiệm",
      description: "Ôn tập kiến thức",
      link: "https://play.blooket.com/play",
      icon: "EditOutlined",
      color: "jade-green",
    },
    {
      title: "Báo cáo AI Usage",
      description: "Trò chuyện với AI về lịch sử Việt Nam",
      link: "/ai-usage",
      icon: "RobotOutlined",
      color: "lacquer-gold",
    },
  ];

  return (
    <>
      <main className="">
        <HeroSection
          historicalImages={historicalImages}
          navigationCards={navigationCards}
        />
      </main>
    </>
  );
}
