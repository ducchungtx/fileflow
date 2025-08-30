import type { Metadata } from "next";
import { ThemeProvider } from '../components/theme-provider';
import { ThemeToggle } from '../components/theme-toggle';
import "./globals.css";

export const metadata: Metadata = {
  title: "FileFlow - Online File Conversion Service",
  description: "Free online file conversion service with image compression, Word to PDF conversion, and diverse file processing features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <header className="flex justify-between items-center p-4 bg-background border-b border-border transition-colors">
            <h1 className="text-xl font-bold text-foreground">FileFlow</h1>
          </header>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
