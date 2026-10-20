import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { siteConfig } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.dtr.service} in ${siteConfig.dtr.city} — ${siteConfig.name}`,
  description: siteConfig.description,
  // PPC landers are usually kept out of organic search.
  robots: { index: false, follow: false },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#c2410c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
