import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { siteConfig } from "@/site.config";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Facelift Salt Lake City | Dr. Steven Mobley, Double Board-Certified Facial Plastic Surgeon",
  description: siteConfig.description,
  // PPC lander: keep out of organic search so it never competes with the
  // ranking page at mobleymd.com/salt-lake-city-facelift-utah-rhytidectomy/
  robots: { index: false, follow: false },
  openGraph: {
    title: "Facelift in Salt Lake City by Dr. Steven Mobley",
    description: siteConfig.description,
    type: "website",
    images: ["/images/cases/case29-frontal.webp"],
  },
};

export const viewport: Viewport = { themeColor: "#3a3a3a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
