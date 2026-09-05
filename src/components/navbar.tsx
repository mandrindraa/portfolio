"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", key: "home", showInNav: false },
  { href: "/projects", key: "projects", showInNav: true },
  { href: "/about", key: "about", showInNav: true },
  { href: "/contact", key: "contact", showInNav: true },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const locale = useLocale(); // e.g., "en" or "fr"

  // Dynamically target the correct file based on locale
  const resumeHref = `/resume-${locale}.pdf`;

  // Close the mobile menu on navigation. Adjusting state during render
  // (rather than in an effect) per https://react.dev/learn/you-might-not-need-an-effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/40 bg-surface/90 backdrop-blur-xl">
      <div className="container-max px-page mx-auto flex h-20 min-w-0 items-center justify-between">
        <Link
          href="/"
          className="min-w-0 truncate font-display text-headline-md tracking-tight text-primary transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links
            .filter((l) => l.showInNav)
            .map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "pb-1 text-label-md transition-colors",
                    active
                      ? "border-b-2 border-secondary font-semibold text-secondary"
                      : "text-on-surface-variant hover:text-on-surface",
                  )}
                >
                  {t(l.key)}
                </Link>
              );
            })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden shrink-0 md:block">
            <LocaleSwitcher />
          </div>
          <ThemeToggle />
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center px-6 py-2 text-label-md bg-primary text-on-primary transition-opacity hover:opacity-85 md:inline-flex"
          >
            {t("resume")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("close") : t("menu")}
            className="flex h-9 w-9 items-center justify-center text-primary md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="motion-safe:animate-[mobile-menu-in_180ms_ease-out] border-t border-outline-variant/40 bg-surface px-page py-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {links
              .filter((l) => l.showInNav)
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-display text-headline-md text-primary"
                >
                  {t(l.key)}
                </Link>
              ))}
          </nav>
          <div className="mt-8 flex items-center justify-between">
            <LocaleSwitcher />
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-2 text-label-md bg-primary text-on-primary"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              {t("resume")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
