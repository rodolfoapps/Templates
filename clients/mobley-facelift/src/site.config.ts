/**
 * Mobley MD — Facelift PPC lander.
 *
 * Every credential and number below is taken from mobleymd.com (CV page,
 * credentials page, facelift page FAQ, schema markup). See README.md for the
 * source of each one. Nothing is invented or rounded up.
 */
export const siteConfig = {
  name: "Mobley MD",
  legalName: "Mobley MD Facial Plastic Surgery",
  url: "https://client-mobley-facelift.vercel.app",
  description:
    "Facelift surgery in Salt Lake City, Utah by Dr. Steven Mobley, a double board-certified facial plastic surgeon. Deep plane technique for a natural, rested result. Request a private consultation.",

  phone: "(801) 449-9990",
  phoneHref: "tel:+18014499990",
  email: "info@mobleymd.com",
  address: "1045 E 3900 S, Suite 200, Salt Lake City, UT 84124",
  mapsHref: "https://maps.google.com/?q=1045+E+3900+S+Suite+200+Salt+Lake+City+UT+84124",
  siteHref: "https://mobleymd.com",
  photosHref: "https://mobleymd.com/photos/",
  cvHref: "https://mobleymd.com/dr-mobley-cv/",
  financingHref: "https://mobleymd.com/financing/",

  dtr: { service: "Facelift", city: "Salt Lake City" },
  mobilePrimaryCta: "form" as "call" | "form",

  header: { badge: "Castle Connolly Top Doctor" },

  hero: {
    eyebrow: "{service} · {city}, Utah",
    title: "A facelift that looks like you. Rested, not pulled.",
    mobileTitle: "A facelift that looks like you.",
    subtitle:
      "Dr. Steven Mobley is a double board-certified facial plastic surgeon who has performed facelifts in Salt Lake City since 2002. His deep plane technique lifts the muscle layer beneath the skin, so the result is natural, not “windblown.”",
    credentials: [
      { icon: "shield", title: "Double board-certified", text: "Facial plastic surgery (2005) and otolaryngology–head & neck surgery (2002)" },
      { icon: "academic", title: "Professor of Surgery", text: "Former Associate Professor and Director of Facial Plastic Surgery, U of Utah" },
      { icon: "clinic", title: "Own surgical suite", text: "Millcreek Surgical Suite, AAAASF-accredited, where he is Medical Director" },
    ],
    proofLine: "Castle Connolly Top Doctor · 50+ published works · 85+ surgeon lectures",
  },

  form: {
    title: "Request a private consultation",
    subtitle: "A patient care coordinator replies within one business day.",
    button: "Request consultation",
    reassurance: "Private and confidential. No obligation. We never share your information.",
    interests: ["Facelift", "Facelift + neck lift", "Facelift + eyelid surgery", "Not sure yet, I'd like guidance"],
    contactMethods: ["Phone call", "Text message", "Email"],
  },

  press: {
    label: "Respected and known by",
    logos: [
      { src: "/images/press/cosmopolitan.png", alt: "Cosmopolitan", w: 513, h: 98 },
      { src: "/images/press/abc-news.png", alt: "ABC News", w: 213, h: 77 },
      { src: "/images/press/good-morning-america.png", alt: "Good Morning America", w: 173, h: 121 },
      { src: "/images/press/inside-edition.png", alt: "Inside Edition", w: 142, h: 90 },
      { src: "/images/press/people.png", alt: "People", w: 161, h: 82 },
      { src: "/images/press/castle-connolly.png", alt: "Castle Connolly Top Doctors", w: 700, h: 149 },
    ],
  },

  meet: {
    eyebrow: "Meet your surgeon",
    name: "Dr. Steven Mobley",
    role: "Double board-certified facial plastic surgeon \u00b7 Salt Lake City, Utah",
    quote:
      "I feel strongly about avoiding a surgical, pulled-too-tight look, and I find that conservative tightening is the best way to go.",
    quoteSource: "Dr. Mobley, in his own words on facelift surgery",
    paragraphs: [
      "Dr. Steven Mobley has focused his entire career on the face and neck. He trained in facial plastic and reconstructive surgery at the University of Illinois at Chicago, spent over a decade teaching the next generation of surgeons at the University of Utah, and has served Salt Lake City patients since 2002.",
      "Facelift and neck lift surgery is at the centre of that work. Over more than 20 years he has performed hundreds of face and neck procedures, refined a modified deep plane approach that lifts the SMAS layer rather than pulling the skin, and designed his own surgical instruments for facelift and neck lift procedures. He has lectured on neck and jaw contouring to the International Society of Aesthetic Plastic Surgeons and teaches his techniques to other surgeons.",
    ],
    highlights: [
      { title: "Hundreds of procedures", text: "Face and neck surgery over more than 20 years in practice" },
      { title: "Deep plane technique", text: "Lifts the SMAS layer beneath the skin for a natural, lasting result" },
      { title: "Instruments of his own design", text: "Surgical clamp and retractor developed for facelift and neck lift" },
      { title: "Teaches other surgeons", text: "Lectures on neck and jaw contouring to the International Society of Aesthetic Plastic Surgeons" },
    ],
    stats: [
      { value: "20+", label: "Years in practice" },
      { value: "100s", label: "Face & neck procedures" },
      { value: "85+", label: "Lectures to surgeons" },
      { value: "50+", label: "Published works" },
    ],
  },

  gallery: {
    eyebrow: "Real patients of Dr. Mobley",
    title: "Facelift before & after",
    description:
      "Unretouched photos from the Mobley MD gallery. Every face is different, so results vary. Dr. Mobley will show you cases like yours at your consultation.",
    cta: "See the full gallery",
    cases: [
      { src: "/images/cases/case29-frontal.webp", w: 1050, h: 698, label: "Facelift, Case 29" },
      { src: "/images/cases/case28-frontal.webp", w: 1050, h: 698, label: "Facelift, Case 28" },
      { src: "/images/cases/case33-frontal.webp", w: 1062, h: 772, label: "Facelift, Case 33" },
      { src: "/images/cases/case30-frontal.webp", w: 1200, h: 794, label: "Facelift + neck lift, Case 30" },
      { src: "/images/cases/case11-frontal.webp", w: 1198, h: 818, label: "Facelift, Case 11" },
      { src: "/images/cases/case03-profile.webp", w: 1200, h: 817, label: "Facelift, Case 3, profile" },
    ],
  },

  why: {
    eyebrow: "Why patients travel for Dr. Mobley",
    title: "The surgeon who teaches other surgeons.",
    entity:
      "Facial plastic surgeons learn their craft from a small number of teachers. Dr. Mobley is one of them: a former Associate Professor of Surgery and Director of Facial Plastic and Reconstructive Surgery at the University of Utah, with more than 85 lectures to surgeons across North America and Europe and chapters in the textbooks used to train them.",
    stats: [
      { value: "Since 2002", label: "Serving Salt Lake City" },
      { value: "2×", label: "Board-certified" },
      { value: "50+", label: "Published works" },
      { value: "85+", label: "Lectures to surgeons" },
    ],
    points: [
      {
        icon: "seal",
        title: "Double board-certified",
        text: "American Board of Facial Plastic and Reconstructive Surgery (2005) and American Board of Otolaryngology–Head and Neck Surgery (2002). Fellow of the AAFPRS.",
      },
      {
        icon: "book",
        title: "Published and cited",
        text: "More than 50 published works, including book chapters in the texts used to train facial plastic surgeons. Guest editor for Facial Plastic Surgery Clinics of North America.",
      },
      {
        icon: "award",
        title: "Recognized by peers",
        text: "Castle Connolly Top Doctor, multiple years. Former residency program director and Associate Professor of Surgery at the University of Utah School of Medicine.",
      },
    ],
  },

  approach: {
    eyebrow: "The Mobley approach",
    title: "Tighten the muscle, not the skin.",
    intro:
      "A facelift that pulls only the skin tends to look tight and surgical. Dr. Mobley performs a modified deep plane lift. The SMAS muscle layer under the skin is repositioned and tightened, which lifts sagging cheeks and jowls and restores the jawline while the skin itself is laid back down without tension.",
    points: [
      { title: "Hidden incisions", text: "Placed in the natural creases in front of and behind the ear and in the hairline. After a few weeks of healing they are very hard to spot." },
      { title: "Natural movement", text: "Because the lift is in the deeper layer, expressions stay yours. Conservative tightening avoids the “pulled” look." },
      { title: "A curated plan", text: "A facelift is often combined with a neck lift, 3D neck contouring, eyelid surgery or resurfacing. Dr. Mobley builds one plan around your face and your goals." },
    ],
  },

  facts: {
    title: "Facelift at a glance",
    rows: [
      { label: "Surgeon", value: "Dr. Steven Mobley, double board-certified facial plastic surgeon" },
      { label: "Technique", value: "Modified deep plane (SMAS) facelift; mid-facelift when cheek fullness needs repositioning" },
      { label: "Where", value: "Millcreek Surgical Suite, Salt Lake City. AAAASF-accredited, Dr. Mobley is Medical Director" },
      { label: "Anesthesia", value: "Provided by Utah anesthesia specialists at the surgical suite" },
      { label: "Back to work", value: "Most patients take 1–2 weeks; some return after one week" },
      { label: "Cost", value: "Starts at approximately $23,000 (surgeon, facility and anesthesia). Exact quote after your consultation" },
      { label: "Financing", value: "CareCredit available" },
    ],
  },

  travel: {
    eyebrow: "Out-of-town patients",
    title: "Patients fly in from across the US.",
    text:
      "Our Patient Care Team coordinates travel, lodging and follow-up so your visit is simple and discreet. Out-of-town patients may be eligible for an airfare credit of up to $500. Ask when you book.",
  },

  testimonials: {
    eyebrow: "Patient stories",
    title: "In their words",
    items: [
      {
        quote:
          "I put off having my jaw and neck lifted for years. I was afraid of the surgery and recovery. It was far easier than ever imagined and Dr. Mobley and his team were wonderful through every step. I am so pleased with the results and highly recommend him.",
        name: "Lynette McAferty",
        detail: "Facelift and neck lift patient",
      },
      {
        quote:
          "I’m their most important client! At least that is how they make me feel every time I walk through the door. I’ve done two procedures and recommend him with no hesitation. Wonderful staff, wonderful doctor, beautiful office.",
        name: "Mobley MD patient",
        detail: "Facebook review",
      },
      {
        quote:
          "From consultation to post-op, Dr. Mobley and his team exceeded my expectations each step of the way. When it comes to something this important, knowing you are working with the finest is extremely reassuring.",
        name: "Mobley MD patient",
        detail: "Facebook review",
      },
    ],
    footnote: "Reviews from mobleymd.com and the practice’s Facebook page. Individual results vary.",
  },

  facility: {
    eyebrow: "Where your surgery happens",
    title: "A surgical suite built for facial plastic surgery.",
    text:
      "Mobley MD was built from the ground up for the patient experience. Surgery takes place at Millcreek Surgical Suite, an AAAASF-accredited outpatient facility steps from St. Mark’s Hospital in Utah’s medical corridor. Dr. Mobley serves as its Medical Director, so the same standards apply from consultation to recovery.",
  },

  faq: {
    eyebrow: "Questions patients ask",
    title: "Facelift FAQ",
    items: [
      {
        q: "Am I a good candidate for a facelift?",
        a: "Most facelift patients want to correct sagging cheeks, jowls and loose neck skin that no longer respond to skin care or injectables. If your cheek fullness has dropped, a mid-facelift may be more appropriate. Dr. Mobley decides which approach fits you only after a full exam at your consultation.",
      },
      {
        q: "Will my facelift look natural?",
        a: "That is the goal of the deep plane technique. Dr. Mobley tightens the SMAS muscle layer rather than pulling the skin, and he favours conservative tightening. The result is a rested version of your own face, not a tight or “windblown” look.",
      },
      {
        q: "How much does a facelift cost in Salt Lake City?",
        a: "At Mobley MD the total cost, including surgeon, facility and anesthesia fees, starts at approximately $23,000. It can increase with the length of surgery and any procedures you add, such as eyelid surgery. You receive a clear, itemised quote after your consultation.",
      },
      {
        q: "Is financing available?",
        a: "Yes. Mobley MD partners with CareCredit. The team will walk you through every financing option at your consultation.",
      },
      {
        q: "How long is recovery? When can I go back to work?",
        a: "Plan on one to two weeks. Some patients are ready for work after one week, but most prefer the privacy of a full two weeks. A compressive bandage is worn for the first one to two days, and mild tightness under the chin is normal for about a week.",
      },
      {
        q: "How painful is facelift surgery?",
        a: "Most patients find it very tolerable. The compressive wrap can feel like pressure for the first day or two, and pain medication is provided. Once the wrap comes off, most of the discomfort is gone.",
      },
      {
        q: "What are the risks?",
        a: "Every surgery carries risk. The most common with a facelift are hair loss near incisions, earlobe distortion or numbness, asymmetry, thick scars, leftover skin laxity and blood collecting under the skin. Dr. Mobley reviews these and less common risks with you in person before any plan is made.",
      },
      {
        q: "What happens after I send this form?",
        a: "A patient care coordinator contacts you within one business day, by the method you choose. You will talk through your goals, timing and any questions before a consultation is scheduled. Nothing is booked without your say-so.",
      },
    ],
  },

  finalCta: {
    title: "Start with a conversation.",
    text: "Tell us a little about what you have in mind. A patient care coordinator will reach out privately to answer questions and, if you like, schedule your consultation with Dr. Mobley.",
  },

  footer: {
    note: "Steven Mobley, MD. Certified by the American Board of Facial Plastic and Reconstructive Surgery (2005) and the American Board of Otolaryngology–Head and Neck Surgery (2002). Licensed Physician and Surgeon, State of Utah.",
    links: [
      { label: "mobleymd.com", href: "https://mobleymd.com" },
      { label: "Dr. Mobley's CV", href: "https://mobleymd.com/dr-mobley-cv/" },
      { label: "Privacy policy", href: "https://mobleymd.com/privacy-policy/" },
    ],
  },

  thankYou: {
    title: "Thank you. We’ll be in touch within one business day.",
    text: "Your request is private. If you would rather talk now, call the office and let us know you just sent a consultation request.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
