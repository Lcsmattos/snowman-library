import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { useTranslation } from "react-i18next";

import { Book } from "../../types/Book";
import { Modal } from "../Modal";

import {
  BookContainer,
  BookImg,
  BookTitle,
  InfoContainer,
  InfoText,
} from "./styles";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  book: Book;
};

export function BookCard({ book, ...rest }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <>
      <BookContainer
        img={book.image_url}
        onClick={() => setIsModalOpen(true)}
        {...rest}
      >
        <BookTitle>{t(`book.${book.title}`)}</BookTitle>
        <BookImg src={book.image_url} />
        <InfoContainer>
          <InfoText>⭐: {book.rating}</InfoText>
          <InfoText>
            {t("cards.available")}: {book.quantity_available}
          </InfoText>
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
