import { useState } from "react";
import { pricingCategories } from "../data/pricing";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
  const [active, setActive] = useState(pricingCategories[0].id);
  const activeCategory = pricingCategories.find((c) => c.id === active)!;

  return (
    <section id="cjenovnik" className="py-20 sm:py-28 bg-[color:var(--color-sand)]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cijene"
          title="Cjenovnik"
          subtitle="Transparentan pregled najčešćih stomatoloških usluga."
        />

        <div className="mt-12 grid lg:grid-cols-[16rem_1fr] gap-8">
          {/* Category nav — horizontal scroll on mobile, vertical list on desktop */}
          <div
            role="tablist"
            aria-label="Kategorije cjenovnika"
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0"
          >
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`shrink-0 text-left px-4 py-3 rounded-xl text-sm font-medium border transition-colors whitespace-nowrap lg:whitespace-normal ${
                  active === cat.id
                    ? "bg-[color:var(--color-ink)] text-[color:var(--color-cream)] border-[color:var(--color-ink)]"
                    : "bg-[color:var(--color-cream)] text-[color:var(--color-ink-soft)] border-[color:var(--color-line)] hover:border-[color:var(--color-ink)]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active category price list */}
          <div
            role="tabpanel"
            className="bg-[color:var(--color-cream)] rounded-3xl border border-[color:var(--color-line)] p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-medium text-[color:var(--color-ink)] mb-5">
              {activeCategory.title}
            </h3>
            <ul className="divide-y divide-[color:var(--color-line)]">
              {activeCategory.items.map((item) => (
                <li key={item.name} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[color:var(--color-ink)] font-medium">{item.name}</span>
                    <span className="flex-1 border-b border-dotted border-[color:var(--color-line)] translate-y-[-4px] hidden sm:block" />
                    <span className="text-[color:var(--color-teal)] font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-[color:var(--color-ink-soft)] leading-relaxed pr-2">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-[color:var(--color-ink-soft)] max-w-2xl">
          Cijene su informativnog karaktera. Konačna cijena terapije zavisi od individualnog plana
          liječenja.
        </p>
      </div>
    </section>
  );
}
