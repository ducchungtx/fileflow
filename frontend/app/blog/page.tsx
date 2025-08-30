import Link from 'next/link'

// Sample blog posts data - in a real app, this would come from a CMS or markdown files
const blogPosts = [
  {
    id: 1,
    title: "10 Tips Excel giúp tăng hiệu quả công việc",
    excerpt: "Khám phá những tính năng ẩn trong Excel để xử lý dữ liệu nhanh hơn và chính xác hơn.",
    date: "2024-01-15",
    category: "Excel",
    slug: "excel-tips-hieu-qua"
  },
  {
    id: 2,
    title: "Cách tối ưu hóa file PowerPoint cho bài thuyết trình",
    excerpt: "Học cách làm cho slide PowerPoint của bạn trở nên chuyên nghiệp và ấn tượng hơn.",
    date: "2024-01-10",
    category: "PowerPoint", 
    slug: "toi-uu-powerpoint"
  },
  {
    id: 3,
    title: "Word vs Google Docs: So sánh chi tiết cho công việc nhóm",
    excerpt: "Phân tích ưu nhược điểm của từng công cụ để chọn ra giải pháp phù hợp nhất.",
    date: "2024-01-05",
    category: "Word",
    slug: "word-vs-google-docs"
  },
  {
    id: 4,
    title: "Bảo mật file Office: Mã hóa và phân quyền truy cập",
    excerpt: "Hướng dẫn cách bảo vệ tài liệu quan trọng khỏi truy cập trái phép.",
    date: "2024-01-01",
    category: "Bảo mật",
    slug: "bao-mat-file-office"
  }
]

const categories = ["Tất cả", "Excel", "PowerPoint", "Word", "Bảo mật"]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog - Kinh nghiệm văn phòng
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chia sẻ những tips, tricks và kiến thức hữu ích về các ứng dụng văn phòng 
            để nâng cao hiệu quả công việc của bạn.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "Tất cả"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-12">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              Bài viết nổi bật
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {blogPosts[0].title}
            </h2>
            <p className="text-xl mb-6 text-white/90">
              {blogPosts[0].excerpt}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-white/80">{blogPosts[0].date}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {blogPosts[0].category}
              </span>
            </div>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Đọc ngay →
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Placeholder for blog post image */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-4xl">📄</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Đọc thêm →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Đăng ký nhận bài viết mới
          </h3>
          <p className="text-gray-600 mb-6">
            Nhận thông báo khi có bài viết mới về kinh nghiệm văn phòng
          </p>
          <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}