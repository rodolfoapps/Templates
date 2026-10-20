import { registry } from "@templates/registry";
import { Container } from "@templates/ui";
import { TemplateCard } from "@/components/TemplateCard";

export default function GalleryPage() {
  return (
    <>
      <header className="border-b border-foreground/10">
        <Container className="flex h-16 items-center justify-between">
          <p className="font-semibold tracking-tight">Template Gallery</p>
          <p className="text-sm text-muted">{registry.length} templates · Next.js</p>
        </Container>
      </header>

      <main className="flex-1">
        <Container className="py-16">
          <h1 className="text-balance max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Landing pages & site templates for client mockups.
          </h1>
          <p className="text-pretty mt-4 max-w-xl text-lg text-muted">
            Every template is a standalone Next.js app. Open one to preview it live, then
            clone it into a client folder to build a branded mockup.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registry.map((t) => (
              <TemplateCard key={t.slug} template={t} />
            ))}
          </div>
        </Container>
      </main>

      <footer className="border-t border-foreground/10">
        <Container className="py-8 text-xs text-muted">
          Internal gallery · add templates in <code>packages/registry/src/templates.json</code>
        </Container>
      </footer>
    </>
  );
}
