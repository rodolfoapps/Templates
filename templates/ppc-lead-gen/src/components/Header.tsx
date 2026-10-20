import { Container, Logo } from "@templates/ui";
import { siteConfig } from "@/site.config";
import { PhoneIcon } from "@/components/PhoneIcon";

/** Slim header: logo, phone, one trust badge. No navigation on purpose. */
export function Header() {
  return (
    <header className="border-b border-foreground/10 bg-background">
      <Container className="flex h-14 items-center justify-between md:h-16">
        <Logo name={siteConfig.name} mark={siteConfig.mark} />

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-xs font-medium text-muted md:flex">
            <ShieldIcon />
            {siteConfig.headerBadge}
          </span>

          {/* Desktop: full number. Mobile: tap-to-call icon. */}
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold md:flex"
          >
            <PhoneIcon className="size-4 text-brand" />
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call ${siteConfig.phone}`}
            className="flex size-10 items-center justify-center rounded-full bg-brand text-white md:hidden"
          >
            <PhoneIcon className="size-5" />
          </a>
        </div>
      </Container>
    </header>
  );
}

function ShieldIcon() {
  return (
    <svg className="size-4 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zm-3 9l2 2 4-4" />
    </svg>
  );
}
