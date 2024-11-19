import React from "react";
import { Container, Spinner, Backdrop } from "./styles";

interface Props {
  active: boolean;
}

export function Loading({ active }: Props) {
  if (!active) return null;

  return (
    <Backdrop>
      <Container>
        <Spinner />
      </Container>
    </Backdrop>
  );
}
