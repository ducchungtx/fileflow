import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'FileFlow - Dịch vụ Chuyển đổi File Trực tuyến',
  description: 'Dịch vụ chuyển đổi file trực tuyến nhanh chóng và bảo mật. Hỗ trợ nén ảnh, chuyển đổi văn bản, và nhiều tính năng khác.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 FileFlow. Tất cả quyền được bảo lưu.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}