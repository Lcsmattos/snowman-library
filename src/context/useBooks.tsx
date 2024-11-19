import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { Book } from "../types/Book";
import BookService from "../services/BookService";

interface BooksContextData {
  books: Book[];
  booksInCart: Book[];
  fetchBooks: () => Promise<void>;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  setBooksInCart: React.Dispatch<React.SetStateAction<Book[]>>;
  loading: boolean;
}

const BooksContext = createContext<BooksContextData | undefined>(undefined);

export const BooksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [booksInCart, setBooksInCart] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await BookService.getBooks();
      setBooks(response);
    } catch (err: any) {
      console.log("ERROR: ", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      books,
      setBooks,
      fetchBooks,
      loading,
      booksInCart,
      setBooksInCart,
    }),
    [books, fetchBooks, loading, booksInCart, setBooksInCart]
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export const useBooks = (): BooksContextData => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("useBooks must be used within a BooksProvider");
  }
  return context;
};
