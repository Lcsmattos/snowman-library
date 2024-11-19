import { useTranslation } from "react-i18next";

import SnowmanLogo from "../../assets/snowman-logo.png";
import { LanguageSelector } from "../LanguageSelector";
import { SearchBar } from "../SearchBar";

import {
  HeaderContainer,
  HeaderTextSubTitle,
  HeaderTextTitle,
  LeftContainer,
  LogoAndTextContainer,
  LogoImg,
  NavMenu,
  NavText,
  RightContainer,
  TextContainer,
  TopContainer,
} from "./styles";

export function Header() {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <TopContainer>
        <LeftContainer>
          <NavMenu>
            <NavText href="/">Home</NavText>
            <NavText href="/login">Login</NavText>
          </NavMenu>
        </LeftContainer>

        <RightContainer>
          <SearchBar />
          <LanguageSelector />
        </RightContainer>
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
