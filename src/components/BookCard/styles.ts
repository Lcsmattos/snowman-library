import styled from "styled-components";

export const BookContainer = styled.div`
  display: flex;
  height: 400px;
  width: 300px;
  flex-direction: column;
  border: 5px solid darkcyan;
  border-radius: 25px;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  &:hover {
    box-shadow: 0px 0px 8px #3a7470;
    transform: scale(1.05);
  }
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 300px;
    width: 200px;
  }
  @media (max-width: 480px) {
    height: 250px;
    width: 150px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const BookTitle = styled.text`
  text-align: center;
  font-size: ${(props) => props.theme.fonts.sizes.gg};
  font-weight: 500;
  line-height: 1.5rem;
`;

export const InfoText = styled.text`
  font-size: ${(props) => props.theme.fonts.sizes.g};
  font-weight: 500;
`;
