import SnowmanLogo from "../../assets/snowman-logo.png";

import { FooterContainer, FooterLogo, FooterText } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={SnowmanLogo} alt="Logo SnowmanLibrary" />
      <FooterText> Copyright © Snowman Libray™</FooterText>
      <FooterText> 2024</FooterText>
    </FooterContainer>
  );
}
