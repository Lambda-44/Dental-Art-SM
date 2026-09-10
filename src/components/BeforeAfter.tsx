import { useRef, useState, useCallback } from "react";
import { MoveHorizontal } from "lucide-react";
import { beforeAfterCases, type BeforeAfterCase } from "../data/beforeAfter";

function CompareSlider({ item }: { item: BeforeAfterCase }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setWidth(rect.width);
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none touch-none shadow-[var(--shadow-card)]"
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <img
          src={item.after}
          alt={`${item.title} — poslije tretmana`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img
            src={item.before}
            alt={`${item.title} — prije tretmana`}
            className="absolute inset-0 h-full object-cover max-w-none"
            style={{ width: width || "100%" }}
            draggable={false}
          />
        </div>

        <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide uppercase bg-[color:var(--color-ink)]/70 text-[color:var(--color-cream)] px-2.5 py-1 rounded-full">
          Prije
        </span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold tracking-wide uppercase bg-[color:var(--color-teal)]/85 text-[color:var(--color-cream)] px-2.5 py-1 rounded-full">
          Poslije
        </span>

        <div className="absolute top-0 bottom-0 w-0.5 bg-[color:var(--color-cream)]" style={{ left: `${position}%` }}>
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Klizač za poređenje prije/poslije — ${item.title}`}
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[color:var(--color-cream)] shadow-[var(--shadow-card)] flex items-center justify-center cursor-ew-resize"
          >
            <MoveHorizontal size={18} className="text-[color:var(--color-ink)]" />
          </div>
        </div>
      </div>

      <h3 className="mt-5 font-display text-lg font-medium text-[color:var(--color-ink)]">{item.title}</h3>
      <p className="mt-1 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">{item.description}</p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Primjeri</p>
          <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.1] font-medium text-[color:var(--color-ink)]">
            Rezultati koji govore za sebe.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--color-ink-soft)] leading-relaxed">
            Primjeri estetskih i restaurativnih tretmana.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {beforeAfterCases.map((item) => (
            <CompareSlider key={item.id} item={item} />
          ))}
        </div>

        <p className="mt-8 text-xs text-[color:var(--color-ink-soft)]/70 max-w-2xl">
          Prikazani primjeri su ilustrativni i služe isključivo za prikaz funkcionalnosti — ne
          predstavljaju stvarne pacijente niti garantovane rezultate. Spremni su za zamjenu
          ovlaštenom fotografijom stvarnih slučajeva.
        </p>
      </div>
    </section>
  );
}
