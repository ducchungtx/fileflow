import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FileFlow - Dịch vụ Chuyển đổi File Trực tuyến",
  description: "Dịch vụ chuyển đổi file trực tuyến miễn phí với các tính năng nén ảnh, chuyển đổi Word sang PDF, và xử lý file đa dạng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
