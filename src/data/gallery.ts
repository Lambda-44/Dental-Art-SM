import full01 from "../assets/clinic/gallery/01.webp";
import full02 from "../assets/clinic/gallery/02.webp";
import full03 from "../assets/clinic/gallery/03.webp";
import full04 from "../assets/clinic/gallery/04.webp";
import full05 from "../assets/clinic/gallery/05.webp";
import full06 from "../assets/clinic/gallery/06.webp";
import full07 from "../assets/clinic/gallery/07.webp";
import full08 from "../assets/clinic/gallery/08.webp";
import thumb01 from "../assets/clinic/gallery/01-thumb.webp";
import thumb02 from "../assets/clinic/gallery/02-thumb.webp";
import thumb03 from "../assets/clinic/gallery/03-thumb.webp";
import thumb04 from "../assets/clinic/gallery/04-thumb.webp";
import thumb05 from "../assets/clinic/gallery/05-thumb.webp";
import thumb06 from "../assets/clinic/gallery/06-thumb.webp";
import thumb07 from "../assets/clinic/gallery/07-thumb.webp";
import thumb08 from "../assets/clinic/gallery/08-thumb.webp";

export type GalleryCategory = "Sve" | "Ordinacija" | "Oprema" | "Tim" | "Ambijent";

export type GalleryImage = {
  id: string;
  /** Full-size image, shown in the lightbox. */
  src: string;
  /** Smaller version used in the grid. */
  thumb: string;
  alt: string;
  category: Exclude<GalleryCategory, "Sve">;
  /** Intrinsic size of the thumbnail — reserves space so the grid doesn't jump while loading. */
  width: number;
  height: number;
};

// The order below is the order photos flow through the masonry columns.
// To add a photo: put the .webp files in src/assets/clinic/gallery, import
// them above and add an entry here. The filter buttons update automatically
// (a category with no photos, e.g. "Tim", is hidden until it has one).
export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: full06,
    thumb: thumb06,
    alt: "Prostrana ordinacija Dental Art SM sa dvije stomatološke jedinice",
    category: "Ordinacija",
    width: 900,
    height: 675,
  },
  {
    id: "g2",
    src: full01,
    thumb: thumb01,
    alt: "Radni prostor ordinacije sa stomatološkim stolicama i Dental Art SM panoom",
    category: "Ordinacija",
    width: 675,
    height: 900,
  },
  {
    id: "g3",
    src: full03,
    thumb: thumb03,
    alt: "Upravljačka jedinica stomatološke stolice",
    category: "Oprema",
    width: 900,
    height: 675,
  },
  {
    id: "g4",
    src: full02,
    thumb: thumb02,
    alt: "Ulaz u ordinaciju Dental Art SM sa natpisom Stomatološka ordinacija",
    category: "Ambijent",
    width: 900,
    height: 675,
  },
  {
    id: "g5",
    src: full04,
    thumb: thumb04,
    alt: "Stomatološka stolica i radna jedinica ispred Dental Art SM panoa",
    category: "Ordinacija",
    width: 675,
    height: 900,
  },
  {
    id: "g6",
    src: full08,
    thumb: thumb08,
    alt: "Hodnik ordinacije sa zlatnim Dental Art SM logom na zidu",
    category: "Ambijent",
    width: 900,
    height: 675,
  },
  {
    id: "g7",
    src: full05,
    thumb: thumb05,
    alt: "Instrumenti na stomatološkoj jedinici",
    category: "Oprema",
    width: 675,
    height: 900,
  },
  {
    id: "g8",
    src: full07,
    thumb: thumb07,
    alt: "Ordinacija Dental Art SM — pogled iz drugog ugla",
    category: "Ordinacija",
    width: 900,
    height: 675,
  },
];

const ALL_CATEGORIES = ["Ordinacija", "Oprema", "Tim", "Ambijent"] as const;
const usedCategories = new Set(galleryImages.map((img) => img.category));

export const galleryCategories: GalleryCategory[] = [
  "Sve",
  ...ALL_CATEGORIES.filter((c) => usedCategories.has(c)),
];
