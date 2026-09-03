import { Eyebrow } from "@/components/eyebrow";
import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { RiLinkedinLine } from "react-icons/ri";
import { VscGithub, VscGlobe } from "react-icons/vsc";
import { ContactForm } from "./contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <section className="container-max px-page mx-auto grid grid-cols-1 gap-16 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
      <div className="flex flex-col gap-10">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h1 className="max-w-xl font-display text-4xl leading-[1.1] text-primary md:text-display">
          {t("headline")}
        </h1>
        <ContactForm />
      </div>

      <div className="flex flex-col gap-14 lg:pt-32">
        <div className="flex flex-col gap-3 border-t border-outline-variant pt-8">
          <span className="text-label-caps text-on-surface-variant">
            {t("directTitle")}
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-display text-headline-md text-primary transition-colors hover:text-secondary"
          >
            {siteConfig.email}
          </a>
          <p className="max-w-sm text-body-md text-on-surface-variant">
            {t("directBody")}
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-outline-variant pt-8">
          <span className="text-label-caps text-on-surface-variant">
            {t("presenceTitle")}
          </span>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-body-lg text-on-surface transition-colors hover:text-secondary"
          >
            <VscGithub className="h-4 w-4" />
            {t("github")}
          </a>
          <a
            href={siteConfig.portfolio}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-body-lg text-on-surface transition-colors hover:text-secondary"
          >
            <VscGlobe className="h-4 w-4" />
            {t("portfolio")}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-body-lg text-on-surface transition-colors hover:text-secondary"
          >
            <RiLinkedinLine className="h-4 w-4" />
            {t("linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
}
