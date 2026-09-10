import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinicInfo } from "../data/clinicInfo";
import logo from "../assets/logo.jpeg";

const links = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#usluge", label: "Usluge" },
  { href: "#doktori", label: "Doktori" },
  { href: "#cjenovnik", label: "Cjenovnik" },
  // { href: "#galerija", label: "Galerija" }, // privremeno isključeno — vraća se s Gallery sekcijom
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[color:var(--color-cream)]/95 backdrop-blur-sm border-b border-[color:var(--color-line)] shadow-[0_4px_24px_-12px_rgba(22,35,43,0.15)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Glavna navigacija"
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-20 sm:h-[5.5rem]" : "h-24 sm:h-32"
        }`}
      >
        <a
          href="#pocetna"
          onClick={(e) => handleNavClick(e, "#pocetna")}
          className="flex items-center gap-2.5"
        >
          <img
            src={logo}
            alt={`${clinicInfo.name} logo`}
            className={`rounded-full object-cover transition-all duration-300 ${
              scrolled ? "w-14 h-14 sm:w-16 sm:h-16" : "w-16 h-16 sm:w-20 sm:h-20"
            }`}
          />
          <span className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[color:var(--color-ink)] leading-tight">
            {clinicInfo.shortName}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[0.95rem] font-medium text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-teal)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={clinicInfo.phoneHref}
            className="flex items-center gap-2 text-[0.95rem] font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-teal)] transition-colors"
          >
            <Phone size={17} strokeWidth={2} />
            {clinicInfo.phoneDisplay}
          </a>
          <a
            href="#kontakt"
            onClick={(e) => handleNavClick(e, "#kontakt")}
            className="btn btn-primary"
          >
            Kontaktirajte nas
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-[color:var(--color-ink)]"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[color:var(--color-cream)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="h-24 sm:h-32" />
        <ul className="container-page flex flex-col gap-1 pt-6">
          {links.map((link) => (
            <li key={link.href} className="border-b border-[color:var(--color-line)]">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-4 text-lg font-display text-[color:var(--color-ink)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-page mt-8 flex flex-col gap-3">
          <a href={clinicInfo.phoneHref} className="btn btn-secondary w-full">
            <Phone size={17} /> {clinicInfo.phoneDisplay}
          </a>
          <a
            href="#kontakt"
            onClick={(e) => handleNavClick(e, "#kontakt")}
            className="btn btn-primary w-full"
          >
            Kontaktirajte nas
          </a>
        </div>
      </div>
    </header>
  );
}
