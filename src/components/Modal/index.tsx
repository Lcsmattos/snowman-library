import { useTranslation } from "react-i18next";
import { Book } from "../../types/Book";

import {
  AmountText,
  BookImg,
  Button,
  ButtonContainer,
  CloseButton,
  Info,
  ModalContainer,
  ModalHeader,
  Overlay,
  Title,
} from "./styles";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
};

export function Modal({ isOpen, onClose, book }: Props) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>
          <BookImg src={book.image_url} />
          <Title>{t(`book.${book.title}`)}</Title>
        </ModalHeader>

        <Info>
          <strong>{t("cards.author")}:</strong> {book.author}
        </Info>
        <Info>
          <strong>{t("cards.sinopse")}:</strong> {book.synopsis}
        </Info>
        <Info>
          <strong>{t("cards.year_of_publication")}:</strong>{" "}
          {book.publication_year}
        </Info>

        <ButtonContainer>
          <AmountText>
            <strong>R$</strong> {book.price}
          </AmountText>
          <Button onClick={() => alert("Encaminhado para login e reserva !")}>
            Alugar
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
}
