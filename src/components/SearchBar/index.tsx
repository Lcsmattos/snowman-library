import LoupeIcon from "../../assets/loupe.png";

import { SearchContainer, SearchIcon, SearchInput } from "./styles";

export function SearchBar() {
  return (
    <SearchContainer>
      <SearchInput placeholder="Pesquisar..." />
      <SearchIcon src={LoupeIcon} alt="lupa" />
    </SearchContainer>
  );
}
