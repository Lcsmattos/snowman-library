import { styled } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const InputLabel = styled.text`
  font-size: ${(props) => props.theme.fonts.sizes.m};
  font-weight: 400px;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fonts.sizes.m};
  }
  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fonts.sizes.p};
  }
`;

export const InputContent = styled.input`
  width: 90%;
  background-color: transparent;
  line-height: 2rem;
  border: none;
  outline: none;
`;

export const InputBox = styled.div`
  display: flex;
  background-color: lightgray;
  padding-left: 1rem;

  border: 1px solid darkcyan;
  border-radius: 20px;
  align-items: center;
`;

export const ErrorMessage = styled.text`
  margin-left: 15px;
  margin-top: 2px;
  color: red;
  font-weight: 600;
  font-size: ${(props) => props.theme.fonts.sizes.p};
`;
