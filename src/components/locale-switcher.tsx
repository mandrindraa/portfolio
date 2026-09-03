"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("locale");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center overflow-hidden dark:rounded-(--radius-control) border border-outline-variant"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={locale === loc ? "true" : undefined}
          className={clsx(
            "px-2.5 py-1.5 text-label-caps uppercase transition-colors",
            locale === loc
              ? "bg-primary text-on-primary"
              : "text-on-surface-variant hover:text-on-surface",
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
