import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  background-color: lightgray;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  gap: 5px;
  border: 3px solid ${(props) => props.theme.colors.secondary};

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

export const SearchInput = styled.input`
  background-color: lightgray;
  padding-left: 0.6rem;
  border: none;
  outline: none;
`;

export const SearchIcon = styled.img`
  height: 20px;
  width: 20px;

  @media (max-width: 768px) {
    height: 15px;
    width: 15px;
  }
  @media (max-width: 480px) {
    height: 10px;
    width: 10px;
  }
`;
