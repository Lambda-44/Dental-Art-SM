export type GalleryCategory = "Sve" | "Ordinacija" | "Oprema" | "Tim" | "Ambijent";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Sve">;
  span?: "tall" | "wide" | "normal";
};

export const galleryCategories: GalleryCategory[] = [
  "Sve",
  "Ordinacija",
  "Oprema",
  "Tim",
  "Ambijent",
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
    alt: "Moderna stomatološka stolica u svijetloj ordinaciji",
    category: "Ordinacija",
    span: "tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    alt: "Savremena stomatološka oprema",
    category: "Oprema",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
    alt: "Tim stomatološke ordinacije u razgovoru",
    category: "Tim",
    span: "wide",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
    alt: "Čekaonica ordinacije s toplim ambijentom",
    category: "Ambijent",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalj savremene stomatološke opreme",
    category: "Oprema",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1200&auto=format&fit=crop",
    alt: "Stomatolog pri pregledu pacijenta",
    category: "Tim",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop",
    alt: "Svijetao hodnik ordinacije",
    category: "Ambijent",
    span: "tall",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1516069677018-378515003435?q=80&w=1200&auto=format&fit=crop",
    alt: "Radni prostor u ordinaciji",
    category: "Ordinacija",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalj sterilizacijske opreme",
    category: "Oprema",
    span: "wide",
  },
];
