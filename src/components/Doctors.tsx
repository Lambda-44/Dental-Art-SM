import { useState } from "react";
import { doctors, type Doctor } from "../data/doctors";
import SectionHeading from "./SectionHeading";
import DoctorModal from "./DoctorModal";
import { useReveal } from "../lib/useReveal";

function DoctorCard({ doctor, onOpen, index }: { doctor: Doctor; onOpen: () => void; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group rounded-[1.75rem] bg-[color:var(--color-cream-soft)] border border-[color:var(--color-line)] overflow-hidden flex flex-col sm:flex-row ${
        visible ? "fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="p-7 sm:p-8 flex flex-col justify-center sm:w-3/5">
        <p className="eyebrow mb-2">{doctor.specialization}</p>
        <h3 className="font-display text-2xl font-medium text-[color:var(--color-ink)]">{doctor.name}</h3>
        <p className="text-sm text-[color:var(--color-ink-soft)] mt-1">{doctor.title}</p>
        <p className="mt-4 text-sm text-[color:var(--color-ink-soft)] leading-relaxed line-clamp-3">
          {doctor.bio}
        </p>
        <button
          onClick={onOpen}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-teal)] w-fit border-b border-[color:var(--color-teal)] pb-0.5 hover:gap-3 transition-all"
        >
          Pogledaj profil
        </button>
      </div>
    </div>
  );
}

export default function Doctors() {
  const [active, setActive] = useState<Doctor | null>(null);

  return (
    <section id="doktori" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Ljudi iza osmijeha"
          title="Naš tim"
          subtitle="Stručnost, iskustvo i posvećenost svakom pacijentu."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {doctors.map((doctor, i) => (
            <DoctorCard key={doctor.id} doctor={doctor} onOpen={() => setActive(doctor)} index={i} />
          ))}
        </div>
      </div>

      {active && <DoctorModal doctor={active} onClose={() => setActive(null)} />}
    </section>
  );
}
