import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20vh;
  background-color: ${(props) => props.theme.colors.highlightSecondary};
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 10px 15px
    ${(props) => props.theme.colors.highlightSecondary};
`;

export const FooterText = styled.text`
  font-size: ${(props) => props.theme.fonts.sizes.m};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fonts.sizes.p};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.sizes.pp};
  }
`;

export const FooterLogo = styled.img`
  height: 100px;
  width: 100px;

  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;
