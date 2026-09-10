import { ArrowRight } from "lucide-react";
import SmileMark from "./SmileMark";

const indicators = ["Stručan tim", "Moderna tehnologija", "Individualan pristup"];

export default function Hero() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pocetna" className="relative pt-32 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 overflow-hidden">
      {/* ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-tint), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold-tint), transparent 70%)" }}
      />

      <div className="container-page grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center relative">
        <div className="fade-up" style={{ animationDelay: "60ms" }}>
          <p className="eyebrow mb-5">Privatna stomatološka ordinacija</p>
          <h1 className="inline-block font-display font-medium text-[2.6rem] leading-[1.06] sm:text-[3.4rem] lg:text-[3.9rem] text-[color:var(--color-ink)] max-w-xl">
            Vaš osmijeh zaslužuje najbolju brigu.
            <SmileMark className="block w-full h-3 sm:h-4 mt-2" />
          </h1>
          <p className="mt-7 text-lg text-[color:var(--color-ink-soft)] max-w-md leading-relaxed">
            Moderna stomatologija, stručan tim i individualan pristup svakom pacijentu.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="#kontakt" onClick={scrollTo("#kontakt")} className="btn btn-primary">
              Kontaktirajte nas <ArrowRight size={17} />
            </a>
            <a href="#usluge" onClick={scrollTo("#usluge")} className="btn btn-secondary">
              Pogledaj usluge
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {indicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink-soft)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-teal)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative fade-up" style={{ animationDelay: "160ms" }}>
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-[3/4] shadow-[var(--shadow-soft)]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
              alt="Moderna, svijetla stomatološka ordinacija Dental Art SM"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/25 via-transparent to-transparent" />
          </div>

          <div className="hidden sm:flex absolute -bottom-8 -left-8 items-center gap-4 bg-[color:var(--color-cream)] rounded-2xl shadow-[var(--shadow-card)] border border-[color:var(--color-line)] px-5 py-4 max-w-[15rem]">
            <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border-2 border-[color:var(--color-cream)] shadow">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[color:var(--color-ink)] leading-tight">
                Pažljiva njega
              </p>
              <p className="text-xs text-[color:var(--color-ink-soft)] mt-0.5">
                Svaki pacijent, svaki put.
              </p>
            </div>
          </div>

          <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 rounded-2xl border border-[color:var(--color-gold)]/40" />
        </div>
      </div>
    </section>
  );
}
