"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Cog, Network, Server } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="text-foreground leading-relaxed">
              {t("paragraph2")}
            </p>
            <p className="text-foreground leading-relaxed">
              {t("paragraph3")}
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">
                      {t("expertise.networking.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("expertise.networking.description")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">
                      {t("expertise.backend.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("expertise.backend.description")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cog className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">
                      {t("expertise.devops.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("expertise.devops.description")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
