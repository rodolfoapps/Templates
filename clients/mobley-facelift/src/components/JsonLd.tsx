import { siteConfig } from "@/site.config";

/** Physician + MedicalProcedure + FAQPage schema, consistent with mobleymd.com. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Physician", "Person"],
        "@id": "https://mobleymd.com/#dr-steven-mobley",
        name: "Steven Mobley, MD",
        jobTitle: "Facial Plastic Surgeon",
        url: "https://mobleymd.com/dr-mobley-cv/",
        telephone: "+1-801-449-9990",
        address: { "@type": "PostalAddress", streetAddress: "1045 E 3900 S, Suite 200", addressLocality: "Salt Lake City", addressRegion: "UT", postalCode: "84124", addressCountry: "US" },
        medicalSpecialty: ["https://schema.org/PlasticSurgery", "https://schema.org/Otolaryngologic"],
      },
      {
        "@type": "MedicalProcedure",
        name: "Facelift (Rhytidectomy)",
        procedureType: "https://schema.org/SurgicalProcedure",
        bodyLocation: "Face and neck",
        howPerformed: "Modified deep plane (SMAS) facelift performed by Dr. Steven Mobley at Millcreek Surgical Suite, Salt Lake City, Utah.",
      },
      {
        "@type": "FAQPage",
        mainEntity: siteConfig.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
