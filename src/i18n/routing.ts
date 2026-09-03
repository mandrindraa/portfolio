import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // All locales supported by the site
  locales: ["en", "fr"],
  // Used when no locale matches the request
  defaultLocale: "en",
  // Keep the default locale prefixed too, so /en and /fr are both explicit
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/projects": {
      en: "/projects",
      fr: "/projets",
    },
    "/about": {
      en: "/about",
      fr: "/a-propos",
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
