import { useState } from "react";
import { LanguageContainer, SelectLanguage } from "./styles";
import { useTranslation } from "react-i18next";

enum EnumLanguage {
  "pt" = "pt",
  "en" = "en",
}

export function LanguageSelector() {
  const [language, setLanguage] = useState<EnumLanguage>();
  const { i18n } = useTranslation();

  const selectLanguage = (languageSelected: EnumLanguage) => {
    i18n.changeLanguage(languageSelected);
    setLanguage(languageSelected);
  };

  return (
    <LanguageContainer>
      <SelectLanguage
        onChange={(e) => selectLanguage(e.target.value as EnumLanguage)}
        value={language}
      >
        <option value={EnumLanguage.pt}> Português 🇧🇷</option>
        <option value={EnumLanguage.en}> English 🇺🇸 </option>
      </SelectLanguage>
    </LanguageContainer>
  );
}
