import SmileMark from "./SmileMark";
import { useReveal } from "../lib/useReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  underline?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  underline = false,
}: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${
        visible ? "fade-up" : "opacity-0"
      }`}
    >
      <p className={`eyebrow mb-3 ${light ? "text-[color:var(--color-gold-tint)]" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`inline-block max-w-full text-[2rem] sm:text-[2.5rem] leading-[1.1] font-medium ${
          light ? "text-[color:var(--color-cream)]" : "text-[color:var(--color-ink)]"
        }`}
      >
        {title}
        {underline && <SmileMark className="block w-full h-3 mt-1.5" />}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-[color:var(--color-cream-soft)]/80" : "text-[color:var(--color-ink-soft)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
