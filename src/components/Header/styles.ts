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

export const NavMenu = styled.div`
  display: flex;
  height: 3rem;
  gap: 5rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

export const NavText = styled.a`
  color: inherit;
  font-size: ${(props) => props.theme.fonts.sizes.gg};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fonts.sizes.g};
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
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  display: flex;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
