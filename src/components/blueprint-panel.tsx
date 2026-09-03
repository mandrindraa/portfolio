export function BlueprintPanel({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 600"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="479" height="599" className="stroke-outline-variant" />

      {/* fine background grid */}
      <g className="stroke-outline-variant" strokeWidth="0.5" opacity="0.5">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="600" />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} />
        ))}
      </g>

      {/* structural frame, echoing a floor-plan / system diagram */}
      <g strokeWidth="1.25" className="stroke-on-surface-variant">
        <rect x="72" y="96" width="336" height="408" />
        <path d="M72 240 H408 M72 384 H408 M240 96 V504" />
        <rect x="120" y="144" width="72" height="48" className="stroke-secondary" strokeWidth="1.5" />
        <circle cx="156" cy="168" r="3" className="fill-secondary" />
        <path d="M156 192 V240" />
        <rect x="288" y="288" width="72" height="48" />
        <path d="M324 336 V384" />
        <path d="M120 432 H192 M120 456 H168" strokeDasharray="2 6" />
      </g>

      {/* corner annotations */}
      <g className="fill-on-surface-variant text-[10px] tracking-[0.15em] uppercase">
        <text x="24" y="32">SYS.04</text>
        <text x="336" y="580">REV 2026</text>
      </g>
      <g strokeWidth="1" className="stroke-outline">
        <path d="M24 44 H64 M24 44 V64" />
        <path d="M456 556 H416 M456 556 V536" />
      </g>
    </svg>
  );
}
