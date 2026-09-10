import {
  Award,
  Cpu,
  ClipboardList,
  Sparkle,
  ShieldCheck,
  Eye,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useReveal } from "../lib/useReveal";

const reasons = [
  { icon: Award, title: "Iskusan stručni tim", text: "Doktori posvećeni kontinuiranom usavršavanju i preciznom radu." },
  { icon: Cpu, title: "Moderna tehnologija", text: "Savremena dijagnostika i oprema za precizniju i bržu terapiju." },
  { icon: ClipboardList, title: "Individualan plan terapije", text: "Svaki pacijent dobija plan prilagođen svojim potrebama." },
  { icon: Sparkle, title: "Ugodan i moderan ambijent", text: "Prostor osmišljen da smanji nelagodu i stres pri posjeti." },
  { icon: ShieldCheck, title: "Visoki higijenski standardi", text: "Strogi protokoli sterilizacije za vašu potpunu sigurnost." },
  { icon: Eye, title: "Transparentan pristup", text: "Jasne informacije o terapiji i cijenama prije početka rada." },
];

export default function WhyUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28">
      <div className="container-page grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Razlike koje se osjete"
            title="Zašto odabrati nas?"
            underline
          />
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-x-8 gap-y-10 ${visible ? "fade-up" : "opacity-0"}`}
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex gap-4" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="shrink-0 w-11 h-11 rounded-full border border-[color:var(--color-gold)]/50 flex items-center justify-center">
                  <Icon size={19} strokeWidth={1.6} className="text-[color:var(--color-teal)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[color:var(--color-ink-soft)] leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
