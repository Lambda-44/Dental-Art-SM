import { useEffect } from "react";
import { X, GraduationCap, Stethoscope, Clock, Languages, Phone } from "lucide-react";
import type { Doctor } from "../data/doctors";

export default function DoctorModal({
  doctor,
  onClose,
}: {
  doctor: Doctor;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
    >
      <button
        aria-label="Zatvori profil doktora"
        onClick={onClose}
        className="absolute inset-0 bg-[color:var(--color-ink)]/60 backdrop-blur-sm"
      />
      <div className="relative bg-[color:var(--color-cream)] w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[90vh] overflow-y-auto shadow-[var(--shadow-soft)] fade-up">
        <button
          onClick={onClose}
          aria-label="Zatvori"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[color:var(--color-cream)] border border-[color:var(--color-line)] flex items-center justify-center hover:bg-[color:var(--color-sand)] transition-colors"
        >
          <X size={18} />
        </button>

        <div className="h-72 sm:h-96 bg-[color:var(--color-sand)]">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-full h-full object-contain sm:rounded-t-3xl"
          />
        </div>

        <div className="p-6 sm:p-9">
          <h3 id="doctor-modal-title" className="font-display text-2xl sm:text-3xl font-medium text-[color:var(--color-ink)]">
            {doctor.name}
          </h3>
          <p className="text-[color:var(--color-teal)] font-medium mt-1">{doctor.title}</p>
          <p className="text-sm text-[color:var(--color-ink-soft)] mt-0.5">{doctor.specialization}</p>

          <p className="mt-5 text-[color:var(--color-ink-soft)] leading-relaxed">{doctor.bio}</p>

          <div className="mt-7 grid sm:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)]">
                <GraduationCap size={16} className="text-[color:var(--color-gold)]" /> Obrazovanje
              </div>
              <ul className="mt-2 space-y-1.5">
                {doctor.education.map((item) => (
                  <li key={item} className="text-sm text-[color:var(--color-ink-soft)] leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)]">
                <Stethoscope size={16} className="text-[color:var(--color-gold)]" /> Oblasti rada
              </div>
              <ul className="mt-2 space-y-1.5">
                {doctor.focusAreas.map((item) => (
                  <li key={item} className="text-sm text-[color:var(--color-ink-soft)] leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)]">
                <Clock size={16} className="text-[color:var(--color-gold)]" /> Iskustvo
              </div>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{doctor.experience}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)]">
                <Languages size={16} className="text-[color:var(--color-gold)]" /> Jezici
              </div>
              <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">{doctor.languages.join(", ")}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)]">
                <Phone size={16} className="text-[color:var(--color-gold)]" /> Direktan kontakt
              </div>
              <a
                href={doctor.phone.href}
                className="mt-2 block text-sm text-[color:var(--color-teal)] font-medium hover:text-[color:var(--color-teal-deep)] transition-colors"
              >
                {doctor.phone.display}
              </a>
            </div>
          </div>

          <a
            href={doctor.phone.href}
            className="btn btn-primary mt-8 w-full sm:w-auto"
          >
            Pozovite {doctor.name.split(" ")[0]}
          </a>
        </div>
      </div>
    </div>
  );
}
