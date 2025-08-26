// ...imports...
import "@/app/globals.css";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white text-slate-900">
      <body className="min-h-screen flex flex-col">
        {/* Skip link */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50
                                   focus:rounded focus:bg-white focus:px-3 focus:py-2
                                   focus:outline-none focus:ring-2 focus:ring-violet-600">
          Skip to content
        </a>

        {/* Hero (global) */}
        <header className="text-center py-24 bg-gradient-to-br from-[#5D00FF] to-[#831DC3]">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-3">Lisa Nguyen</h1>
            <p className="text-violet-50 text-lg md:text-xl opacity-90">
              UI/UX Designer · Crafting accessible, user-friendly experiences
            </p>
          </div>
        </header>

        {/* Main */}
        <main id="main" className="flex-1">
          {children}
        </main>

        {/* Footer goes here */}
        <Footer />
      </body>
    </html>
  );
}
