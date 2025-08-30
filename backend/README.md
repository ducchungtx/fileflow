# FileFlow - Backend (API)

Đây là mã nguồn cho phần Backend (API Server) của dự án FileFlow, được xây dựng bằng **Node.js** và **Express.js**.

Backend chịu trách nhiệm nhận file từ người dùng, đưa các tác vụ xử lý (chuyển đổi, nén...) vào hàng đợi, thực thi chúng, và trả về kết quả cho frontend thông qua các RESTful API.

## 🚀 Công nghệ sử dụng

| Hạng mục              | Công nghệ                                     |
| :-------------------- | :-------------------------------------------- |
| **Runtime**           | [Node.js](https://nodejs.org/)                |
| **Framework**         | [Express.js](https://expressjs.com/)          |
| **Xử lý File Upload** | [Multer](https://github.com/expressjs/multer) |
| **Hàng đợi (Queue)**  | [BullMQ](https://bullmq.io/)                  |
| **Cơ sở dữ liệu**     | [Redis](https://redis.io/) (dành cho BullMQ)  |

**Phụ thuộc bên ngoài:** Hệ thống này yêu cầu các công cụ dòng lệnh (CLI tools) phải được cài đặt trên server, ví dụ: `LibreOffice`, `ImageMagick`, `PDFtk`...

## 📂 Cấu trúc thư mục quan trọng

```
backend/
├── src/
│   ├── api/              # Chứa các file định nghĩa routes
│   ├── config/           # Cấu hình dự án (biến môi trường...)
│   ├── controllers/      # Logic chính để xử lý request
│   ├── jobs/             # Định nghĩa các jobs được xử lý bởi queue
│   ├── services/         # Chứa logic nghiệp vụ (vd: gọi ffmpeg)
│   ├── utils/            # Các hàm tiện ích
│   └── server.js         # File khởi tạo server Express
├── uploads/              # Thư mục tạm chứa file (thêm vào .gitignore)
└── package.json
```

## 🛠️ Hướng dẫn cài đặt

1.  **Di chuyển vào thư mục:**

    ```bash
    cd backend
    ```

2.  **Cài đặt các thư viện:**

    ```bash
    npm install
    ```

3.  **Thiết lập biến môi trường:**

    Sao chép file `.env.example` thành `.env`. Đây là bước **quan trọng**.

    ```
    # backend/.env

    # Cổng chạy server
    PORT=5000

    # Domain của frontend để cho phép CORS
    CORS_ORIGIN=http://localhost:3000

    # Cấu hình Redis cho BullMQ
    REDIS_HOST=127.0.0.1
    REDIS_PORT=6379
    ```

4.  **Chạy server ở chế độ development:**
    ```bash
    npm run dev
    ```
    API server sẽ chạy tại địa chỉ [http://localhost:5000](http://localhost:5000).

## 🔗 API Endpoints (Giai đoạn 1)

- `POST /api/v1/compress/image`: Nén dung lượng hình ảnh.
- `POST /api/v1/convert/word-to-pdf`: Chuyển file Word sang PDF.
- `POST /api/v1/pdf/merge`: Nối nhiều file PDF.

_(Chi tiết về body và response sẽ được mô tả trong Tài liệu API riêng)_
