import './globals.css'

export const metadata = {
  title: 'FileFlow - Dịch vụ chuyển đổi file trực tuyến',
  description: 'Chuyển đổi và nén file dễ dàng với FileFlow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}