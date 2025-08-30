# FileFlow - Dịch vụ Chuyển đổi File Trực tuyến

Chào mừng bạn đến với mã nguồn của dự án FileFlow! Đây là một nền tảng chuyển đổi file trực tuyến được xây dựng với m## 📄 Tài liệu

Để xem chi tiết về yêu cầu nghiệp vụ, chân dung người dùng và các tính năng, vui lòng tham khảo [Tài liệu Phân tích Nghiệp vụ (BRD)](docs/BRD.md) (nếu có) hoặc liên hệ với maintainer.

---

_Dự án được phát triển và quản lý bởi Tuệ Nhân._ cung cấp một trải nghiệm người dùng đơn giản, nhanh chóng và an toàn.

Dự án cũng tích hợp một blog về "kinh nghiệm ứng dụng văn phòng" nhằm thu hút lưu lượng truy cập tự nhiên thông qua các công cụ tìm kiếm (SEO).

## ✨ Tính năng chính (Giai đoạn 1)

- **Chuyển đổi tài liệu văn phòng**: Chuyển đổi các file Word (.docx), Excel (.xlsx), PowerPoint (.pptx) sang định dạng PDF.
- **Xử lý hình ảnh**: Chuyển đổi qua lại giữa các định dạng phổ biến (JPG, PNG, WEBP) và nén dung lượng ảnh.
- **Công cụ PDF cơ bản**: Hỗ trợ nối, tách và nén dung lượng file PDF.
- **Blog tích hợp**: Hệ thống blog được xây dựng bằng các file Markdown, tối ưu cho tốc độ và SEO.

## 🚀 Công nghệ sử dụng (Tech Stack)

| Hạng mục          | Công nghệ                                                             | Mô tả                                                                   |
| :---------------- | :-------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| **Frontend**      | [Next.js](https://nextjs.org/) / [React](https://reactjs.org/)        | Xây dựng giao diện người dùng, tối ưu SEO với SSG và SSR.               |
|                   | [Tailwind CSS](https://tailwindcss.com/)                              | Framework CSS để xây dựng giao diện nhanh chóng và nhất quán.           |
| **Backend**       | [Node.js](https://nodejs.org/) / [Express.js](https://expressjs.com/) | Xây dựng API để xử lý logic và các tác vụ chuyển đổi file.              |
|                   | [Multer](https://github.com/expressjs/multer)                         | Middleware để xử lý việc tải file lên (file uploads).                   |
|                   | [BullMQ](https://bullmq.io/)                                          | Hệ thống hàng đợi (Job Queue) để xử lý các tác vụ nặng trong nền.       |
| **Công cụ xử lý** | `LibreOffice`, `ImageMagick`, `PDFtk`                                 | Các công cụ dòng lệnh được gọi từ backend để thực hiện việc chuyển đổi. |
| **Cơ sở dữ liệu** | Không yêu cầu                                                         | Blog được quản lý bằng file Markdown, không cần DB ở giai đoạn 1.       |

## 📂 Cấu trúc thư mục

Dự án được tổ chức theo cấu trúc monorepo đơn giản, bao gồm hai phần chính:

```
fileflow/
├── backend/   # Mã nguồn Node.js/Express API
│   ├── src/
│   └── package.json
├── frontend/   # Mã nguồn Next.js Application
│   ├── app/
│   ├── posts/     # Nơi chứa các bài blog dưới dạng file .md
│   └── package.json
└── README.md      # File bạn đang đọc
```

## 🛠️ Hướng dẫn cài đặt và chạy dự án

Để chạy dự án này trên máy của bạn, hãy làm theo các bước sau:

### Yêu cầu tiên quyết

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (phiên bản 18.x trở lên)
- [npm](https://www.npmjs.com/) hoặc [yarn](https://yarnpkg.com/)
- Cài đặt các công cụ xử lý trên máy của bạn (LibreOffice, ImageMagick, PDFtk)

#### Cài đặt công cụ xử lý (cho macOS)

```bash
# Cài đặt Homebrew (nếu chưa có)
# /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Cài đặt LibreOffice (cho chuyển đổi văn phòng)
brew install --cask libreoffice

# Cài đặt ImageMagick (cho xử lý hình ảnh)
brew install imagemagick

# Cài đặt PDFtk (cho công cụ PDF)
brew install pdftk-java
```

### 1. Cài đặt Backend

```bash
# Di chuyển vào thư mục backend
cd backend

# Cài đặt các thư viện cần thiết
npm install

# Sao chép file môi trường mẫu
# (Hãy chỉnh sửa các biến trong file .env nếu cần)
cp .env.example .env

# Khởi chạy server backend ở chế độ development
npm run dev

# Server sẽ chạy tại địa chỉ http://localhost:5000 (hoặc cổng bạn cấu hình trong .env)
```

### 2. Cài đặt Frontend

Mở một cửa sổ dòng lệnh mới và thực hiện:

```bash
# Di chuyển vào thư mục frontend
cd frontend

# Cài đặt các thư viện cần thiết
npm install

# Khởi chạy server frontend ở chế độ development
npm run dev

# Mở trình duyệt và truy cập http://localhost:3000
```

Bây giờ bạn đã có thể truy cập và tương tác với trang web FileFlow trên máy của mình!

## � Chạy ở chế độ Production

Để chạy dự án ở môi trường production:

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
npm start
```

Đảm bảo cấu hình biến môi trường (.env) cho production, bao gồm cổng và URL.

## 🧪 Testing

Dự án sử dụng Jest cho testing. Để chạy test:

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 🔧 Troubleshooting

- **Lỗi cài đặt công cụ**: Đảm bảo Homebrew được cập nhật (`brew update`). Nếu gặp lỗi, thử cài đặt thủ công từ trang chủ của từng công cụ.
- **Lỗi upload file lớn**: Kiểm tra cấu hình Multer trong backend (giới hạn kích thước file).
- **Lỗi chuyển đổi file**: Kiểm tra log backend và đảm bảo các công cụ như LibreOffice đang hoạt động.
- **Lỗi frontend**: Xóa node_modules và cài đặt lại (`rm -rf node_modules && npm install`).

## 🤝 Contributing

Chúng tôi hoan nghênh đóng góp! Vui lòng:

1. Fork repository.
2. Tạo branch mới cho feature/bugfix.
3. Commit changes với message rõ ràng.
4. Push và tạo Pull Request.

Hãy tuân thủ coding style và viết test cho thay đổi của bạn.

## 📜 License

Dự án này được phân phối dưới giấy phép MIT. Xem file LICENSE để biết thêm chi tiết.

## 📖 API Documentation

API backend được xây dựng với Express.js. Để xem tài liệu chi tiết, truy cập `/api/docs` sau khi chạy server backend (sử dụng Swagger nếu tích hợp).

## �📄 Tài liệu

Để xem chi tiết về yêu cầu nghiệp vụ, chân dung người dùng và các tính năng, vui lòng tham khảo [Tài liệu Phân tích Nghiệp vụ (BRD)](link-den-tai-lieu-brd-cua-ban.md).

---

_Dự án được phát triển và quản lý bởi Tuệ Nhân._
