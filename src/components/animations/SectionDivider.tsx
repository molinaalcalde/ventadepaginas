interface SectionDividerProps {
  /** Top section background color (Tailwind CSS variable or hex) */
  from?: string;
  /** Bottom section background color */
  to?: string;
  /** Flip the curve direction */
  flip?: boolean;
  className?: string;
}

export function SectionDivider({
  from = "var(--color-surface-soft)",
  to = "white",
  flip = false,
  className = "",
}: SectionDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ marginTop: -1, marginBottom: -1 }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10 lg:h-12 block"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        {/* Background fill matching top section */}
        <rect width="1440" height="48" fill={from} />
        {/* Gentle curved transition to bottom section */}
        <path
          d="M0,12 C480,48 960,48 1440,12 L1440,48 L0,48 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
