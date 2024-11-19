import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 500px;
  width: 35rem;
  border: 5px solid darkcyan;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.backgroundLogin};
`;

export const TitleText = styled.text`
  font-size: ${(props) => props.theme.fonts.sizes.gg};
  font-weight: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.button`
  height: 3rem;
  width: 10rem;
  border: 2px solid darkcyan;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px #3a7470;
    transform: scale(1.05);
  }
`;

export const StyledDivider = styled.div`
  width: 70%;
  height: 1px;
  background-color: lightgray;
  margin: 16px 0;
`;

export const ButtonText = styled.text`
  font-size: ${(props) => props.theme.fonts.sizes.m};
  font-weight: 500px;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: url("https://static-00.iconduck.com/assets.00/google-icon-512x512-wk1c10qc.png");
  font-size: 30px;
  cursor: pointer;
  margin: 0 5px;
  transition: 0.2s;
  background-size: cover;
  background-position: center;

  &:hover {
    box-shadow: 0px 0px 8px #3a7470;
    transform: scale(1.05);
  }
`;
