import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
              FileFlow
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-700"
            >
              Trang chủ
            </Link>
            <Link 
              href="/compress-image" 
              className="hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-700"
            >
              Nén ảnh
            </Link>
            <Link 
              href="/blog" 
              className="hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-700"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-200 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}