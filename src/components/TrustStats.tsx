import { stats } from "../data/stats";
import { useReveal } from "../lib/useReveal";

export default function TrustStats() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section aria-label="Statistika ordinacije" className="relative -mt-2 sm:mt-0">
      <div className="container-page">
        <div
          ref={ref}
          className={`rounded-3xl bg-[color:var(--color-ink)] px-6 sm:px-10 py-10 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 ${
            visible ? "fade-up" : "opacity-0"
          }`}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center md:text-left border-l border-[color:var(--color-cream)]/10 first:border-l-0 pl-6 md:pl-6 first:pl-0" style={{ animationDelay: `${i * 60}ms` }}>
              <p className="font-display text-3xl sm:text-4xl font-medium text-[color:var(--color-cream)]">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-[color:var(--color-cream-soft)]/70 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[color:var(--color-ink-soft)]/60 mt-3">
          Navedene brojke su ilustrativne i služe kao primjer prikaza.
        </p>
      </div>
    </section>
  );
}
