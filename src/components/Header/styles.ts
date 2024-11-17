import styled from "styled-components";
import HeaderBackgroundImg from "../../assets/header-background.png";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 1rem;
  gap: 1rem;
  background-image: url(${HeaderBackgroundImg});
  background-size: cover;
  background-position: center;

  border-bottom: 5px solid ${(props) => props.theme.colors.secondary};

  @media (max-width: 768px) {
    height: 45vh;
  }
`;

export const NavMenu = styled.nav`
  height: 3rem;
  gap: 15px;
  padding: 0.5rem;
`;

export const NavText = styled.text`
  font-size: ${(props) => props.theme.fonts.sizes.g};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fonts.sizes.m};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.sizes.p};
  }
`;

export const LogoAndTextContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const LogoImg = styled.img`
  height: 20rem;
  width: 20rem;

  @media (max-width: 768px) {
    height: 16rem;
    width: 16rem;
  }
  @media (max-width: 480px) {
    height: 11rem;
    width: 11rem;
  }
`;

export const HeaderTextTitle = styled.text`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.family.headerTitle};
  font-size: 3.8rem;
  line-height: 4.2rem;
  font-weight: 700;
  text-shadow: 2px 4px 4px ${(props) => props.theme.colors.highlightSecondary};

  @media (max-width: 768px) {
    font-size: 3.3rem;
    line-height: 3.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2.6rem;
    line-height: 2.7rem;
  }
`;

export const HeaderTextSubTitle = styled.text`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.family.headerTitle};
  font-size: 1.7rem;
  font-weight: 500;
  text-shadow: 1px 2px 1px ${(props) => props.theme.colors.highlightSecondary};

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
`;
