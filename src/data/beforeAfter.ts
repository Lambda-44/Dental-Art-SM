// Illustrative placeholder cases only — not real patient photography or results.
// Replace with authorized, real before/after photography once available.

export type BeforeAfterCase = {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
};

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Estetska restauracija",
    description: "Ilustrativan primjer poboljšanja izgleda prednjih zuba estetskim materijalima.",
    before:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop&sat=-100&blend-mode=multiply",
    after:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "case-2",
    title: "Izbjeljivanje zuba",
    description: "Ilustrativan primjer posvjetljivanja boje zuba profesionalnim tretmanom.",
    before:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop&sat=-100",
    after:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "case-3",
    title: "Rekonstrukcija osmijeha",
    description: "Ilustrativan primjer kompleksnije protetske rehabilitacije osmijeha.",
    before:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop&sat=-100",
    after:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
  },
];
