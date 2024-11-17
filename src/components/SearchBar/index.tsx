import { useState } from "react";
import LoupeIcon from "../../assets/loupe.png";
import Loading from "../Loading";

import { SearchContainer, SearchIcon, SearchInput } from "./styles";
import BookService from "../../services/BookService";
import { useBooks } from "../../context/useBooks";

export function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { setBooks } = useBooks();

  async function findBookByTitle(title: string) {
    setLoading(true);
    const response = await BookService.getBookByTitle(title);

    if (!response) {
      return;
    }

    setBooks(response);

    setLoading(false);
  }

  return (
    <>
      <Loading active={loading} />
      <SearchContainer>
        <SearchInput
          placeholder="Qual Livro está procurando ?"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={() => findBookByTitle(search)}
        />
        <SearchIcon src={LoupeIcon} alt="lupa" />
      </SearchContainer>
    </>
  );
}
