import { ThemeProvider } from "styled-components";
import { MainRoutes as Routes } from "./routes";
import { theme } from "./styles/theme";
import { BooksProvider } from "./context/useBooks";

export function App() {
  return (
    <BooksProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BooksProvider>
  );
}
