import { MockupBanner } from "@templates/ui";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceDetails } from "@/components/ServiceDetails";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Guarantee } from "@/components/Guarantee";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";

export default function LandingPage() {
  return (
    <>
      <MockupBanner />
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <ProofStrip />
        <HowItWorks />
        <ServiceDetails />
        <BeforeAfter />
        <Testimonials />
        <Faq />
        <Guarantee />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
