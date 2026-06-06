"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Cog, Network, Server } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import portfolioData from "@/data/portfolio.json";

const iconMap = {
  Network: Network,
  Server: Server,
  Cog: Cog,
};

export function AboutSection() {
  const t = useTranslations("about");
  const locale = useLocale();
  const about = portfolioData.about;
  const translation =
    about.translations[locale as keyof typeof about.translations] ||
    about.translations.en;

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {translation.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              {translation.paragraph1}
            </p>
            <p className="text-foreground leading-relaxed">
              {translation.paragraph2}
            </p>
            <p className="text-foreground leading-relaxed">
              {translation.paragraph3}
            </p>
          </div>

          <div className="grid gap-4">
            {about.expertise.map((exp) => {
              const expTranslation =
                exp.translations[locale as keyof typeof exp.translations] ||
                exp.translations.en;
              const IconComponent =
                iconMap[exp.icon as keyof typeof iconMap] || Server;

              return (
                <Card key={exp.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold font-space-grotesk">
                          {expTranslation.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {expTranslation.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
