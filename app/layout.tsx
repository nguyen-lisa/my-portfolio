import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lisa Nguyen — UI/UX Designer",
  description: "Accessibility-first portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="bg-white text-slate-900">
      <body className="min-h-screen flex flex-col">
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50
                     focus:rounded focus:bg-white focus:px-3 focus:py-2
                     focus:outline-none focus:ring-2 focus:ring-violet-600"
        >
          Skip to content
        </a>

        {/* Hero */}
        <header className="text-center py-24 bg-gradient-to-br from-[#5D00FF] to-[#831DC3]">
          <div className="container mx-auto px-4">
            <h1
              className="text-white text-4xl md:text-6xl font-bold mb-3
                         transition duration-700 ease-out will-change-transform
                         motion-reduce:transition-none motion-reduce:transform-none"
            >
              Lisa Nguyen
            </h1>
            <p
              className="text-violet-50 text-lg md:text-xl opacity-90
                         transition duration-700 ease-out delay-150 will-change-transform
                         motion-reduce:transition-none motion-reduce:transform-none"
            >
              UI/UX Designer · Crafting accessible, user-friendly experiences
            </p>
          </div>
        </header>

        {/* Main content (page-level sections render here) */}
        <main id="main" className="flex-1">
          {children}
        </main>


      </body>
    </html>
  );
}
