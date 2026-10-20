import type { Metadata } from "next";
import { Button, Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `Thanks — ${siteConfig.name}`,
  robots: { index: false, follow: false },
};

/**
 * Conversion page. Fire your Google Ads / GA4 conversion tag here (or via
 * GTM on this path) so Smart Bidding learns from real submissions.
 */
export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center">
        <Container className="py-24 text-center">
          <span
            aria-hidden
            className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-light text-brand"
          >
            <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
            </svg>
          </span>
          <h1 className="text-balance mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            {siteConfig.thankYou.title}
          </h1>
          <p className="text-pretty mx-auto mt-4 max-w-md text-lg text-muted">
            {siteConfig.thankYou.description}
          </p>
          <Button href={siteConfig.phoneHref} size="lg" className="mt-8">
            Call {siteConfig.phone}
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
