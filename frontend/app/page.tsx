import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-background text-foreground">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          FileFlow
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Professional Online File Conversion Service
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Free online file conversion service with image compression, Word to PDF conversion, and diverse file processing features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow bg-card">
            <h3 className="text-xl font-semibold mb-3">Image Compression</h3>
            <p className="text-muted-foreground">
              Reduce image file size while maintaining the best quality
            </p>
            <Button className="mt-4" variant="outline" asChild>
              <a href="/compress">Try Now</a>
            </Button>
          </div>

          <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow bg-card">
            <h3 className="text-xl font-semibold mb-3">Word to PDF</h3>
            <p className="text-muted-foreground">
              Convert Word documents to PDF quickly and easily
            </p>
            <Button className="mt-4" variant="outline">
              Convert
            </Button>
          </div>

          <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow bg-card">
            <h3 className="text-xl font-semibold mb-3">Merge PDF</h3>
            <p className="text-muted-foreground">
              Combine multiple PDF files into a single document
            </p>
            <Button className="mt-4" variant="outline">
              Merge Files
            </Button>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-sm text-muted-foreground">
        <p>© 2024 FileFlow. Online file conversion service.</p>
      </footer>
    </div>
  );
}
