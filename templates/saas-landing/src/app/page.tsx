import { Button, Footer, Logo, MockupBanner, Navbar } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <MockupBanner />
      <Navbar
        logo={<Logo name={siteConfig.name} mark={siteConfig.mark} />}
        links={[...siteConfig.nav]}
        cta={
          <Button href={siteConfig.cta.href} size="sm">
            {siteConfig.cta.label}
          </Button>
        }
      />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer
        logo={<Logo name={siteConfig.name} mark={siteConfig.mark} />}
        tagline={siteConfig.footer.tagline}
        columns={siteConfig.footer.columns.map((c) => ({
          title: c.title,
          links: [...c.links],
        }))}
        legalName={siteConfig.legalName}
      />
    </>
  );
}
