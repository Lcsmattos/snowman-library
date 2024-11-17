import { useTranslation } from "react-i18next";

import SnowmanLogo from "../../assets/snowman-logo.png";
import { LanguageSelector } from "../LanguageSelector";
import { SearchBar } from "../SearchBar";

import {
  HeaderContainer,
  HeaderTextSubTitle,
  HeaderTextTitle,
  LogoAndTextContainer,
  LogoImg,
  TextContainer,
  TopContainer,
} from "./styles";

export function Header() {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <TopContainer>
        <SearchBar />
        <LanguageSelector />
      </TopContainer>

      <LogoAndTextContainer>
        <TextContainer>
          <HeaderTextTitle>
            Snowman <br /> Library
          </HeaderTextTitle>
          <HeaderTextSubTitle>{t("header.subtitle")}</HeaderTextSubTitle>
        </TextContainer>
        <LogoImg src={SnowmanLogo} alt="Snowman Library Logo" />
      </LogoAndTextContainer>
    </HeaderContainer>
  );
}
