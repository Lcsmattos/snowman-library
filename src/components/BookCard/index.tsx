import { useState } from "react";

import { Book } from "../../types/Book";
import { Modal } from "../Modal";

import {
  BookContainer,
  BookImg,
  BookTitle,
  InfoContainer,
  InfoText,
} from "./styles";

type Props = {
  book: Book;
};

export function BookCard({ book }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <BookContainer img={book.image_url} onClick={() => setIsModalOpen(true)}>
        <BookTitle>{book.title}</BookTitle>
        <BookImg src={book.image_url} />
        <InfoContainer>
          <InfoText>⭐: {book.rating}</InfoText>
          <InfoText>Disponíveis: {book.quantity_available}</InfoText>
        </InfoContainer>
      </BookContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={book}
      />
    </>
  );
}
