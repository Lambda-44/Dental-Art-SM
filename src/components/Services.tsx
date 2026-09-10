import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../lib/useReveal";

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = service.icon;

  if (service.featured) {
    return (
      <div
        ref={ref}
        className={`sm:col-span-2 lg:row-span-2 lg:col-span-1 rounded-3xl bg-[color:var(--color-ink)] text-[color:var(--color-cream)] p-8 flex flex-col justify-between min-h-[16rem] lg:min-h-[22rem] group transition-transform duration-300 hover:-translate-y-1 ${
          visible ? "fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 60}ms` }}
      >
        <div>
          <div className="w-12 h-12 rounded-xl bg-[color:var(--color-cream)]/10 flex items-center justify-center mb-6">
            <Icon size={22} strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-2xl font-medium leading-snug">{service.title}</h3>
          <p className="mt-3 text-[color:var(--color-cream-soft)]/75 leading-relaxed">
            {service.description}
          </p>
        </div>
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-gold)] group-hover:gap-2.5 transition-all"
        >
          Saznaj više <ArrowUpRight size={16} />
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`rounded-3xl bg-[color:var(--color-cream-soft)] border border-[color:var(--color-line)] p-7 flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-transparent ${
        visible ? "fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-[color:var(--color-teal-tint)] flex items-center justify-center mb-5 group-hover:bg-[color:var(--color-teal)] transition-colors">
        <Icon size={20} strokeWidth={1.75} className="text-[color:var(--color-teal)] group-hover:text-[color:var(--color-cream)] transition-colors" />
      </div>
      <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)] leading-snug">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm text-[color:var(--color-ink-soft)] leading-relaxed flex-1">
        {service.description}
      </p>
      <a
        href="#kontakt"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-teal)] group-hover:gap-2.5 transition-all w-fit"
      >
        Saznaj više <ArrowUpRight size={15} />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="usluge" className="py-20 sm:py-28 bg-[color:var(--color-sand)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Šta radimo"
          title="Naše usluge"
          subtitle="Kompletna stomatološka njega na jednom mjestu."
          align="left"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
