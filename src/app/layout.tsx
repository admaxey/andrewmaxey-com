import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Maxey",
  description: "Projects, demos, and experiments",
  metadataBase: new URL("https://andrewmaxey.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen grain">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-display text-xl tracking-tight">Andrew Maxey</a>
        <div className="flex items-center gap-8 text-sm text-text-secondary">
          <a href="/demos" className="link-hover hover:text-text-primary transition-colors">Demos</a>
          <a href="/blog" className="link-hover hover:text-text-primary transition-colors">Blog</a>
          <a href="/about" className="link-hover hover:text-text-primary transition-colors">About</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 flex items-center justify-between text-sm text-text-muted">
        <span>© {new Date().getFullYear()} Andrew Maxey</span>
        <div className="flex items-center gap-6">
          <a href="https://github.com/admaxey" className="hover:text-text-secondary transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
