import type { ProjectGlyphVariant } from "@/lib/projects";

interface ProjectGlyphProps {
  variant: ProjectGlyphVariant;
  className?: string;
}

/**
 * Abstract, blueprint-style diagrams standing in for project screenshots.
 * Every stroke uses currentColor so it inherits the surrounding text tone;
 * the accent node/path is tinted via the `accent` class utility on <g>.
 */
export function ProjectGlyph({ variant, className }: ProjectGlyphProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="399"
        height="299"
        className="stroke-outline-variant"
      />
      {variant === "cluster" && <ClusterGlyph />}
      {variant === "terminal" && <TerminalGlyph />}
      {variant === "grid" && <GridGlyph />}
      {variant === "tenants" && <TenantsGlyph />}
      {variant === "shield" && <ShieldGlyph />}
      {variant === "flag" && <FlagGlyph />}
    </svg>
  );
}

/** Grind v2 — three coordinated apps around a shared data core */
function ClusterGlyph() {
  return (
    <g strokeWidth="1.25" className="stroke-on-surface-variant">
      <rect x="40" y="50" width="90" height="56" rx="2" />
      <rect x="270" y="50" width="90" height="56" rx="2" />
      <rect x="155" y="150" width="90" height="56" rx="2" />
      <rect x="184" y="228" width="32" height="32" rx="2" className="stroke-secondary" />
      <path d="M85 106 V150 M315 106 V150 M130 178 H155 M245 178 H270 V150" />
      <path d="M200 206 V228" className="stroke-secondary" />
      <circle cx="85" cy="78" r="3" className="fill-on-surface-variant" />
      <circle cx="315" cy="78" r="3" className="fill-on-surface-variant" />
      <circle cx="200" cy="178" r="3" className="fill-secondary" />
    </g>
  );
}

/** llm2sh — a terminal turning language into a command */
function TerminalGlyph() {
  return (
    <g strokeWidth="1.25" className="stroke-on-surface-variant">
      <rect x="56" y="70" width="288" height="160" rx="3" />
      <path d="M56 96 H344" />
      <circle cx="74" cy="83" r="2.5" className="fill-on-surface-variant" />
      <circle cx="86" cy="83" r="2.5" className="fill-on-surface-variant" />
      <circle cx="98" cy="83" r="2.5" className="fill-on-surface-variant" />
      <path d="M80 122 L104 138 L80 154" className="stroke-secondary" strokeWidth="1.5" />
      <path d="M116 154 H176" strokeWidth="1.5" />
      <path d="M80 176 H260" strokeDasharray="2 6" />
      <path d="M80 194 H210" strokeDasharray="2 6" />
      <rect x="285" y="140" width="40" height="18" className="stroke-secondary" strokeWidth="1.5" />
    </g>
  );
}

/** Masterclass — attendance / grading grid */
function GridGlyph() {
  const cells = Array.from({ length: 5 }, (_, r) =>
    Array.from({ length: 7 }, (_, c) => ({ r, c })),
  ).flat();
  return (
    <g strokeWidth="1" className="stroke-on-surface-variant">
      {cells.map(({ r, c }) => {
        const x = 60 + c * 40;
        const y = 60 + r * 36;
        const marked = (r * 7 + c) % 6 === 0;
        return (
          <g key={`${r}-${c}`}>
            <rect x={x} y={y} width="32" height="28" />
            {marked && (
              <path
                d={`M${x + 8} ${y + 14} l6 7 l12 -15`}
                className="stroke-secondary"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </g>
        );
      })}
    </g>
  );
}

/** IOMAD — root tenant branching into isolated instances */
function TenantsGlyph() {
  return (
    <g strokeWidth="1.25" className="stroke-on-surface-variant">
      <rect x="168" y="46" width="64" height="40" rx="2" className="stroke-secondary" />
      <path d="M200 86 V116 M200 116 H90 M200 116 H200 M200 116 H310 M90 116 V140 M200 116 V140 M310 116 V140" />
      <rect x="58" y="140" width="64" height="40" rx="2" />
      <rect x="168" y="140" width="64" height="40" rx="2" />
      <rect x="278" y="140" width="64" height="40" rx="2" />
      <path d="M90 180 V204 M200 180 V204 M310 180 V204" strokeDasharray="2 5" />
      <rect x="66" y="204" width="48" height="26" rx="2" />
      <rect x="176" y="204" width="48" height="26" rx="2" />
      <rect x="286" y="204" width="48" height="26" rx="2" />
    </g>
  );
}

/** CMIL — proxy shield in front of a media flow */
function ShieldGlyph() {
  return (
    <g strokeWidth="1.25" className="stroke-on-surface-variant">
      <path
        d="M200 44 L266 66 V132 C266 176 238 206 200 220 C162 206 134 176 134 132 V66 Z"
        className="stroke-secondary"
      />
      <path d="M178 130 L194 148 L226 110" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 240 H150 M170 240 H230 M250 240 H340" strokeDasharray="2 6" />
      <circle cx="60" cy="240" r="3" className="fill-on-surface-variant" />
      <circle cx="340" cy="240" r="3" className="fill-on-surface-variant" />
    </g>
  );
}

/** PRODIGY CTF — network graph converging on a captured flag node */
function FlagGlyph() {
  const nodes = [
    [70, 70],
    [140, 50],
    [230, 60],
    [320, 90],
    [60, 160],
    [150, 190],
    [260, 200],
    [330, 170],
    [200, 130],
  ];
  return (
    <g strokeWidth="1.1" className="stroke-on-surface-variant">
      <path d="M70 70 L200 130 M140 50 L200 130 M230 60 L200 130 M320 90 L200 130 M60 160 L200 130 M150 190 L200 130 M260 200 L200 130 M330 170 L200 130" />
      {nodes.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" className="fill-on-surface-variant" />
      ))}
      <circle cx="200" cy="130" r="6" className="fill-secondary stroke-secondary" />
      <path
        d="M200 108 V150 M200 108 L222 116 L200 124"
        className="stroke-secondary"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </g>
  );
}
