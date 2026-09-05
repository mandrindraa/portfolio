import { siteConfig } from "./site-config";

export type ProjectGlyphVariant =
  | "cluster"
  | "terminal"
  | "grid"
  | "tenants"
  | "shield"
  | "flag";

export interface Project {
  slug: string;
  glyph: ProjectGlyphVariant;
  image?: string;
  /** Grid span on the home "Selected Systems" bento (out of 12 cols) */
  homeSpan: number;
  featured?: boolean;
  year: string;
  category: { en: string; fr: string };
  title: { en: string; fr: string };
  summary: { en: string; fr: string };
  description: { en: string; fr: string };
  stack: string[];
  href?: string;
  status: { en: string; fr: string };
}

export const projects: Project[] = [
  {
    slug: "grind-v2",
    glyph: "cluster",
    homeSpan: 8,
    featured: true,
    year: "2026",
    category: {
      en: "Full-Stack / Monorepo",
      fr: "Full-Stack / Monorepo",
    },
    image: "/grind_v2_full_diagram.png",
    title: { en: "Grind v2", fr: "Grind v2" },
    summary: {
      en: "A full \u201cstudent OS\u201d spanning mobile, web and API in a single Turborepo.",
      fr: "Un \u00ab\u202fOS \u00e9tudiant\u202f\u00bb complet, du mobile au web en passant par l'API, dans un seul Turborepo.",
    },
    description: {
      en: "A Turborepo monorepo built around three coordinated apps \u2014 React Native/Expo for mobile, React 19 + Vite for web, and FastAPI on Python 3.12 for the backend \u2014 backed by PostgreSQL with SQLAlchemy async and Alembic migrations, RustFS object storage, and a GPT-4o RAG pipeline. Deployed on DigitalOcean via Dokploy.",
      fr: "Un monorepo Turborepo articul\u00e9 autour de trois applications coordonn\u00e9es \u2014 React Native/Expo pour le mobile, React 19 + Vite pour le web, et FastAPI sur Python 3.12 pour le backend \u2014 avec PostgreSQL (SQLAlchemy async, migrations Alembic), du stockage objet RustFS et un pipeline RAG GPT-4o. D\u00e9ploy\u00e9 sur DigitalOcean via Dokploy.",
    },
    stack: [
      "FastAPI",
      "React Native",
      "Expo",
      "React 19",
      "Vite",
      "PostgreSQL",
      "SQLAlchemy",
      "Turborepo",
      "Docker",
    ],
    status: { en: "In progress", fr: "En cours" },
  },
  {
    slug: "llm2sh",
    glyph: "terminal",
    homeSpan: 4,
    year: "2026",
    image: "/LLM2ShApp_2026-06-11T21_26_15_221395.svg",
    category: {
      en: "Developer Tooling / Open Source",
      fr: "Outillage Dev / Open Source",
    },
    title: { en: "llm2sh", fr: "llm2sh" },
    summary: {
      en: "A TUI that turns plain-language requests into shell commands.",
      fr: "Un TUI qui traduit une demande en langage naturel en commande shell.",
    },
    description: {
      en: "An open-source Python terminal UI that converts natural-language requests into shell commands, with a provider layer that switches between OpenAI and local Ollama models through environment variables.",
      fr: "Une interface terminal Python open source qui convertit des demandes en langage naturel en commandes shell, avec une couche de providers qui bascule entre OpenAI et des mod\u00e8les Ollama locaux via des variables d'environnement.",
    },
    stack: ["Python", "OpenAI API", "Ollama", "TUI"],
    href: `${siteConfig.github}/llm2sh`,
    status: { en: "Open source", fr: "Open source" },
  },
  {
    slug: "masterclass-next",
    glyph: "grid",
    homeSpan: 6,
    year: "2026",
    image: "/Screenshot_20260827_111645.png",
    category: {
      en: "Education / School Management",
      fr: "\u00c9ducation / Gestion Scolaire",
    },
    title: { en: "Masterclass", fr: "Masterclass" },
    summary: {
      en: "A school management app with QR attendance and Malagasy /20 grading.",
      fr: "Une application de gestion scolaire avec pointage QR et notation malgache sur 20.",
    },
    description: {
      en: "A school management platform on the Next.js App Router with Prisma and NextAuth, featuring a surveillant dashboard, a teacher validation workflow, QR-code attendance, Malagasy /20 grading, and generated PDF report cards.",
      fr: "Une plateforme de gestion scolaire sur Next.js App Router avec Prisma et NextAuth\u202f: tableau de bord surveillant, workflow de validation enseignant, pointage par QR code, notation malgache sur 20 et bulletins PDF g\u00e9n\u00e9r\u00e9s automatiquement.",
    },
    stack: ["Next.js", "Prisma", "NextAuth", "TypeScript", "Tailwind CSS"],
    status: { en: "Shipped", fr: "Livr\u00e9" },
  },
  {
    slug: "iomad-lms",
    glyph: "tenants",
    homeSpan: 6,
    year: "2025",
    category: {
      en: "Contract / LMS Platform",
      fr: "Contrat / Plateforme LMS",
    },
    title: { en: "IOMAD LMS Platform", fr: "Plateforme LMS IOMAD" },
    summary: {
      en: "Multi-tenant Moodle infrastructure, built with a contractor team.",
      fr: "Infrastructure Moodle multi-tenant, construite avec une \u00e9quipe de prestataires.",
    },
    description: {
      en: "Contributed to a multi-tenant Moodle (IOMAD) LMS as part of a contractor team \u2014 plugin management, Git Flow branching, and CI/CD pipelines through GitHub Actions.",
      fr: "Contribution \u00e0 un LMS Moodle multi-tenant (IOMAD) au sein d'une \u00e9quipe de prestataires \u2014 gestion des plugins, branches Git Flow et pipelines CI/CD via GitHub Actions.",
    },
    stack: ["Moodle", "IOMAD", "PHP", "Git Flow", "GitHub Actions"],
    status: { en: "Contract work", fr: "Mission" },
  },
  {
    slug: "cmil",
    glyph: "shield",
    homeSpan: 6,
    year: "2025",
    category: {
      en: "CMS / Media Platform",
      fr: "CMS / Plateforme M\u00e9dia",
    },
    image: "/CMIL.png",
    title: { en: "CMIL", fr: "CMIL" },
    summary: {
      en: "A Strapi v5 media platform hardened against bots, end to end.",
      fr: "Une plateforme m\u00e9dia Strapi v5, durcie contre les bots de bout en bout.",
    },
    description: {
      en: "A Strapi v5 media platform: Cloudflare Turnstile anti-bot protection behind a Worker proxy, HTML email templates for contact and rights requests, a custom teal / Linear-style admin theme, and production debugging down to corrupted core-store settings. Completed prestataire engagement, now a portfolio project.",
      fr: "Une plateforme m\u00e9dia Strapi v5\u202f: protection anti-bot Cloudflare Turnstile derri\u00e8re un Worker proxy, templates d'e-mail HTML pour les formulaires de contact et de droits, th\u00e8me admin sur mesure (sarcelle, style Linear) et debug en production jusqu'aux param\u00e8tres core-store corrompus. Mission de prestataire achev\u00e9e, aujourd'hui un projet de portfolio.",
    },
    stack: ["Strapi v5", "Cloudflare Workers", "Nginx", "Docker"],
    status: { en: "Completed", fr: "Termin\u00e9" },
  },
  {
    slug: "cirt-mdg-2026",
    glyph: "flag",
    homeSpan: 12,
    year: "2026",
    category: {
      en: "Security / CTF",
      fr: "S\u00e9curit\u00e9 / CTF",
    },
    title: { en: "CIRT MDG 2026 CTF", fr: "CTF CIRT-MDG 2026" },
    summary: {
      en: "Two days of binary exploitation, forensics and network challenges.",
      fr: "Deux jours d'exploitation binaire, de forensics et de d\u00e9fis r\u00e9seau.",
    },
    description: {
      en: "Top 10 in CIRT-MDG's 2026 capture-the-flag hackathon at Novotel Antananarivo, working through binary exploitation, steganography, forensics, and network challenges.",
      fr: "Top 10 au CIRT-MDG , le hackathon capture-the-flag du CIRT-MDG au Novotel Antananarivo\u202f: exploitation binaire, st\u00e9ganographie, forensics et d\u00e9fis r\u00e9seau.",
    },
    stack: ["Binary Exploitation", "Forensics", "Networking", "Steganography"],
    status: { en: "CIRT-MDG, June 2026", fr: "CIRT-MDG, juin 2026" },
  },
];

export const homeProjects = projects.slice(0, 4);
