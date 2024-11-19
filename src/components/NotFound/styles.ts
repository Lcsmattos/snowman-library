import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto; /* Centraliza no meio da tela */
  text-align: center;
  padding: 16px;
  background-color: transparent; /* Fundo claro */
`;

export const Image = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
`;
