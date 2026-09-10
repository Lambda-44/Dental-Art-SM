// Centralized, easily editable clinic information.

export const clinicInfo = {
  name: "Dental Art SM",
  shortName: "Dental Art SM",
  tagline: "Umjetnost zdravog osmijeha.",

  // Primary phone used for quick-call buttons (navbar, hero, CTA band).
  phoneDisplay: "060 301 05 50",
  phoneHref: "tel:+38760301050",

  // Both doctors have separate direct numbers — shown together in the
  // contact section so patients can reach either one directly.
  phones: [
    { label: "Seid Halilović", display: "060 301 05 50", href: "tel:+38760301050" },
    { label: "Mustafa Seferović", display: "060 347 82 44", href: "tel:+38760347844" },
  ],

  emailDisplay: "dentalartsm2025@gmail.com",
  emailHref: "mailto:dentalartsm2025@gmail.com",

  address: "Bosanska 36, Travnik, Bosna i Hercegovina",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Bosanska+36,+Travnik,+Bosna+i+Hercegovina&output=embed",

  workingHours: [
    { label: "Ponedjeljak – Četvrtak", value: "09:00 – 17:00" },
    { label: "Petak", value: "09:00–12:00, 15:00–18:00" },
    { label: "Subota", value: "10:00 – 15:00" },
    { label: "Nedjelja", value: "Zatvoreno" },
  ],

  social: {
    instagram: "https://www.instagram.com/dental_art_sm/",
    facebook: "https://facebook.com/",
  },
} as const;
