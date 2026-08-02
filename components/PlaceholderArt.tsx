const VARIANTS = [
  "from-surface-container-high via-surface-container to-surface-container-low",
  "from-surface-container to-surface-container-lowest",
  "from-primary-fixed via-surface-container-high to-surface-container-low",
  "from-surface-container-low via-surface-container to-surface-container-high",
];

/**
 * A clean, dependency-free placeholder for project screenshots / photography.
 * Swap the <PlaceholderArt /> usages below for real <Image> components once
 * you have screenshots — everything else (aspect ratios, hover states) is
 * already wired up.
 */
export default function PlaceholderArt({
  label,
  variant = 0,
  dark = false,
}: {
  label: string;
  variant?: number;
  dark?: boolean;
}) {
  const initials = label
    .split(" ")
    .filter((w) => w.length > 0)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const gradient = VARIANTS[variant % VARIANTS.length];

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`grid-${label.replace(/\s+/g, "-")}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${label.replace(/\s+/g, "-")})`}
        />
      </svg>
      <span
        className={`font-display italic text-[20vw] md:text-[6rem] leading-none select-none ${
          dark ? "text-inverse-on-surface/10" : "text-primary/10"
        }`}
      >
        {initials}
      </span>
    </div>
  );
}
