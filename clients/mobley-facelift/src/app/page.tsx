import { MockupBanner } from "@templates/ui";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PressStrip } from "@/components/PressStrip";
import { BeforeAfter } from "@/components/BeforeAfter";
import { WhyMobley } from "@/components/WhyMobley";
import { Approach } from "@/components/Approach";
import { Testimonials } from "@/components/Testimonials";
import { Facility } from "@/components/Facility";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { JsonLd } from "@/components/JsonLd";

export default function FaceliftLander() {
  return (
    <>
      <MockupBanner label="Preview mockup prepared for Mobley MD" note="not live, not indexed" />
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <PressStrip />
        <BeforeAfter />
        <WhyMobley />
        <Approach />
        <Testimonials />
        <Facility />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
      <JsonLd />
    </>
  );
}
