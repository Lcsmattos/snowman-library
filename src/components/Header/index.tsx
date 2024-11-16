import SnowmanLogo from "../../assets/snowman-logo.png";
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
  return (
    <HeaderContainer>
      <TopContainer>
        <SearchBar />
      </TopContainer>

      <LogoAndTextContainer>
        <TextContainer>
          <HeaderTextTitle>
            Snowman <br /> Library
          </HeaderTextTitle>
          <HeaderTextSubTitle>renting books</HeaderTextSubTitle>
        </TextContainer>
        <LogoImg src={SnowmanLogo} alt="Snowman Library Logo" />
      </LogoAndTextContainer>
    </HeaderContainer>
  );
}
