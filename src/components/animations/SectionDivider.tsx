"use client";

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
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 lg:h-20 block"
        style={{ transform: flip ? "scaleY(-1)" : undefined }}
      >
        {/* Background fill matching top section */}
        <rect width="1440" height="80" fill={from} />
        {/* Curved transition to bottom section */}
        <path
          d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
