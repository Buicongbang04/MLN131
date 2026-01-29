## Mục tiêu
Website thư viện học thuật về Lịch sử Đảng Cộng sản Việt Nam giai đoạn 1954-1975. Giao diện hiện đại, tối giản, giữ bản sắc văn hóa Việt Nam, nhấn mạnh hình ảnh và nội dung lịch sử.

## Tổng quan kiến trúc
Dự án chia theo component, mỗi component có CSS riêng. Layout có thêm khu vực hình ảnh minh họa với mosaic shape bất quy tắc, tạo cảm giác hoài cổ và giàu tính kể chuyện.

### Khu vực hình ảnh minh họa
**ImageMosaicSection** (`ImageMosaicSection.js`, `ImageMosaicSection.css`)

- Mosaic nhiều hình dạng (circle, square, landscape, portrait)
- Overlay caption, đan xen nội dung và hình ảnh
- Dễ mở rộng từ `content/content.txt`

Các section nội dung (Foundation, Strategy, North, South, Victory, Orientation) tích hợp ảnh chính kèm caption, dùng tooltip để dẫn vào nội dung chi tiết.

## Công nghệ

### Framework & Libraries
- **Next.js**
- **Ant Design**
- **Lucide React**
- **Google Fonts**: Fraunces

### Styling
- **CSS Modules**
- **CSS Variables**
- **Flexbox & Grid**

## Bảng màu
```css
--red-primary: #BF092F      /* Đỏ Quốc kỳ */
--red-secondary: #DC2626    /* Đỏ Đảng */
--yellow-star: #FFC400      /* Vàng sao */
--yellow-light: #FFE1AF     /* Vàng pastel */
--teal-light: #91C4C3       /* Xanh ngọc */
--bg-cream: #FDFBF8         /* Kem nhạt */
--bg-paper: #FAF3E0         /* Vàng ngà */
--text-brown: #8B4513       /* Nâu gỗ */
```

## Cài đặt & Chạy

### 1) Cài dependencies
```bash
npm install
# hoặc
yarn install
```

### 2) Chạy dev server
```bash
npm run dev
# hoặc
yarn dev
```

### 3) Truy cập
`http://localhost:3000/library`

## Tính năng chính

### UI/UX
- Giao diện tối giản, sang trọng
- Màu sắc đỏ-vàng theo Quốc kỳ VN
- Font Fraunces
- Icons từ Lucide React
- Bo góc tối đa 8px
- Shadow tối thiểu

### Components
- Header sticky với menu
- Hero với quote rotator
- Timeline interactive
- Dual-column layout với tabs
- Image gallery nhiều shape
- Analysis cards
- Lessons collapse
- Orientation cards với CTA
- Footer có pattern

### Responsive
- Desktop (>992px)
- Tablet (768px-991px)
- Mobile (<768px)

### Accessibility
- Semantic HTML5
- ARIA labels
- Keyboard navigation
- Focus visible
- Alt text cho images

## Cấu trúc thư mục
```
src/
├── app/
│   └── library/
│       ├── page.js
│       └── page.css
└── component/
    └── layout/
        └── page1/
            ├── LibraryHeader.js
            ├── LibraryHeader.css
            ├── LibraryHero.js
            ├── LibraryHero.css
            ├── LibraryTimeline.js
            ├── LibraryTimeline.css
            ├── DualTaskSection.js
            ├── DualTaskSection.css
            ├── ImageGallery.js
            ├── ImageGallery.css
            ├── AnalysisSection.js
            ├── AnalysisSection.css
            ├── LessonsSection.js
            ├── LessonsSection.css
            ├── OrientationSection.js
            ├── OrientationSection.css
            ├── LibraryFooter.js
            └── LibraryFooter.css
```

## Tùy chỉnh nội dung

### Hình ảnh
- `ImageMosaicSection.js`: thay/ thêm ảnh mosaic và caption
- `LibraryTimeline.js`, `ImageGallery.js`, `LibraryHero.js`: thay ảnh theo nội dung lịch sử

### Dữ liệu nội dung
Nội dung lấy từ `content/content.txt` và có thể mở rộng vào các section hình ảnh:
- Timeline data: `LibraryTimeline.js`
- North/South tabs: `DualTaskSection.js`
- Analysis cards: `AnalysisSection.js`
- Lessons: `LessonsSection.js`
- Orientation cards: `OrientationSection.js`
- Mosaic captions: `ImageMosaicSection.js`

### Màu sắc
Chỉnh CSS variables trong `page.css`:
```css
:root {
  --red-primary: #bf092f;
  --yellow-star: #ffc400;
}
```

## Tối ưu hóa

### Performance
- Lazy load images
- Code splitting
- Minify CSS
- Optimize fonts

### SEO
- Meta tags trong `page.js`
- Semantic HTML
- Alt text cho images
- Schema.org markup (tùy chọn)

## Lưu ý
1. **Fraunces** là font toàn cục bắt buộc
2. Ưu tiên **Lucide React** thay vì emoji
3. Mỗi component có CSS riêng
4. Thiết kế modular, dễ bảo trì
5. Responsive đầy đủ

## Hỗ trợ
Nếu gặp lỗi, kiểm tra:
1. Dependencies đã cài đủ
2. Next.js version tương thích
3. Ant Design import đúng
4. CSS Modules hoạt động

## License
Educational purpose - FPT University

## Tác giả
Nhóm 5 - VNR202 - SE1737
Trường Đại học FPT
