import { useState } from "react";
import { Plus } from "lucide-react";
import { faqItems } from "../data/faq";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="Pitanja" title="Često postavljana pitanja" underline />
        </div>

        <div className="divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-base sm:text-lg text-[color:var(--color-ink)] font-medium">
                      {item.question}
                    </span>
                    <Plus
                      size={20}
                      className={`shrink-0 text-[color:var(--color-teal)] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
