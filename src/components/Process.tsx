import { Phone, ClipboardCheck, FileText, HeartPulse } from "lucide-react";
import { useReveal } from "../lib/useReveal";

const steps = [
  { n: "01", title: "Kontakt", text: "Javite nam se putem telefona ili e-maila.", icon: Phone },
  { n: "02", title: "Pregled i konsultacija", text: "Upoznajemo vaše potrebe i stanje usne šupljine.", icon: ClipboardCheck },
  { n: "03", title: "Plan terapije", text: "Pripremamo jasan plan s informativnim cijenama.", icon: FileText },
  { n: "04", title: "Tretman i praćenje", text: "Sprovodimo terapiju uz pažljivo praćenje rezultata.", icon: HeartPulse },
];

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="eyebrow mb-3">Kako izgleda saradnja</p>
          <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.1] font-medium text-[color:var(--color-ink)]">
            Vaš put do zdravijeg osmijeha
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative ${visible ? "fade-up" : "opacity-0"}`}
        >
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-[color:var(--color-line)]"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="relative text-center lg:text-left" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] mx-auto lg:mx-0 rounded-2xl bg-[color:var(--color-cream)] border border-[color:var(--color-line)] shadow-[var(--shadow-card)] flex items-center justify-center">
                  <Icon size={24} strokeWidth={1.6} className="text-[color:var(--color-teal)]" />
                </div>
                <span className="block mt-4 text-xs font-semibold tracking-widest text-[color:var(--color-gold)]">
                  {step.n}
                </span>
                <h3 className="mt-1 font-display text-lg font-medium text-[color:var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-[color:var(--color-ink-soft)] leading-relaxed max-w-[15rem] mx-auto lg:mx-0">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
