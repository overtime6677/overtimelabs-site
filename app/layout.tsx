import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OvertimeLabs.ai — Systems that move data and decisions",
  description: "APIs, pipelines, dashboards, and automation — designed for reliability, cost, and speed to value.",
  keywords: "API development, ETL pipelines, data integration, automation, dashboards, data engineering, software consulting",
  authors: [{ name: "OvertimeLabs.ai" }],
  creator: "OvertimeLabs.ai",
  publisher: "OvertimeLabs.ai",
  metadataBase: new URL("https://overtimelabs.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OvertimeLabs.ai — Systems that move data and decisions",
    description: "APIs, pipelines, dashboards, and automation — designed for reliability, cost, and speed to value.",
    type: "website",
    url: "https://overtimelabs.ai",
    siteName: "OvertimeLabs.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OvertimeLabs.ai - Systems that move data and decisions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OvertimeLabs.ai — Systems that move data and decisions",
    description: "APIs, pipelines, dashboards, and automation — designed for reliability, cost, and speed to value.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          <a href="/" aria-label="OvertimeLabs.ai homepage">
            <img src="/logo.png" alt="OvertimeLabs.ai logo" className="h-10 w-auto" />
          </a>
          <nav className="ml-auto flex gap-6 text-sm" aria-label="Main navigation">
            <a href="/services" className="hover:opacity-80">Services</a>
            <a href="/packages" className="hover:opacity-80">Packages</a>
            <a href="/results" className="hover:opacity-80">Results</a>
            <a href="/resources" className="hover:opacity-80">Resources</a>
            <a href="/about" className="hover:opacity-80">About</a>
            <a href="/contact" className="btn" aria-label="Book a consultation">Book</a>
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
