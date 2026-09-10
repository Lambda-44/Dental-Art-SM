// Placeholder testimonials for layout purposes only — not real patient reviews.

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amela H.",
    initials: "AH",
    rating: 5,
    text: "Osjećala sam se ugodno od prvog trenutka. Tim je strpljivo objasnio svaki korak terapije.",
  },
  {
    id: "t2",
    name: "Emir S.",
    initials: "ES",
    rating: 5,
    text: "Profesionalan pristup i moderna oprema. Rezultat je premašio moja očekivanja.",
  },
  {
    id: "t3",
    name: "Lejla K.",
    initials: "LK",
    rating: 5,
    text: "Konačno ordinacija u kojoj se ne plašim posjeta stomatologu. Preporučujem svima.",
  },
  {
    id: "t4",
    name: "Tarik M.",
    initials: "TM",
    rating: 5,
    text: "Detaljan plan liječenja i jasna komunikacija o cijenama unaprijed. Sve pohvale.",
  },
  {
    id: "t5",
    name: "Selma B.",
    initials: "SB",
    rating: 5,
    text: "Moja djeca više ne strahuju od odlaska stomatologu — osoblje je izuzetno strpljivo.",
  },
  {
    id: "t6",
    name: "Haris D.",
    initials: "HD",
    rating: 5,
    text: "Implantološki zahvat je prošao potpuno bezbolno, uz odličnu njegu nakon terapije.",
  },
];
