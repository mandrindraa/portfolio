"use client";

import Link from "next/link";
import { Code2, Server, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";
import PlaceholderArt from "@/components/PlaceholderArt";

const ICONS: Record<string, typeof Code2> = {
  code: Code2,
  dns: Server,
  handyman: Wrench,
};

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-16 md:pb-24">
        <Reveal>
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase">
            {t.about.eyebrow}
          </span>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-primary leading-tight max-w-4xl">
            {t.about.headlinePrefix}{" "}
            <span className="italic font-normal">
              {t.about.headlineItalic}
            </span>
            .
          </h1>
        </Reveal>
      </section>

      {/* Bio */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-gutter items-start">
          <Reveal className="md:col-span-5 order-2 md:order-1">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-lg">
              <PlaceholderArt label="Mandrindra" variant={1} />
            </div>
          </Reveal>
          <Reveal
            className="md:col-span-6 md:col-start-7 order-1 md:order-2 flex flex-col justify-center h-full"
            delay={150}
          >
            <h2 className="font-headline-md text-headline-md text-primary mb-8">
              {t.about.bioHeadline}
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
              {t.about.bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-surface-container-low py-24 md:py-32 mb-32 md:mb-40">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <Reveal className="mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase">
              {t.about.skillsEyebrow}
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              {t.about.skillsTitle}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.skillGroups.map((group, i) => {
              const Icon = ICONS[group.icon] ?? Code2;
              return (
                <Reveal key={group.title} delay={i * 100}>
                  <div className="p-8 bg-surface-container-lowest border border-surface-variant/40 rounded-lg group hover:border-primary/30 transition-all h-full">
                    <Icon className="text-secondary mb-6" size={28} strokeWidth={1.5} />
                    <h3 className="font-headline-md text-headline-md text-primary mb-4">
                      {group.title}
                    </h3>
                    <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32 md:mb-40">
        <Reveal>
          <div className="relative w-full min-h-[420px] md:h-[500px] rounded-xl overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-primary z-0">
              <div className="w-full h-full opacity-60">
                <PlaceholderArt label="Quote" variant={3} dark />
              </div>
            </div>
            <div className="relative z-10 text-center max-w-2xl py-12">
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-primary mb-8 italic">
                &ldquo;{t.about.quote}&rdquo;
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80">
                {t.about.quoteParagraph}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32 md:mb-40">
        <Reveal className="border-t border-surface-variant pt-20 md:pt-24 text-center">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-12">
            {t.about.ctaTitle}
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 group"
          >
            <span className="font-display text-headline-lg-mobile md:text-headline-lg text-primary underline underline-offset-8 decoration-1 group-hover:text-secondary transition-colors">
              {t.about.ctaLink}
            </span>
            <ArrowRight
              className="text-primary group-hover:text-secondary group-hover:translate-x-2 transition-all"
              size={36}
            />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
