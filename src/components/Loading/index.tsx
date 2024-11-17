import React from "react";
import { Container, Spinner, Backdrop } from "./styles";

interface LoadingProps {
  active: boolean;
}

const Loading: React.FC<LoadingProps> = ({ active }) => {
  if (!active) return null;

  return (
    <Backdrop>
      <Container>
        <Spinner />
      </Container>
    </Backdrop>
  );
};

export default Loading;
