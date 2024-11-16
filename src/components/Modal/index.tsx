import { Book } from "../../types/Book";

import {
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
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>
          <BookImg src={book.image_url} />
          <Title>{book.title}</Title>
        </ModalHeader>

        <Info>
          <strong>Autor:</strong> {book.author}
        </Info>
        <Info>
          <strong>Descrição:</strong> {book.synopsis}
        </Info>
        <Info>
          <strong>Ano de Publicação:</strong> {book.publication_year}
        </Info>

        <ButtonContainer>
          <Button onClick={() => alert("Encaminhado para login e reserva !")}>
            Alugar
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
}
