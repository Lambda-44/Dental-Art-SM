import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[color:var(--color-sand)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Iskustva"
          title="Iskustva naših pacijenata"
          align="center"
        />

        <div className="mt-6 text-center">
          <p className="text-xs text-[color:var(--color-ink-soft)]/70 max-w-xl mx-auto">
            Prikazana mišljenja su primjeri postavljeni radi prikaza izgleda stranice i ne
            predstavljaju stvarne recenzije pacijenata.
          </p>
        </div>

        {/* Mobile: horizontal snap carousel. Desktop: grid. */}
        <div className="mt-10 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0 pb-2">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="snap-center shrink-0 w-[85%] sm:w-auto bg-[color:var(--color-cream)] rounded-2xl border border-[color:var(--color-line)] p-6 flex flex-col"
            >
              <Quote size={22} className="text-[color:var(--color-gold)]" strokeWidth={1.5} />
              <div className="flex gap-0.5 mt-4" aria-label={`Ocjena: ${t.rating} od 5 zvjezdica`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-[color:var(--color-gold)] text-[color:var(--color-gold)]" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-[color:var(--color-ink-soft)] leading-relaxed flex-1">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[color:var(--color-teal-tint)] text-[color:var(--color-teal-deep)] text-xs font-semibold flex items-center justify-center">
                  {t.initials}
                </span>
                <span className="text-sm font-medium text-[color:var(--color-ink)]">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
