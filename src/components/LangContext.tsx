import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar" | "he";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

const translations: Record<Lang, Record<string, string>> = {
  en: require("../locales/en.json"),
  ar: require("../locales/ar.json"),
  he: require("../locales/he.json"),
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => translations[lang][key] || key;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
