"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-20 bg-surface border-t border-surface-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <span className="font-display text-headline-lg text-primary">
            MANDRINDRA
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-90">
            {t.footer.tagline}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-70">
            {t.footer.copyright}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 md:gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              {t.footer.exploreTitle}
            </span>
            <div className="flex flex-col gap-3">
              <Link
                href="/projects"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all"
              >
                {t.nav.projects}
              </Link>
              <Link
                href="/about"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              {t.footer.connectTitle}
            </span>
            <div className="flex flex-col gap-3">
              {t.contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
              Base
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.footer.base}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
