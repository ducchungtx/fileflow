import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          FileFlow
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Dịch vụ chuyển đổi file trực tuyến nhanh chóng, bảo mật và dễ sử dụng
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/compress-image"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Nén ảnh ngay
          </Link>
          <Link 
            href="/blog"
            className="bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Xem Blog
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Tính năng chính
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🗜️</div>
            <h3 className="text-xl font-semibold mb-3">Nén ảnh</h3>
            <p className="text-gray-600">
              Giảm dung lượng file ảnh mà vẫn giữ được chất lượng tốt nhất
            </p>
          </div>
          
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-3">Chuyển đổi PDF</h3>
            <p className="text-gray-600">
              Chuyển đổi văn bản Word sang PDF và nhiều định dạng khác
            </p>
          </div>
          
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-3">Bảo mật</h3>
            <p className="text-gray-600">
              File của bạn được xử lý an toàn và tự động xóa sau khi hoàn thành
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-12 bg-gray-50 -mx-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Blog - Kinh nghiệm văn phòng
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Chia sẻ tips và tricks về các ứng dụng văn phòng hiệu quả
          </p>
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Đọc thêm →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}