import { Content } from "./types";

export const en: Content = {
  meta: {
    siteTitle: "Mandrindra | Fullstack & Backend Developer",
    siteDescription:
      "Portfolio of Mandrindra, M1 Computer Science (MISA) student and backend-leaning fullstack developer based in Antananarivo, Madagascar.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    resume: "Resume",
  },
  home: {
    eyebrow: "M1 Computer Science Student · Fullstack Developer",
    headlinePrefix: "MANDRINDRA /",
    headlineItalic: "fullstack developer",
    headlineSuffix: "building clean, well-considered systems.",
    paragraph:
      "M1 Computer Science student (MISA track) at the University of Antananarivo, I build web and mobile applications on a backend-leaning stack: NestJS, FastAPI, Next.js, PostgreSQL and Docker, from prototype to deployment.",
    ctaPrimary: "View my projects",
    ctaSecondary: "My background",
    watermark: "©26",
    selectedEyebrow: "Selected projects",
    selectedTitle: "Recent systems",
    selectedLink: "All projects",
    philosophyTitle: "A pragmatic approach to code.",
    philosophyParagraph:
      "I come from a networking background (TCP/IP, Linux) with no formal algorithms curriculum, so I closed that gap through continuous self-study — from CTFs to graph theory. That same rigor shows up in every project I ship.",
    pillars: [
      {
        number: "01",
        title: "Continuous self-learning",
        text: "Algorithms, data structures and graph theory studied independently to fill curriculum gaps, with an eye toward research (M2 / PhD).",
      },
      {
        number: "02",
        title: "Rigor & documentation",
        text: "Git Flow, code review, CI/CD and clear documentation — so other developers can pick up what I ship without friction.",
      },
    ],
    ctaEyebrow: "Got an opportunity to discuss?",
    ctaTitlePrefix: "Let's build something",
    ctaTitleItalic: "solid",
    ctaTitleSuffix: "together.",
    ctaEmail: "hello@mandrindra.mg",
  },
  projectsPage: {
    eyebrow: "Technical portfolio",
    title: "Projects built to learn, experiment, and ship.",
    paragraph:
      "From a fullstack monorepo to open-source contributions and CTF competitions: every project reflects a preference for understanding systems deeply rather than stacking abstractions I don't fully grasp.",
    ctaTitle: "Let's build what's next, together.",
    ctaParagraph:
      "I'm currently looking for fullstack developer opportunities in Antananarivo and open to freelance work.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View my GitHub",
  },
  projects: [
    {
      slug: "grind-v2",
      category: "Fullstack · Platform · 2025-2026",
      title: "Grind v2 — Student OS",
      description:
        "A full \"student OS\" built as a Turborepo monorepo: a React Native/Expo mobile app, a React 19 + Vite web app, and a FastAPI (Python 3.12) backend, with async PostgreSQL/SQLAlchemy, RustFS object storage and a GPT-4o RAG pipeline. Deployed on DigitalOcean via Dokploy.",
      tags: ["Turborepo", "FastAPI", "React Native", "PostgreSQL", "RAG"],
    },
    {
      slug: "masterclass-next",
      category: "Education · Web app",
      title: "Masterclass Next",
      description:
        "A school management app built with Next.js App Router, Prisma and NextAuth: a supervisor dashboard, a teacher validation workflow, QR-code attendance, Malagasy /20 grading, and PDF report card generation.",
      tags: ["Next.js", "Prisma", "NextAuth", "shadcn/ui"],
    },
    {
      slug: "llm2sh",
      category: "Open source · CLI",
      title: "llm2sh",
      description:
        "An open-source Python TUI tool that converts natural language into shell commands, backed by either the OpenAI API or local models via Ollama.",
      tags: ["Python", "TUI", "OpenAI API", "Ollama"],
    },
    {
      slug: "iomad-lms",
      category: "Contribution · LMS",
      title: "IOMAD LMS Platform",
      description:
        "Contributed as part of a contractor team to a Moodle/IOMAD multi-tenant LMS platform: plugin management, Git Flow, and continuous integration via GitHub Actions.",
      tags: ["Moodle", "IOMAD", "Git Flow", "GitHub Actions"],
    },
    {
      slug: "cmil",
      category: "CMS · Backend",
      title: "CMIL",
      description:
        "A media platform built on Strapi v5: anti-bot protection via a Cloudflare Turnstile worker proxy, HTML transactional emails, a custom admin theme, and nginx deployment behind a Cloudflare Tunnel.",
      tags: ["Strapi v5", "Cloudflare", "Nginx", "CMS"],
    },
    {
      slug: "prodigy-2026",
      category: "CTF · Security",
      title: "PRODIGY 2026",
      description:
        "Competed in the CIRT-MDG CTF hackathon (Novotel Antananarivo, June 2026): binary exploitation, steganography, forensics, and network challenges.",
      tags: ["CTF", "Pwn", "Forensics", "Steganography"],
    },
  ],
  about: {
    eyebrow: "The engineer behind the code",
    headlinePrefix: "Curious, rigorous, and driven by the need to",
    headlineItalic: "understand",
    bioHeadline:
      "M1 Computer Science (MISA) student at the University of Antananarivo, with a backend-leaning fullstack profile.",
    bioParagraphs: [
      "I hold a Bachelor's in Computer Science with a networking specialization (TCP/IP, Linux, packet analysis), but no formal data structures and algorithms curriculum. I closed that gap through continuous self-study — algorithms, graph theory, complexity — with an eventual M2 and PhD in mind.",
      "I've completed contractor engagements on the CUA and CMIL projects, now finished and turned into portfolio pieces. I also contribute to larger efforts, like a Moodle/IOMAD LMS platform, as part of a team.",
      "In my own time I build Grind v2, a full \"student OS\", and llm2sh, an open-source tool that turns natural language into shell commands. I competed in the Huawei ICT Competition (Cloud track, ranked top 6–10) and I'm curious about the openEuler / openGauss / Kunpeng ecosystem.",
      "Outside of code: CTFs and cybersecurity (PRODIGY 2026 with CIRT-MDG), chess, and daily Linux use — I run CachyOS on a Dell G15, dual-booted with Windows.",
    ],
    skillsEyebrow: "Expertise",
    skillsTitle: "Core Skills & Technologies",
    skillGroups: [
      {
        icon: "code",
        title: "Backend & Languages",
        items: ["NestJS", "FastAPI", "TypeScript / Node.js", "Python"],
      },
      {
        icon: "dns",
        title: "Data & Infrastructure",
        items: ["PostgreSQL", "Docker", "CI / CD", "DigitalOcean / Dokploy"],
      },
      {
        icon: "handyman",
        title: "Tools & Methodology",
        items: ["Git / GitHub Actions", "Linux (Arch / CachyOS)", "CTF & Security", "Next.js / React Native"],
      },
    ],
    quote:
      "Rigor isn't about knowing everything — it's about learning fast and documenting what you build.",
    quoteParagraph:
      "I'd rather understand a system deeply than stack abstractions I don't fully control — that same curiosity pulls me toward research as much as toward development.",
    ctaTitle: "Looking to collaborate?",
    ctaLink: "Get in touch",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your next project.",
    formName: "Full name",
    formNamePlaceholder: "John Doe",
    formEmail: "Email",
    formEmailPlaceholder: "you@company.com",
    formMessage: "Your message",
    formMessagePlaceholder: "Describe your project, role, or opportunity...",
    submit: "Send message",
    submitting: "Sending...",
    submitted: "Message sent",
    directTitle: "Direct communication",
    email: "hello@mandrindra.mg",
    location:
      "Based in Antananarivo, Madagascar. GMT+3. Currently looking for fullstack opportunities and open to freelance work.",
    presenceTitle: "Technical presence",
    links: [
      { label: "GitHub", href: "https://github.com/mandrindraa" },
      { label: "Portfolio", href: "https://mandrindraa.vercel.app" },
    ],
  },
  footer: {
    tagline: "Fullstack developer building clean systems, backend to UI.",
    copyright: "© 2026 Mandrindra. Built with Next.js.",
    exploreTitle: "Explore",
    connectTitle: "Connect",
    base: "Antananarivo, Madagascar",
  },
};
