import type { Metadata } from "next";
import { Container } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Btn } from "@/components/Btn";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = { title: "Thank you | Mobley MD", robots: { index: false, follow: false } };

/** Conversion page: fire the Google Ads / GA4 conversion tag on this path. */
export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center bg-surface">
        <Container className="py-24 text-center">
          <span aria-hidden className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-light text-brand"><CheckIcon className="size-7" /></span>
          <h1 className="text-balance mt-6 font-display text-3xl font-light tracking-tight md:text-4xl">{siteConfig.thankYou.title}</h1>
          <p className="text-pretty mx-auto mt-4 max-w-md text-muted">{siteConfig.thankYou.text}</p>
          <Btn href={siteConfig.phoneHref} size="lg" className="mt-8">Call {siteConfig.phone}</Btn>
        </Container>
      </main>
      <Footer />
    </>
  );
}
