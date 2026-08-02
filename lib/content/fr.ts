import { Content } from "./types";

export const fr: Content = {
  meta: {
    siteTitle: "Mandrindra | Développeur Fullstack & Backend",
    siteDescription:
      "Portfolio de Mandrindra, étudiant en M1 Informatique (MISA) et développeur fullstack orienté backend basé à Antananarivo, Madagascar.",
  },
  nav: {
    home: "Accueil",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
    resume: "CV",
  },
  home: {
    eyebrow: "Étudiant M1 Informatique · Développeur Fullstack",
    headlinePrefix: "MANDRINDRA /",
    headlineItalic: "développeur fullstack",
    headlineSuffix: "qui construit des systèmes propres et bien pensés.",
    paragraph:
      "Étudiant en M1 Informatique (parcours MISA) à l'Université d'Antananarivo, je conçois des applications web et mobiles avec un socle technique orienté backend : NestJS, FastAPI, Next.js, PostgreSQL et Docker, du prototype jusqu'au déploiement.",
    ctaPrimary: "Voir mes projets",
    ctaSecondary: "Mon parcours",
    watermark: "©26",
    selectedEyebrow: "Projets sélectionnés",
    selectedTitle: "Systèmes récents",
    selectedLink: "Tous les projets",
    philosophyTitle: "Une approche pragmatique du code.",
    philosophyParagraph:
      "Je viens d'une formation réseaux (TCP/IP, Linux) sans cursus algorithmique formel : j'ai comblé cet écart par une auto-formation continue, du CTF à la théorie des graphes. Cette rigueur se retrouve dans chaque projet que je livre.",
    pillars: [
      {
        number: "01",
        title: "Auto-formation continue",
        text: "Algorithmique, structures de données et théorie des graphes travaillées en autodidacte pour combler les manques du cursus, avec un œil vers la recherche (M2 / doctorat).",
      },
      {
        number: "02",
        title: "Rigueur & documentation",
        text: "Git Flow, revues de code, CI/CD et documentation claire — pour livrer des projets que d'autres développeurs peuvent reprendre sans friction.",
      },
    ],
    ctaEyebrow: "Une opportunité à discuter ?",
    ctaTitlePrefix: "Construisons quelque chose",
    ctaTitleItalic: "de solide",
    ctaTitleSuffix: "ensemble.",
    ctaEmail: "hello@mandrindra.mg",
  },
  projectsPage: {
    eyebrow: "Portfolio technique",
    title: "Des projets construits pour apprendre, expérimenter et livrer.",
    paragraph:
      "Du monorepo fullstack aux contributions open-source, en passant par la compétition CTF : chaque projet reflète une envie de comprendre les systèmes en profondeur plutôt que d'empiler des abstractions.",
    ctaTitle: "La suite, on la construit ensemble.",
    ctaParagraph:
      "Je suis actuellement à la recherche d'opportunités de développeur fullstack à Antananarivo et ouvert aux missions freelance.",
    ctaPrimary: "Me contacter",
    ctaSecondary: "Voir mon GitHub",
  },
  projects: [
    {
      slug: "grind-v2",
      category: "Fullstack · Plateforme · 2025-2026",
      title: "Grind v2 — Student OS",
      description:
        "Un « OS étudiant » complet pensé comme monorepo Turborepo : app mobile React Native/Expo, web React 19 + Vite et API FastAPI (Python 3.12), avec PostgreSQL/SQLAlchemy async, stockage objet RustFS et un pipeline RAG basé sur GPT-4o. Déployé sur DigitalOcean via Dokploy.",
      tags: ["Turborepo", "FastAPI", "React Native", "PostgreSQL", "RAG"],
    },
    {
      slug: "masterclass-next",
      category: "Éducation · Application web",
      title: "Masterclass Next",
      description:
        "Application de gestion scolaire construite avec Next.js App Router, Prisma et NextAuth : tableau de bord surveillant, workflow de validation enseignant, présence par QR code, notation malgache sur /20 et génération de bulletins PDF.",
      tags: ["Next.js", "Prisma", "NextAuth", "shadcn/ui"],
    },
    {
      slug: "llm2sh",
      category: "Open source · CLI",
      title: "llm2sh",
      description:
        "Un outil TUI Python open-source qui traduit le langage naturel en commandes shell, en s'appuyant au choix sur l'API OpenAI ou sur des modèles locaux via Ollama.",
      tags: ["Python", "TUI", "OpenAI API", "Ollama"],
    },
    {
      slug: "iomad-lms",
      category: "Contribution · LMS",
      title: "IOMAD LMS Platform",
      description:
        "Contribution au sein d'une équipe de prestataires à une plateforme LMS multi-tenant basée sur Moodle/IOMAD : gestion de plugins, Git Flow et intégration continue via GitHub Actions.",
      tags: ["Moodle", "IOMAD", "Git Flow", "GitHub Actions"],
    },
    {
      slug: "cmil",
      category: "CMS · Backend",
      title: "CMIL",
      description:
        "Plateforme média construite sur Strapi v5 : protection anti-bot via Cloudflare Turnstile et un Worker proxy, emails transactionnels HTML, thème d'administration sur mesure, et déploiement nginx derrière un tunnel Cloudflare.",
      tags: ["Strapi v5", "Cloudflare", "Nginx", "CMS"],
    },
    {
      slug: "prodigy-2026",
      category: "CTF · Sécurité",
      title: "PRODIGY 2026",
      description:
        "Participation au hackathon CTF organisé par le CIRT-MDG (Novotel Antananarivo, juin 2026) : exploitation binaire, stéganographie, forensics et challenges réseau.",
      tags: ["CTF", "Pwn", "Forensics", "Steganography"],
    },
  ],
  about: {
    eyebrow: "L'ingénieur derrière le code",
    headlinePrefix: "Curieux, rigoureux, et animé par l'envie de",
    headlineItalic: "comprendre",
    bioHeadline:
      "Étudiant en M1 Informatique (MISA) à l'Université d'Antananarivo, avec un profil fullstack orienté backend.",
    bioParagraphs: [
      "Je détiens un Bachelor en informatique avec une spécialisation réseaux (TCP/IP, Linux, analyse de paquets), mais sans cursus formel en structures de données et algorithmes. J'ai comblé cet écart par une auto-formation continue — algorithmique, théorie des graphes, complexité — avec, à terme, l'ambition d'un M2 puis d'une thèse.",
      "J'ai mené des missions de prestataire sur les projets CUA et CMIL, aujourd'hui achevées et devenues des projets de portfolio. Je contribue aussi à des projets plus larges, comme une plateforme LMS IOMAD, au sein d'une équipe.",
      "Sur mon temps personnel, je construis Grind v2, un « OS étudiant » complet, et llm2sh, un outil open-source qui traduit le langage naturel en commandes shell. J'ai participé au Huawei ICT Competition (piste Cloud, classé parmi les 6 à 10 premiers) et je m'intéresse à l'écosystème openEuler / openGauss / Kunpeng.",
      "En dehors du code : les CTF et la cybersécurité (PRODIGY 2026 avec le CIRT-MDG), les échecs, et Linux au quotidien — je fais tourner CachyOS sur un Dell G15 en dual-boot avec Windows.",
    ],
    skillsEyebrow: "Expertise",
    skillsTitle: "Compétences & Technologies",
    skillGroups: [
      {
        icon: "code",
        title: "Backend & Langages",
        items: ["NestJS", "FastAPI", "TypeScript / Node.js", "Python"],
      },
      {
        icon: "dns",
        title: "Data & Infrastructure",
        items: ["PostgreSQL", "Docker", "CI / CD", "DigitalOcean / Dokploy"],
      },
      {
        icon: "handyman",
        title: "Outils & Méthodologie",
        items: ["Git / GitHub Actions", "Linux (Arch / CachyOS)", "CTF & Sécurité", "Next.js / React Native"],
      },
    ],
    quote:
      "La rigueur ne consiste pas à tout savoir, mais à apprendre vite et à documenter ce qu'on construit.",
    quoteParagraph:
      "Je préfère comprendre un système en profondeur plutôt que d'empiler des abstractions que je ne maîtrise pas — c'est cette curiosité qui me pousse vers la recherche autant que vers le développement.",
    ctaTitle: "Envie de collaborer ?",
    ctaLink: "Me contacter",
  },
  contact: {
    eyebrow: "Contact",
    title: "Discutons de votre prochain projet.",
    formName: "Nom complet",
    formNamePlaceholder: "Rakoto Jean",
    formEmail: "Email",
    formEmailPlaceholder: "vous@entreprise.com",
    formMessage: "Votre message",
    formMessagePlaceholder: "Décrivez votre projet, poste ou opportunité...",
    submit: "Envoyer le message",
    submitting: "Envoi en cours...",
    submitted: "Message envoyé",
    directTitle: "Communication directe",
    email: "hello@mandrindra.mg",
    location:
      "Basé à Antananarivo, Madagascar. GMT+3. Actuellement à la recherche d'opportunités fullstack et ouvert aux missions freelance.",
    presenceTitle: "Présence technique",
    links: [
      { label: "GitHub", href: "https://github.com/mandrindraa" },
      { label: "Portfolio", href: "https://mandrindraa.vercel.app" },
    ],
  },
  footer: {
    tagline:
      "Développeur fullstack construisant des systèmes propres, du backend à l'interface.",
    copyright: "© 2026 Mandrindra. Construit avec Next.js.",
    exploreTitle: "Explorer",
    connectTitle: "Suivre",
    base: "Antananarivo, Madagascar",
  },
};
