import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../data/gallery";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );
  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const image = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pregled slike galerije"
      className="fixed inset-0 z-[70] bg-[color:var(--color-ink)]/95 flex flex-col"
    >
      <div className="flex items-center justify-between px-5 sm:px-8 py-5 text-[color:var(--color-cream)]">
        <span className="text-sm font-medium tabular-nums">
          {index + 1} / {images.length}
        </span>
        <button onClick={onClose} aria-label="Zatvori" className="p-2 hover:opacity-70 transition-opacity">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-16 pb-6 relative">
        <button
          onClick={goPrev}
          aria-label="Prethodna slika"
          className="hidden sm:flex absolute left-4 lg:left-8 w-11 h-11 rounded-full bg-[color:var(--color-cream)]/10 hover:bg-[color:var(--color-cream)]/20 items-center justify-center text-[color:var(--color-cream)] transition-colors"
        >
          <ChevronLeft size={22} />
        </button>

        <img
          src={image.src}
          alt={image.alt}
          className="max-h-full max-w-full object-contain rounded-xl"
        />

        <button
          onClick={goNext}
          aria-label="Sljedeća slika"
          className="hidden sm:flex absolute right-4 lg:right-8 w-11 h-11 rounded-full bg-[color:var(--color-cream)]/10 hover:bg-[color:var(--color-cream)]/20 items-center justify-center text-[color:var(--color-cream)] transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="flex sm:hidden items-center justify-between px-8 pb-8">
        <button
          onClick={goPrev}
          aria-label="Prethodna slika"
          className="w-11 h-11 rounded-full bg-[color:var(--color-cream)]/10 flex items-center justify-center text-[color:var(--color-cream)]"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goNext}
          aria-label="Sljedeća slika"
          className="w-11 h-11 rounded-full bg-[color:var(--color-cream)]/10 flex items-center justify-center text-[color:var(--color-cream)]"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
