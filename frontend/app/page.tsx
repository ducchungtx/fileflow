import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        FileFlow - Dịch vụ chuyển đổi file
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Link href="/compress/image" className="block">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Nén ảnh</h2>
            <p className="text-gray-600">
              Giảm dung lượng file ảnh mà vẫn giữ chất lượng tốt
            </p>
          </div>
        </Link>
        
        <div className="bg-white rounded-lg shadow-md p-6 opacity-50">
          <h2 className="text-xl font-semibold mb-2">Word sang PDF</h2>
          <p className="text-gray-600">
            Chuyển đổi file Word sang định dạng PDF
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 opacity-50">
          <h2 className="text-xl font-semibold mb-2">Ghép PDF</h2>
          <p className="text-gray-600">
            Nối nhiều file PDF thành một file duy nhất
          </p>
        </div>
      </div>
    </div>
  )
}