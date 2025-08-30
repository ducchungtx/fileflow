export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          FileFlow
        </h1>
        <p className="text-xl text-foreground/80 mb-8">
          Dịch vụ Chuyển đổi File Trực tuyến
        </p>
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto">
          Nén ảnh, chuyển đổi Word sang PDF, xử lý file đa dạng với tốc độ nhanh và chất lượng cao.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Nén Ảnh</h3>
            <p className="text-foreground/70">
              Giảm dung lượng ảnh mà vẫn giữ được chất lượng tốt nhất
            </p>
          </div>
          
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Word sang PDF</h3>
            <p className="text-foreground/70">
              Chuyển đổi tài liệu Word thành PDF một cách nhanh chóng
            </p>
          </div>
          
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Nối PDF</h3>
            <p className="text-foreground/70">
              Kết hợp nhiều file PDF thành một tài liệu duy nhất
            </p>
          </div>
        </div>
      </main>
      
      <footer className="mt-16 text-sm text-foreground/50">
        <p>© 2024 FileFlow. Dịch vụ chuyển đổi file trực tuyến.</p>
      </footer>
    </div>
  );
}
