import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import type React from "react";
import "../globals.css";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/i18n.config";
import portfolioData from "@/data/portfolio.json";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const personal = portfolioData.personal;
  const translation = personal.translations[locale as keyof typeof personal.translations] || personal.translations.en;

  return {
    title: `${personal.name} - ${translation.title} ${translation.titleHighlight}`,
    description: translation.description,
    generator: "v0.app",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      lang={locale}
    >
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
