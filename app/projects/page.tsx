"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";
import PlaceholderArt from "@/components/PlaceholderArt";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [featured, ...rest] = t.projects;
  const [row2a, row2b, ...grid3] = rest;

  return (
    <>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-16 md:pb-24">
        <Reveal className="max-w-3xl">
          <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-[0.2em]">
            {t.projectsPage.eyebrow}
          </p>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary leading-tight mb-8">
            {t.projectsPage.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {t.projectsPage.paragraph}
          </p>
        </Reveal>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 md:gap-x-gutter">
          {/* Featured, full width */}
          <Reveal className="md:col-span-12">
            <div className="group block">
              <div className="relative overflow-hidden mb-6 bg-surface-container-low aspect-[21/9]">
                <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                  <PlaceholderArt label={featured.title} variant={0} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <span className="font-label-caps text-label-caps text-secondary mb-2 block uppercase">
                    {featured.category}
                  </span>
                  <h2 className="font-display text-headline-md text-primary mb-2">
                    {featured.title}
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  {featured.description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Two medium cards */}
          <Reveal className="md:col-span-6">
            <div className="group block">
              <div className="relative overflow-hidden mb-6 bg-surface-container-low aspect-[4/5]">
                <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                  <PlaceholderArt label={row2a.title} variant={1} />
                </div>
              </div>
              <span className="font-label-caps text-label-caps text-secondary mb-2 block uppercase">
                {row2a.category}
              </span>
              <h2 className="font-display text-headline-md text-primary mb-2">
                {row2a.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {row2a.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6" delay={100}>
            <div className="group block">
              <div className="relative overflow-hidden mb-6 bg-surface-container-low aspect-[4/5]">
                <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                  <PlaceholderArt label={row2b.title} variant={2} />
                </div>
              </div>
              <span className="font-label-caps text-label-caps text-secondary mb-2 block uppercase">
                {row2b.category}
              </span>
              <h2 className="font-display text-headline-md text-primary mb-2">
                {row2b.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {row2b.description}
              </p>
            </div>
          </Reveal>

          {/* Three small cards */}
          {grid3.map((project, i) => (
            <Reveal
              key={project.slug}
              className="md:col-span-4"
              delay={i * 100}
            >
              <div className="group block">
                <div className="relative overflow-hidden mb-4 bg-surface-container-low aspect-square">
                  <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                    <PlaceholderArt label={project.title} variant={i + 1} />
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-secondary mb-1 block uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-headline-md text-primary text-[22px] md:text-[24px] mb-2">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {project.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 md:mt-40 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32 bg-surface-container-low border-y border-surface-variant/40">
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
              {t.projectsPage.ctaTitle}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t.projectsPage.ctaParagraph}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 shrink-0">
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-10 py-4 font-label-md text-label-md hover:bg-secondary transition-all duration-300 text-center rounded-DEFAULT"
            >
              {t.projectsPage.ctaPrimary}
            </Link>
            <a
              href="https://github.com/mandrindraa"
              target="_blank"
              rel="noreferrer"
              className="border border-primary text-primary px-10 py-4 font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all duration-300 text-center rounded-DEFAULT"
            >
              {t.projectsPage.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
