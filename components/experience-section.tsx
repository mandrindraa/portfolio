"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import portfolioData from "@/data/portfolio.json"

export function ExperienceSection() {
  const t = useTranslations("experience")
  const locale = useLocale()
  const experiences = portfolioData.experiences
  const education = portfolioData.education
  const certifications = portfolioData.certifications

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold font-space-grotesk mb-6 text-primary">{t("professionalExperience")}</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const translation =
                  exp.translations[locale as keyof typeof exp.translations] ||
                  exp.translations.en;

                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="font-space-grotesk">{translation.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-foreground">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-4 leading-relaxed">{translation.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold font-space-grotesk mb-6 text-primary">{t("education")}</h3>
            <div className="space-y-6">
              {education.map((edu, index) => {
                const translation =
                  edu.translations[locale as keyof typeof edu.translations] ||
                  edu.translations.en;

                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="font-space-grotesk">{translation.degree}</CardTitle>
                          <CardDescription className="text-base font-medium text-foreground">
                            {edu.school}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground mb-2 leading-relaxed">{translation.description}</p>
                      <p className="text-sm font-medium text-primary">GPA: {edu.gpa}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold font-space-grotesk mb-6 text-primary">{t("certifications")}</h3>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => {
                    const translation =
                      cert.translations[locale as keyof typeof cert.translations] ||
                      cert.translations.en;

                    return (
                      <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                        {translation}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
