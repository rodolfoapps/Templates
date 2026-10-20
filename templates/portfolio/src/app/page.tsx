import { Button, Logo, MockupBanner, Navbar } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <MockupBanner />
      <Navbar
        logo={<Logo name={siteConfig.name} mark={siteConfig.mark} />}
        links={[...siteConfig.nav]}
        cta={
          <Button href={siteConfig.cta.href} size="sm" variant="inverted" className="text-background">
            {siteConfig.cta.label}
          </Button>
        }
      />
      <main className="flex-1">
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
