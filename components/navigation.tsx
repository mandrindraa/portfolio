"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import portfolioData from "@/data/portfolio.json"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations("navigation")
  const pathname = usePathname()

  // Extract locale from pathname (e.g., /en/... -> en)
  const currentLocale = pathname.split("/")[1]
  const otherLocale = currentLocale === "en" ? "fr" : "en"

  // Get path without locale prefix
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "")

  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#contact", label: t("contact") },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${currentLocale}`} className="font-bold text-xl font-space-grotesk">
            {portfolioData.personal.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-2">
              <Link
                href={`/${otherLocale}${pathWithoutLocale}`}
                className="flex items-center gap-1 px-2 py-1 text-sm rounded-md hover:bg-accent transition-colors"
              >
                <Globe className="h-4 w-4" />
                {otherLocale.toUpperCase()}
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Link
                  href={`/${otherLocale}${pathWithoutLocale}`}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Globe className="h-4 w-4" />
                  {otherLocale.toUpperCase()}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
