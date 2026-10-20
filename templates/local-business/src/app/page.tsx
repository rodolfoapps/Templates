import { Button, Footer, Logo, MockupBanner, Navbar } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <MockupBanner />
      <Navbar
        logo={<Logo name={siteConfig.name} mark={siteConfig.mark} />}
        links={[...siteConfig.nav]}
        cta={
          <Button href={siteConfig.cta.href} size="sm">
            <PhoneIcon />
            {siteConfig.phone}
          </Button>
        }
      />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
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

function PhoneIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}
