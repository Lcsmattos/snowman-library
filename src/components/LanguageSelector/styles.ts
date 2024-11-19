import styled from "styled-components";

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.4rem;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  padding: 0.35rem;
  background-color: lightgray;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fonts.sizes.m};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.sizes.p};
  }
`;

export const SelectLanguage = styled.select`
  background: transparent;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  text-align: center;
  cursor: pointer;
  outline: none;

  font-size: ${(props) => props.theme.fonts.sizes.p};

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.sizes.pp};
  }
`;
