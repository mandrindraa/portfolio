"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { dictionary, Lang, Content } from "./content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "mandrindra-portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  // Restore any previously chosen language on mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: dictionary[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
