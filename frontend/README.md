# FileFlow - Frontend

Đây là mã nguồn cho phần Frontend của dự án FileFlow, được xây dựng bằng **Next.js**.

Phần Frontend chịu trách nhiệm cho toàn bộ giao diện người dùng (UI), tương tác người dùng, gọi API đến backend để xử lý file, và hiển thị các trang của hệ thống blog.

## 🚀 Công nghệ sử dụng

| Hạng mục          | Công nghệ                                           |
| :---------------- | :-------------------------------------------------- |
| **Framework**     | [Next.js](https://nextjs.org/) (sử dụng App Router) |
| **Thư viện UI**   | [React](https://reactjs.org/)                       |
| **Ngôn ngữ**      | JavaScript (hoặc TypeScript)                        |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)            |
| **Giao tiếp API** | [Axios](https://axios-http.com/) hoặc `fetch`       |
| **Quản lý State** | React Context / Zustand (tùy nhu cầu)               |

## 📂 Cấu trúc thư mục quan trọng

```
frontend/
├── app/                  # Chứa các route chính của ứng dụng
│   ├── (site)/           # Các trang chính (trang chủ, blog, tool...)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── api/              # Các API route của Next.js (nếu có)
├── components/           # Chứa các component có thể tái sử dụng
│   └── ui/               # Component UI cơ bản (Button, Input...)
├── posts/                # Nơi lưu trữ các bài blog dạng Markdown (.md/.mdx)
├── lib/                  # Chứa các hàm tiện ích, helper functions
├── public/               # Chứa các tài sản tĩnh (hình ảnh, fonts...)
└── package.json
```

## 🛠️ Hướng dẫn cài đặt

1.  **Di chuyển vào thư mục:**

    ```bash
    cd frontend
    ```

2.  **Cài đặt các thư viện:**

    ```bash
    npm install
    ```

3.  **Thiết lập biến môi trường:**

    Sao chép file `.env.example` thành `.env.local` và cấu hình URL của backend API.

    ```
    # frontend/.env.local

    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```

4.  **Chạy ứng dụng ở chế độ development:**
    ```bash
    npm run dev
    ```
    Ứng dụng sẽ chạy tại địa chỉ [http://localhost:3000](http://localhost:3000).

## 📜 Các scripts chính

- `npm run dev`: Chạy server development.
- `npm run build`: Build ứng dụng cho môi trường production.
- `npm run start`: Chạy server production sau khi đã build.
- `npm run lint`: Kiểm tra lỗi và định dạng code.
