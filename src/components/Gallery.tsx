import { useMemo, useState } from "react";
import { galleryCategories, galleryImages, type GalleryCategory } from "../data/gallery";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";

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
            subtitle="Zavirite u naš prostor i savremeno opremljenu ordinaciju."
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

        {/* Masonry: photos keep their natural proportions (nothing is cropped),
            and the columns balance themselves. `key` replays the fade when filtering. */}
        <div key={category} className="mt-10 columns-2 lg:columns-3 gap-3 sm:gap-4 fade-up">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Otvori sliku: ${img.alt}`}
              className="group relative block w-full mb-3 sm:mb-4 rounded-2xl overflow-hidden break-inside-avoid bg-[color:var(--color-cream-soft)]"
              style={{ aspectRatio: `${img.width} / ${img.height}` }}
            >
              <img
                src={img.thumb}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[color:var(--color-ink)]/0 group-hover:bg-[color:var(--color-ink)]/15 transition-colors" />
              <span className="absolute bottom-3 left-3 text-xs font-medium text-[color:var(--color-cream)] bg-[color:var(--color-ink)]/55 backdrop-blur-sm px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity">
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
