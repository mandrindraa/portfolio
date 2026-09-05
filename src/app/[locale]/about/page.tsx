import { BlueprintPanel } from "@/components/blueprint-panel";
import { Eyebrow } from "@/components/eyebrow";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.about" });
  return { title: t("title"), description: t("description") };
}

const richComponents = {
  i: (chunks: React.ReactNode) => (
    <em className="font-normal italic">{chunks}</em>
  ),
};

const skillGroups = [
  {
    titleKey: "skillsCol1Title" as const,
    items: ["TS / JS", "Python", "Next.js / React", "PostgreSQL", "MongoDB"],
  },
  {
    titleKey: "skillsCol2Title" as const,
    items: ["Docker", "CI/CD (GitHub Actions)", "IaC", "Linux"],
  },
  {
    titleKey: "skillsCol3Title" as const,
    items: [
      "Git & GitHub",
      "Turborepo Monorepos",
      "Async APIs & Testing",
      "Agile",
    ],
  },
];

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <>
      <section className="container-max px-page mx-auto flex flex-col gap-8 pb-20 pt-20 md:pt-28">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-primary md:text-display">
          {t.rich("headline", richComponents)}
        </h1>
      </section>

      <section className="container-max px-page mx-auto grid grid-cols-1 gap-16 pb-24 md:grid-cols-2">
        <BlueprintPanel className="w-full text-on-surface-variant" />
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-headline-md text-primary">
            {t("introTitle")}
          </h2>
          <p className="text-body-lg text-on-surface-variant">{t("bioP1")}</p>
          <p className="text-body-lg text-on-surface-variant">{t("bioP2")}</p>
          <p className="text-body-lg text-on-surface-variant">{t("bioP3")}</p>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="container-max px-page mx-auto flex flex-col gap-14">
          <div className="flex flex-col gap-3">
            <Eyebrow>{t("skillsEyebrow")}</Eyebrow>
            <h2 className="font-display text-headline-lg text-primary">
              {t("skillsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.titleKey}
                className="flex flex-col gap-5 bg-surface-container-lowest p-8"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <h3 className="font-display text-headline-md text-primary">
                  {t(group.titleKey)}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-body-md text-on-surface-variant"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-max px-page mx-auto py-24">
        <div className="bg-primary px-10 py-16 text-center md:px-20 md:py-20">
          <p className="mx-auto max-w-3xl font-display text-2xl italic leading-snug text-on-primary md:text-headline-lg">
            &ldquo;{t("philosophyQuote")}&rdquo;
          </p>
          <p className="mx-auto mt-6 max-w-xl text-body-md text-on-primary/70">
            {t("philosophyBody")}
          </p>
        </div>
      </section>

      <section className="container-max px-page mx-auto flex flex-col items-center gap-6 pb-28 text-center">
        <h2 className="font-display text-headline-md text-primary">
          {t("ctaTitle")}
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-display text-headline-md text-secondary underline decoration-secondary/40 underline-offset-8 transition-colors hover:decoration-secondary"
        >
          {t("ctaLink")}
          <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
        </Link>
      </section>
    </>
  );
}
