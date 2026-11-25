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
  { href: "#galerija", label: "Galerija" },
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

  // Close the mobile menu with Escape, and if the screen grows to desktop width
  // (e.g. rotating a tablet) so the page never stays scroll-locked.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const scroll = () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    if (open) {
      // Let the scroll-lock release first, otherwise iOS Safari ignores the scroll.
      setOpen(false);
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  return (
    <>
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
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

    </header>

      {/* Mobile menu — deliberately a sibling of <header>, not a child: the header
          uses backdrop-blur, which would make this "fixed" panel size itself to the
          header instead of the screen. Sits below the header (z-40 < z-50) so the
          logo and the close button stay visible and tappable. */}
      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`lg:hidden fixed inset-0 z-40 overflow-y-auto bg-[color:var(--color-cream)] pt-28 sm:pt-36 pb-10 transition-all duration-300 ease-out ${
          open ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <ul className="container-page flex flex-col">
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
    </>
  );
}
