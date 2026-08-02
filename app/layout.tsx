import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/LanguageContext";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mandrindra | Développeur Fullstack & Backend",
  description:
    "Portfolio de Mandrindra, étudiant en M1 Informatique (MISA) et développeur fullstack orienté backend basé à Antananarivo, Madagascar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-background text-on-background font-body-md antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
