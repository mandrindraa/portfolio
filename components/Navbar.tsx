"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-surface-variant/40 transition-colors duration-300">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link
          href="/"
          className="font-display text-headline-md text-primary tracking-tight hover:opacity-80 transition-opacity duration-300"
        >
          MANDRINDRA
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "font-label-md text-label-md text-secondary font-semibold border-b-2 border-secondary pb-1"
                    : "font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary border border-outline-variant rounded-DEFAULT px-3 py-1.5 transition-colors duration-300"
          >
            {lang === "fr" ? "FR / EN" : "EN / FR"}
          </button>
          <ThemeToggle />
          <a
            href="/resume.pdf"
            className="hidden md:inline-block bg-primary text-on-primary px-6 py-2 rounded-DEFAULT font-label-md text-label-md hover:bg-secondary transition-colors duration-300"
          >
            {t.nav.resume}
          </a>
          <button
            className="md:hidden text-primary ml-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-surface-variant/40 px-margin-mobile py-6 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                pathname === link.href
                  ? "font-label-md text-label-md text-secondary font-semibold"
                  : "font-label-md text-label-md text-on-surface-variant"
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-DEFAULT font-label-md text-label-md text-center"
          >
            {t.nav.resume}
          </a>
        </div>
      )}
    </nav>
  );
}
