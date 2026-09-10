import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Copy, Check } from "lucide-react";
import { clinicInfo } from "../data/clinicInfo";
import SectionHeading from "./SectionHeading";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(clinicInfo.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently, address is still selectable text
    }
  };

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-[color:var(--color-sand)]">
      <div className="container-page">
        <SectionHeading eyebrow="Kontakt" title="Kontakt" underline />

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[color:var(--color-cream)] rounded-3xl border border-[color:var(--color-line)] p-7 sm:p-9">
            <h3 className="font-display text-xl font-medium text-[color:var(--color-ink)]">
              {clinicInfo.name}
            </h3>
            <p className="text-sm text-[color:var(--color-ink-soft)] mt-1">{clinicInfo.tagline}</p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[color:var(--color-teal-tint)] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[color:var(--color-teal)]" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                    Adresa
                  </p>
                  <div className="mt-1 flex items-start gap-2">
                    <p className="text-[color:var(--color-ink)]">{clinicInfo.address}</p>
                    <button
                      onClick={copyAddress}
                      aria-label="Kopiraj adresu"
                      className="mt-0.5 shrink-0 text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-teal)] transition-colors"
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[color:var(--color-teal-tint)] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[color:var(--color-teal)]" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                    Telefon
                  </p>
                  <ul className="mt-1 space-y-1">
                    {clinicInfo.phones.map((p) => (
                      <li key={p.href}>
                        <a
                          href={p.href}
                          className="text-[color:var(--color-ink)] font-medium hover:text-[color:var(--color-teal)] transition-colors"
                        >
                          {p.display}
                        </a>
                        <span className="text-[color:var(--color-ink-soft)] text-sm"> — {p.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[color:var(--color-teal-tint)] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[color:var(--color-teal)]" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                    E-mail
                  </p>
                  <a href={clinicInfo.emailHref} className="mt-1 block text-[color:var(--color-ink)] font-medium hover:text-[color:var(--color-teal)] transition-colors break-all">
                    {clinicInfo.emailDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-xl bg-[color:var(--color-teal-tint)] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[color:var(--color-teal)]" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                    Radno vrijeme
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {clinicInfo.workingHours.map((h) => (
                      <li key={h.label} className="text-sm text-[color:var(--color-ink)] flex justify-between gap-6 max-w-xs">
                        <span className="text-[color:var(--color-ink-soft)]">{h.label}</span>
                        <span className="font-medium">{h.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[color:var(--color-line)] flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-ink-soft)]">
                Pratite nas
              </span>
              <a href={clinicInfo.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-teal)] transition-colors">
                <InstagramIcon size={19} />
              </a>
              <a href={clinicInfo.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-teal)] transition-colors">
                <FacebookIcon size={19} />
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-[color:var(--color-line)] min-h-[22rem] lg:min-h-0">
            <iframe
              title="Lokacija ordinacije na mapi"
              src={clinicInfo.mapEmbedUrl}
              className="w-full h-full min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
