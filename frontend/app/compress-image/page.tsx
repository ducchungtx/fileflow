'use client'

import { useState } from 'react'

export default function CompressImagePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    
    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleCompress = () => {
    if (!selectedFile) return
    
    // TODO: Implement API call to backend
    alert('Tính năng nén ảnh sẽ được triển khai khi backend hoàn thành!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Nén ảnh trực tuyến
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 text-center">
          Giảm dung lượng file ảnh mà vẫn giữ được chất lượng tốt. Hỗ trợ các định dạng JPG, PNG, WEBP.
        </p>

        {/* Upload Area */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <div className="text-6xl mb-4">📷</div>
            
            {selectedFile ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  File đã chọn:
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-red-600 hover:text-red-800 underline mb-4"
                >
                  Chọn file khác
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Kéo thả ảnh vào đây hoặc
                </h3>
                <label className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                  Chọn file
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          {selectedFile && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Tùy chọn nén:</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-semibold mb-2">Chất lượng cao</h4>
                  <p className="text-sm text-gray-600">Giảm 30-50% dung lượng</p>
                </div>
                
                <div className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer border-blue-500 bg-blue-50">
                  <h4 className="font-semibold mb-2">Cân bằng</h4>
                  <p className="text-sm text-gray-600">Giảm 50-70% dung lượng</p>
                </div>
                
                <div className="border rounded-lg p-4 text-center hover:bg-gray-50 cursor-pointer">
                  <h4 className="font-semibold mb-2">Tối ưu tối đa</h4>
                  <p className="text-sm text-gray-600">Giảm 70-90% dung lượng</p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleCompress}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Bắt đầu nén ảnh
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Nhanh chóng</h3>
            <p className="text-gray-600 text-sm">Xử lý hình ảnh trong vài giây</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Bảo mật</h3>
            <p className="text-gray-600 text-sm">File tự động xóa sau 24h</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">💎</div>
            <h3 className="font-semibold mb-2">Chất lượng cao</h3>
            <p className="text-gray-600 text-sm">Giữ nguyên chất lượng hình ảnh</p>
          </div>
        </div>
      </div>
    </div>
  )
}