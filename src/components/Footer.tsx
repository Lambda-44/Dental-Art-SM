import { Phone, Mail, MapPin } from "lucide-react";
import { clinicInfo } from "../data/clinicInfo";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import logo from "../assets/logo.jpeg";

const nav = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#usluge", label: "Usluge" },
  { href: "#doktori", label: "Doktori" },
  { href: "#cjenovnik", label: "Cjenovnik" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

const serviceLinks = [
  "Preventivna stomatologija",
  "Konzervativna stomatologija",
  "Protetika",
  "Estetska stomatologija",
  "Hitna stomatološka pomoć",
];

export default function Footer() {
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-cream-soft)]">
      <div className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="#pocetna" onClick={scrollTo("#pocetna")} className="flex items-center gap-2.5">
            <img src={logo} alt={`${clinicInfo.name} logo`} className="w-14 h-14 rounded-full object-cover" />
            <span className="font-display text-xl font-medium text-[color:var(--color-cream)]">
              {clinicInfo.shortName}
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-cream-soft)]/70 max-w-xs">
            {clinicInfo.name} je privatna stomatološka ordinacija posvećena modernoj njezi i
            individualnom pristupu svakom pacijentu.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a href={clinicInfo.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-gold)] transition-colors">
              <InstagramIcon size={18} />
            </a>
            <a href={clinicInfo.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:text-[color:var(--color-gold)] transition-colors">
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[color:var(--color-cream)] uppercase tracking-wide">
            Navigacija
          </h4>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={scrollTo(item.href)} className="text-sm text-[color:var(--color-cream-soft)]/70 hover:text-[color:var(--color-cream)] transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[color:var(--color-cream)] uppercase tracking-wide">
            Usluge
          </h4>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#usluge" onClick={scrollTo("#usluge")} className="text-sm text-[color:var(--color-cream-soft)]/70 hover:text-[color:var(--color-cream)] transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[color:var(--color-cream)] uppercase tracking-wide">
            Kontakt
          </h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-[color:var(--color-cream-soft)]/70">
              <MapPin size={15} className="mt-0.5 shrink-0" /> {clinicInfo.address}
            </li>
            {clinicInfo.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex items-center gap-2.5 text-sm text-[color:var(--color-cream-soft)]/70 hover:text-[color:var(--color-cream)] transition-colors">
                  <Phone size={15} /> {p.display} <span className="text-[color:var(--color-cream-soft)]/45">({p.label.split(" ")[0]})</span>
                </a>
              </li>
            ))}
            <li>
              <a href={clinicInfo.emailHref} className="flex items-center gap-2.5 text-sm text-[color:var(--color-cream-soft)]/70 hover:text-[color:var(--color-cream)] transition-colors break-all">
                <Mail size={15} /> {clinicInfo.emailDisplay}
              </a>
            </li>
          </ul>
          <ul className="mt-4 space-y-1 text-sm text-[color:var(--color-cream-soft)]/70">
            {clinicInfo.workingHours.map((h) => (
              <li key={h.label} className="flex justify-between max-w-[13rem]">
                <span>{h.label}</span>
                <span>{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-cream)]/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[color:var(--color-cream-soft)]/50">
          <p>© 2026 {clinicInfo.name}. Sva prava zadržana.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[color:var(--color-cream-soft)] transition-colors">
              Politika privatnosti
            </a>
            <a href="#" className="hover:text-[color:var(--color-cream-soft)] transition-colors">
              Uslovi korištenja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
