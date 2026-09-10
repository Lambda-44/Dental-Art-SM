type SmileMarkProps = {
  className?: string;
  color?: string;
};

/**
 * A confident, hand-drawn smile-curve stroke — the site's signature motif.
 * Used sparingly beneath key headings to tie every section back to the
 * clinic's core idea without resorting to generic underline bars.
 */
export default function SmileMark({ className = "", color = "var(--color-gold)" }: SmileMarkProps) {
  return (
    <svg
      viewBox="0 0 220 24"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M3 4C34 22 84 22 110 13C138 4 182 3 217 15"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
