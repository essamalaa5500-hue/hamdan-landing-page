import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "ar");
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir || (lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("lang", lang);
  }, [lang, t.dir]);

  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext);
