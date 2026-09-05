import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-outline-variant bg-surface py-20">
      <div className="container-max px-page mx-auto flex flex-col justify-between gap-16 md:flex-row">
        <div className="flex flex-col gap-4">
          <Link href="/" className="font-display text-headline-lg text-primary">
            {siteConfig.name}
          </Link>
          <p className="max-w-xs text-body-md text-on-surface-variant">
            {t("tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
          <div className="flex flex-col gap-4">
            <span className="text-label-caps text-on-surface-variant">
              {t("navTitle")}
            </span>
            <div className="flex flex-col gap-3">
              <Link
                href="/projects"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface hover:underline"
              >
                {nav("projects")}
              </Link>
              <Link
                href="/about"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface hover:underline"
              >
                {nav("about")}
              </Link>
              <Link
                href="/contact"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface hover:underline"
              >
                {nav("contact")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-label-caps text-on-surface-variant">
              {t("connectTitle")}
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface hover:underline"
              >
                GitHub
              </a>
              <a
                href={siteConfig.portfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface hover:underline"
              >
                Portfolio
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface hover:underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-max px-page mx-auto mt-16">
        <p className="text-body-md text-on-surface-variant opacity-80">
          {t("rights", { year })}
        </p>
      </div>
    </footer>
  );
}
