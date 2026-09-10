import { useReveal } from "../lib/useReveal";
import SectionHeading from "./SectionHeading";

const points = [
  "Savremena oprema i dijagnostika",
  "Preventivan pristup dugoročnom zdravlju",
  "Visoki standardi higijene i sterilizacije",
  "Individualan plan za svakog pacijenta",
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const scrollToDoctors = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#doktori")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="o-nama" className="py-20 sm:py-28">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div
          ref={ref}
          className={`relative order-2 lg:order-1 ${visible ? "fade-up" : "opacity-0"}`}
        >
          <div className="rounded-[1.75rem] overflow-hidden aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] shadow-[var(--shadow-card)]">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1100&auto=format&fit=crop"
              alt="Interijer stomatološke ordinacije Dental Art SM"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="hidden sm:block absolute -top-6 -left-6 w-28 h-20 rounded-2xl bg-[color:var(--color-teal-tint)] -z-10" />
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Naša filozofija"
            title="Mjesto gdje stručnost susreće povjerenje."
            underline
          />
          <p className="mt-6 text-[color:var(--color-ink-soft)] leading-relaxed">
            U Dental Art SM vjerujemo da dobra stomatologija počinje odnosom povjerenja.
            Svaki pregled i tretman prilagođavamo individualnim potrebama pacijenta, uz jasnu
            komunikaciju o svakom koraku terapije.
          </p>
          <p className="mt-4 text-[color:var(--color-ink-soft)] leading-relaxed">
            Kombinacijom savremene tehnologije, preventivnog pristupa i pažnje prema detaljima,
            gradimo dugoročno zdravlje osmijeha naših pacijenata — u ugodnom i modernom prostoru
            osmišljenom za vaš mir.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-[color:var(--color-ink)]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--color-gold)] shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <a href="#doktori" onClick={scrollToDoctors} className="btn btn-secondary mt-9">
            Upoznajte naš tim
          </a>
        </div>
      </div>
    </section>
  );
}
