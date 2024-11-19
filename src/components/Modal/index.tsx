import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useBooks } from "../../context/useBooks";

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
  const { setBooksInCart, booksInCart } = useBooks();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer className="modal">
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
          <Button
            onClick={() => {
              setBooksInCart([...booksInCart, book]);
              navigate("/login");
              alert(
                `Armazenei o livro em um carrinho para após login continuar com a reserva`
              );
            }}
          >
            Alugar
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
}
