import React from "react";
import opsImg from "../../assets/ops.png";
import { Container, Image, Message } from "./styles";
import { useTranslation } from "react-i18next";

type Props = {
  message?: string;
};

export const NotFound: React.FC<Props> = ({ message }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Image src={opsImg} alt={"Ops!"} />
      <Message>{message ?? t("messages.not_found")}</Message>
    </Container>
  );
};
