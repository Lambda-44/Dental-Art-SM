import { Phone, Mail } from "lucide-react";
import { clinicInfo } from "../data/clinicInfo";
import SmileMark from "./SmileMark";
import { useReveal } from "../lib/useReveal";

export default function ContactCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-4">
      <div className="container-page">
        <div
          ref={ref}
          className={`relative rounded-[2rem] bg-[color:var(--color-teal-deep)] overflow-hidden px-6 sm:px-14 py-16 sm:py-20 text-center ${
            visible ? "fade-up" : "opacity-0"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-gold), transparent 70%)" }}
          />
          <p className="eyebrow mb-4" style={{ color: "var(--color-gold-tint)" }}>
            Razgovarajmo
          </p>
          <h2 className="inline-block font-display text-[1.9rem] sm:text-[2.6rem] leading-[1.12] font-medium text-[color:var(--color-cream)] max-w-2xl">
            Briga o vašem osmijehu počinje pravim informacijama.
            <SmileMark className="block w-full h-3 sm:h-4 mt-2" color="var(--color-gold)" />
          </h2>
          <p className="mt-6 text-[color:var(--color-cream-soft)]/80 max-w-lg mx-auto leading-relaxed">
            Za dodatne informacije o uslugama, cijenama ili načinu rada, slobodno nas
            kontaktirajte.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <a href={clinicInfo.phoneHref} className="btn btn-outline-light">
              <Phone size={17} /> Pozovite nas
            </a>
            <a href={clinicInfo.emailHref} className="btn btn-outline-light">
              <Mail size={17} /> Pošaljite e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
