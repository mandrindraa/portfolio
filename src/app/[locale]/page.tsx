import { BlueprintPanel } from "@/components/blueprint-panel";
import { Eyebrow } from "@/components/eyebrow";
import { ProjectCard } from "@/components/project-card";
import { Link } from "@/i18n/navigation";
import { homeProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

const richComponents = {
  i: (chunks: React.ReactNode) => (
    <em className="font-normal italic">{chunks}</em>
  ),
};

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <>
      {/* Hero */}
      <section className="container-max px-page mx-auto flex flex-col gap-10 pb-24 pt-20 md:pt-28">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-primary sm:text-5xl md:text-display">
          {t.rich("headline", richComponents)}
        </h1>
        <p className="max-w-xl text-body-lg text-on-surface-variant">
          {t("subhead")}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
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
      </section>

      {/* Selected Systems */}
      <section className="container-max px-page mx-auto py-20">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>{t("systemsEyebrow")}</Eyebrow>
            <h2 className="font-display text-headline-lg text-primary">
              {t("systemsTitle")}
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-label-md text-on-surface-variant underline decoration-outline-variant underline-offset-4 transition-colors hover:text-on-surface hover:decoration-on-surface"
          >
            {t("systemsLink")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          {homeProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="home"
              className={
                project.homeSpan >= 8
                  ? "md:col-span-8"
                  : project.homeSpan >= 6
                    ? "md:col-span-6"
                    : "md:col-span-4"
              }
            />
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-max px-page mx-auto grid grid-cols-1 items-center gap-16 py-24 md:grid-cols-2">
        <BlueprintPanel className="w-full text-on-surface-variant" />
        <div className="flex flex-col gap-8">
          <h2 className="font-display text-headline-lg text-primary">
            {t("philosophyTitle")}
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            {t("philosophyBody")}
          </p>
          <div className="flex flex-col gap-6 border-t border-outline-variant pt-8">
            <div className="flex gap-4">
              <span className="text-label-caps text-secondary">01</span>
              <div>
                <h3 className="mb-1 text-label-caps text-primary">
                  {t("principle1Title")}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {t("principle1Body")}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-label-caps text-secondary">02</span>
              <div>
                <h3 className="mb-1 text-label-caps text-primary">
                  {t("principle2Title")}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {t("principle2Body")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface-container-low py-28">
        <div className="container-max px-page mx-auto flex flex-col items-center gap-8 text-center">
          <Eyebrow>{t("ctaEyebrow")}</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.1] text-primary md:text-headline-lg">
            {t.rich("ctaHeadline", richComponents)}
          </h2>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-display text-headline-md text-secondary underline decoration-secondary/40 underline-offset-8 transition-colors hover:decoration-secondary"
          >
            {siteConfig.email}
          </a>
        </div>
      </section>
    </>
  );
}
