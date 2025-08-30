'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

interface CompressionSettings {
  quality: number
  format: string
  maxWidth?: number
  maxHeight?: number
}

export default function ImageCompressPage() {
  const [files, setFiles] = useState<File[]>([])
  const [settings, setSettings] = useState<CompressionSettings>({
    quality: 80,
    format: 'auto'
  })
  const [isCompressing, setIsCompressing] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    setResults([])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp']
    },
    multiple: true
  })

  const handleCompress = async () => {
    if (files.length === 0) return

    setIsCompressing(true)
    setResults([])

    try {
      const newResults = []

      for (const file of files) {
        const formData = new FormData()
        formData.append('image', file)
        formData.append('quality', settings.quality.toString())
        formData.append('format', settings.format)
        
        if (settings.maxWidth) {
          formData.append('maxWidth', settings.maxWidth.toString())
        }
        if (settings.maxHeight) {
          formData.append('maxHeight', settings.maxHeight.toString())
        }

        try {
          const response = await fetch('http://localhost:5000/api/v1/compress/image', {
            method: 'POST',
            body: formData,
          })

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const blob = await response.blob()
          const compressedFile = new File([blob], `compressed_${file.name}`, {
            type: blob.type
          })

          newResults.push({
            original: file,
            compressed: compressedFile,
            originalSize: file.size,
            compressedSize: blob.size,
            compressionRatio: ((file.size - blob.size) / file.size * 100).toFixed(1)
          })
        } catch (error) {
          console.error('Error compressing file:', file.name, error)
          newResults.push({
            original: file,
            error: 'Lỗi khi nén ảnh: ' + (error as Error).message
          })
        }
      }

      setResults(newResults)
    } catch (error) {
      console.error('Compression error:', error)
    } finally {
      setIsCompressing(false)
    }
  }

  const downloadFile = (file: File, filename: string) => {
    const url = URL.createObjectURL(file)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Nén ảnh trực tuyến
        </h1>

        {/* File Upload Area */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <input {...getInputProps()} />
            <div className="space-y-2">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isDragActive ? (
                <p className="text-blue-600">Thả file ảnh vào đây...</p>
              ) : (
                <div>
                  <p className="text-gray-600">
                    Kéo thả file ảnh vào đây hoặc click để chọn
                  </p>
                  <p className="text-sm text-gray-500">
                    Hỗ trợ: PNG, JPG, JPEG, GIF, BMP, WEBP
                  </p>
                </div>
              )}
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium mb-2">Đã chọn {files.length} file:</h3>
              <div className="space-y-1">
                {files.map((file, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    {file.name} ({formatFileSize(file.size)})
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Compression Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Cài đặt nén</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chất lượng: {settings.quality}%
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={settings.quality}
                onChange={(e) => setSettings({...settings, quality: parseInt(e.target.value)})}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Định dạng đầu ra
              </label>
              <select
                value={settings.format}
                onChange={(e) => setSettings({...settings, format: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="auto">Tự động (giữ nguyên)</option>
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>
                <option value="webp">WebP</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chiều rộng tối đa (px)
              </label>
              <input
                type="number"
                placeholder="Không giới hạn"
                value={settings.maxWidth || ''}
                onChange={(e) => setSettings({...settings, maxWidth: e.target.value ? parseInt(e.target.value) : undefined})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chiều cao tối đa (px)
              </label>
              <input
                type="number"
                placeholder="Không giới hạn"
                value={settings.maxHeight || ''}
                onChange={(e) => setSettings({...settings, maxHeight: e.target.value ? parseInt(e.target.value) : undefined})}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Compress Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleCompress}
            disabled={files.length === 0 || isCompressing}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {isCompressing ? 'Đang nén...' : 'Nén ảnh'}
          </button>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Kết quả</h2>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg p-4">
                  {result.error ? (
                    <div className="text-red-600">
                      <strong>{result.original.name}</strong>: {result.error}
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div>
                        <strong>{result.original.name}</strong>
                        <div className="text-sm text-gray-600">
                          {formatFileSize(result.originalSize)} → {formatFileSize(result.compressedSize)}
                          <span className="text-green-600 ml-2">
                            (-{result.compressionRatio}%)
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadFile(result.compressed, `compressed_${result.original.name}`)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Tải xuống
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}