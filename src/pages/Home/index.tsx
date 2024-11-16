import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BookCard } from "../../components/BookCard";

import { Books } from "../../Mocks/Books";

import { BodyContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <BodyContainer>
        {Books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </BodyContainer>
      <Footer />
    </>
  );
}
