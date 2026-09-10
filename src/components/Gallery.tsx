import { useMemo, useState } from "react";
import { galleryCategories, galleryImages, type GalleryCategory } from "../data/gallery";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";

const spanClass: Record<string, string> = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [category, setCategory] = useState<GalleryCategory>("Sve");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (category === "Sve" ? galleryImages : galleryImages.filter((img) => img.category === category)),
    [category]
  );

  return (
    <section id="galerija" className="py-20 sm:py-28 bg-[color:var(--color-sand)]">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Iznutra"
            title="Galerija"
            subtitle="Zavirite u naš prostor, tim i savremeno opremljenu ordinaciju."
          />

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter galerije">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  category === cat
                    ? "bg-[color:var(--color-ink)] text-[color:var(--color-cream)] border-[color:var(--color-ink)]"
                    : "bg-transparent text-[color:var(--color-ink-soft)] border-[color:var(--color-line)] hover:border-[color:var(--color-ink)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 auto-rows-[10rem] sm:auto-rows-[12rem] gap-3 sm:gap-4">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setLightboxIndex(i)}
              className={`relative rounded-2xl overflow-hidden group ${spanClass[img.span ?? "normal"]}`}
              aria-label={`Otvori sliku: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[color:var(--color-ink)]/0 group-hover:bg-[color:var(--color-ink)]/20 transition-colors" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-[color:var(--color-cream)] bg-[color:var(--color-ink)]/50 backdrop-blur-sm px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
