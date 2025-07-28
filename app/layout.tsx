import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OvertimeLabs.ai — Systems that move data and decisions",
  description: "APIs, pipelines, dashboards, and automation — designed for reliability, cost, and speed to value.",
  openGraph: {
    title: "OvertimeLabs.ai",
    description: "APIs, pipelines, dashboards, and automation.",
    type: "website",
    url: "https://overtimelabs.ai",
  },
};

function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <script defer data-domain={domain} src="https://plausible.io/js/script.js"></script>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Plausible />
        <header className="container py-6 flex items-center gap-6">
          <img src="/logo.png" alt="OvertimeLabs.ai" className="h-10 w-auto" />
          <nav className="ml-auto flex gap-6 text-sm">
            <a href="/services" className="hover:opacity-80">Services</a>
            <a href="/packages" className="hover:opacity-80">Packages</a>
            <a href="/results" className="hover:opacity-80">Results</a>
            <a href="/resources" className="hover:opacity-80">Resources</a>
            <a href="/about" className="hover:opacity-80">About</a>
            <a href="/contact" className="btn">Book</a>
          </nav>
        </header>
        {children}
        <footer className="container py-12 text-white/60 text-sm">
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 md:items-center">
            <p>© {new Date().getFullYear()} OvertimeLabs.ai</p>
            <div className="md:ml-auto">Built with Next.js</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
