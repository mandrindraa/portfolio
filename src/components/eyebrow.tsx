import clsx from "clsx";

export function Eyebrow({
  children,
  className,
  tone = "secondary",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "secondary" | "muted";
}) {
  return (
    <span
      className={clsx(
        "text-label-caps uppercase",
        tone === "secondary" ? "text-secondary" : "text-on-surface-variant",
        className,
      )}
    >
      {children}
    </span>
  );
}
