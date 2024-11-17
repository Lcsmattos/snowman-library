import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
`;

export const Info = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
  text-align: justify;
`;

export const BookImg = styled.img`
  height: 150px;
  width: 100;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  width: 10rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  all: unset;
  padding: 0.3rem 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 8px ${(props) => props.theme.colors.secondary};
    transform: scale(1.05);
  }
`;

export const AmountText = styled.text``;
