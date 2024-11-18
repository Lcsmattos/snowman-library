import { useEffect } from "react";

import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BookCard } from "../../components/BookCard";

import { useBooks } from "../../context/useBooks";

import { BodyContainer } from "./styles";

export function Home() {
  const { books, fetchBooks, loading } = useBooks();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Header />
      <BodyContainer>
        {books && books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <NotFound />
        )}
      </BodyContainer>
      <Footer />
      <Loading active={loading} />
    </>
  );
}
