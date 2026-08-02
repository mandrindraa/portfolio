export type Lang = "fr" | "en";

export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Content {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    resume: string;
  };
  home: {
    eyebrow: string;
    headlinePrefix: string; // e.g. "MANDRINDRA /"
    headlineItalic: string; // e.g. "Développeur Fullstack"
    headlineSuffix: string; // e.g. "qui construit des systèmes robustes."
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
    watermark: string;
    selectedEyebrow: string;
    selectedTitle: string;
    selectedLink: string;
    philosophyTitle: string;
    philosophyParagraph: string;
    pillars: { number: string; title: string; text: string }[];
    ctaEyebrow: string;
    ctaTitlePrefix: string;
    ctaTitleItalic: string;
    ctaTitleSuffix: string;
    ctaEmail: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    paragraph: string;
    ctaTitle: string;
    ctaParagraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  projects: Project[];
  about: {
    eyebrow: string;
    headlinePrefix: string;
    headlineItalic: string;
    bioHeadline: string;
    bioParagraphs: string[];
    skillsEyebrow: string;
    skillsTitle: string;
    skillGroups: { icon: string; title: string; items: string[] }[];
    quote: string;
    quoteParagraph: string;
    ctaTitle: string;
    ctaLink: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    submit: string;
    submitting: string;
    submitted: string;
    directTitle: string;
    email: string;
    location: string;
    presenceTitle: string;
    links: { label: string; href: string }[];
  };
  footer: {
    tagline: string;
    copyright: string;
    exploreTitle: string;
    connectTitle: string;
    base: string;
  };
}
