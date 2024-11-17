import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./i18n/en/translations.json";
import translationPT from "./i18n/pt/translations.json";

i18n
  .use(LanguageDetector) // Detecta automaticamente o idioma do navegador
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      pt: {
        translation: translationPT,
      },
    },
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
