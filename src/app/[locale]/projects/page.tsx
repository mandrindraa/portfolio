import { Eyebrow } from "@/components/eyebrow";
import { ProjectCard } from "@/components/project-card";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.projects" });
  return { title: t("title"), description: t("description") };
}

export default async function ProjectsPage() {
  const t = await getTranslations("projects");

  return (
    <>
      <section className="container-max px-page mx-auto flex flex-col gap-8 pb-20 pt-20 md:pt-28">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-primary md:text-display">
          {t("title")}
        </h1>
        <p className="max-w-xl text-body-lg text-on-surface-variant">
          {t("subhead")}
        </p>
      </section>

      <section className="container-max px-page mx-auto grid grid-cols-1 gap-x-10 gap-y-20 pb-24 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="grid" />
        ))}
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="container-max px-page mx-auto flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-headline-lg text-primary">
              {t("ctaTitle")}
            </h2>
            <p className="max-w-md text-body-lg text-on-surface-variant">
              {t("ctaBody")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3 text-label-md text-on-primary transition-opacity hover:opacity-85"
            >
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-outline px-7 py-3 text-label-md text-on-surface transition-colors hover:border-on-surface"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
