"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import portfolioData from "@/data/portfolio.json"

export function HeroSection() {
  const t = useTranslations("hero")
  const locale = useLocale()
  const personal = portfolioData.personal
  const translation = personal.translations[locale as keyof typeof personal.translations] || personal.translations.en

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
          {translation.title}{" "}
          <span className="text-primary block">{translation.titleHighlight}</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {translation.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="font-medium" asChild>
            <a href="#projects">{t("viewWork")}</a>
          </Button>
          <Button variant="outline" size="lg" className="font-medium bg-transparent" asChild>
            <a href="#contact">{t("getInTouch")}</a>
          </Button>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href={personal.github}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${personal.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
