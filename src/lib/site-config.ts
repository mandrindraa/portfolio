/**
 * Single source of truth for identity, contact and social data.
 *
 * Fields marked "TODO" are placeholders — swap them for the real values
 * before shipping. Everything else reflects verified profile details.
 */
export const siteConfig = {
  name: "Mandrindra",
  legalName: "RAMAHAZOMANANA Mandrindra Antonnio",
  role: {
    en: "Software Developer",
    fr: "Développeur Logiciel",
  },
  location: {
    en: "Antananarivo, Madagascar · GMT+3",
    fr: "Antananarivo, Madagascar · GMT+3",
  },
  // TODO: replace with a real inbox you check — this is a placeholder.
  email: "mandrindraantonnio@gmail.com",
  github: "https://github.com/mandrindraa",
  githubHandle: "mandrindraa",
  portfolio: "https://mandrindraa.is-a.dev",
  // TODO: add if/when public — omitted from the UI until then.
  linkedin: "https://linkedin.com/in/mandrindra-antonnio",
} as const;
