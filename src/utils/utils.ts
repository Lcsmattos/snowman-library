import { Books } from "../Mocks/Books";
import { Book } from "../types/Book";

export const searchBook = (title: string): Book[] => {
  if (title.length < 2) {
    return Books;
  }
  const normalizedQuery = title.toLowerCase();

  return Books.filter((book) =>
    book.title.toLowerCase().includes(normalizedQuery)
  );
};
