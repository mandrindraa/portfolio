"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";
import PlaceholderArt from "@/components/PlaceholderArt";

export default function HomePage() {
  const { t } = useLanguage();
  const selected = t.projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] pt-24 pb-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden flex items-center"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(239,237,240,0.6) 0%, rgba(251,249,252,1) 65%)",
        }}
      >
        <div className="max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-secondary mb-6 uppercase tracking-widest block">
            {t.home.eyebrow}
          </span>
          <h1 className="font-display text-[40px] leading-[46px] md:text-display text-primary mb-8 max-w-4xl">
            {t.home.headlinePrefix}{" "}
            <span className="italic font-normal">
              {t.home.headlineItalic}
            </span>{" "}
            {t.home.headlineSuffix}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
            {t.home.paragraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/projects"
              className="bg-primary text-on-primary px-10 py-5 rounded-DEFAULT font-label-md text-label-md hover:bg-secondary transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              {t.home.ctaPrimary}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/about"
              className="border border-primary text-primary px-10 py-5 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container transition-colors duration-300 text-center"
            >
              {t.home.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden lg:block opacity-20 pointer-events-none">
          <span className="font-display text-[140px] leading-none select-none">
            {t.home.watermark}
          </span>
        </div>
      </section>

      {/* Selected Systems */}
      <section className="py-32 md:py-40 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <Reveal>
            <div className="flex justify-between items-end mb-16 md:mb-20">
              <div>
                <span className="font-label-caps text-label-caps text-on-surface-variant mb-4 block uppercase">
                  {t.home.selectedEyebrow}
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                  {t.home.selectedTitle}
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline font-label-md text-label-md text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors pb-1"
              >
                {t.home.selectedLink}
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Project 1: Large */}
            <Reveal className="md:col-span-8 group cursor-pointer">
              <Link href="/projects">
                <div className="aspect-[16/9] overflow-hidden bg-surface-container mb-6">
                  <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                    <PlaceholderArt label={selected[0].title} variant={0} />
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {selected[0].category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mt-2">
                  {selected[0].title}
                </h3>
              </Link>
            </Reveal>

            {/* Project 2: Small */}
            <Reveal
              className="md:col-span-4 group cursor-pointer pt-0 md:pt-20"
              delay={100}
            >
              <Link href="/projects">
                <div className="aspect-[4/5] overflow-hidden bg-surface-container mb-6">
                  <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                    <PlaceholderArt label={selected[1].title} variant={1} />
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {selected[1].category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mt-2">
                  {selected[1].title}
                </h3>
              </Link>
            </Reveal>

            {/* Project 3: Medium */}
            <Reveal className="md:col-span-6 group cursor-pointer">
              <Link href="/projects">
                <div className="aspect-square overflow-hidden bg-surface-container mb-6">
                  <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                    <PlaceholderArt label={selected[2].title} variant={2} />
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {selected[2].category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mt-2">
                  {selected[2].title}
                </h3>
              </Link>
            </Reveal>

            {/* Project 4: Medium */}
            <Reveal
              className="md:col-span-6 group cursor-pointer md:mt-[-40px]"
              delay={100}
            >
              <Link href="/projects">
                <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6">
                  <div className="w-full h-full group-hover:scale-102 transition-transform duration-700">
                    <PlaceholderArt label={selected[3].title} variant={3} />
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {selected[3].category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mt-2">
                  {selected[3].title}
                </h3>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 md:py-40 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-y border-surface-variant/40">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          <Reveal className="relative">
            <div className="aspect-[3/4] bg-surface-container relative z-10 overflow-hidden">
              <PlaceholderArt label="Mandrindra" variant={2} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-secondary/20 z-0 hidden lg:block" />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 md:mb-10 text-primary">
              {t.home.philosophyTitle}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              {t.home.philosophyParagraph}
            </p>
            <div className="space-y-6">
              {t.home.pillars.map((pillar) => (
                <div key={pillar.number} className="flex items-start gap-4">
                  <span className="font-label-caps text-label-caps text-secondary pt-1">
                    {pillar.number}
                  </span>
                  <div>
                    <h4 className="font-label-md text-label-md font-bold mb-1 uppercase">
                      {pillar.title}
                    </h4>
                    <p className="text-on-surface-variant opacity-80 font-body-md text-body-md">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 md:py-40 px-margin-mobile md:px-margin-desktop text-center">
        <Reveal className="max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps text-secondary mb-8 block uppercase">
            {t.home.ctaEyebrow}
          </span>
          <h2 className="font-display text-[36px] md:text-[64px] leading-tight md:leading-none text-primary mb-16">
            {t.home.ctaTitlePrefix}{" "}
            <span className="italic font-normal">
              {t.home.ctaTitleItalic}
            </span>{" "}
            {t.home.ctaTitleSuffix}
          </h2>
          <a
            href={`mailto:${t.home.ctaEmail}`}
            className="inline-block font-headline-md text-headline-md text-primary border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all pb-2"
          >
            {t.home.ctaEmail}
          </a>
        </Reveal>
      </section>
    </>
  );
}
