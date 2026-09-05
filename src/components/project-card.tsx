import type { Project } from "@/lib/projects";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { ProjectGlyph } from "./project-glyph";

interface ProjectCardProps {
  project: Project;
  /** "home" renders the compact bento treatment, "grid" the full listing card */
  variant?: "home" | "grid";
  className?: string;
}

export function ProjectCard({
  project,
  variant = "grid",
  className,
}: ProjectCardProps) {
  const locale = useLocale() as "en" | "fr";
  const t = useTranslations("projects");

  return (
    <article className={clsx("group", className)}>
      <div
        className={clsx(
          "relative mb-6 overflow-hidden bg-surface-container-low",
          variant === "home" ? "aspect-4/3" : "aspect-16/10",
        )}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title[locale]}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        )}
        {!project.image && project.glyph && (
          <ProjectGlyph variant={project.glyph} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-label-caps text-secondary">
            {project.category[locale]} &middot; {project.year}
          </span>
          <span className="text-label-caps text-on-surface-variant">
            {project.status[locale]}
          </span>
        </div>
        <h3 className="font-display text-headline-md text-primary">
          {project.title[locale]}
        </h3>
        <p className="text-body-md text-on-surface-variant">
          {variant === "home"
            ? project.summary[locale]
            : project.description[locale]}
        </p>
        {variant === "grid" && (
          <ul className="mt-1 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="text-label-caps text-on-surface-variant"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-flex w-fit items-center gap-1.5 text-label-md text-on-surface underline decoration-outline-variant underline-offset-4 transition-colors hover:text-secondary hover:decoration-secondary"
          >
            {t("viewRepo")}
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        )}
      </div>
    </article>
  );
}
