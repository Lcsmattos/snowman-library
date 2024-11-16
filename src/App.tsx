import { ThemeProvider } from "styled-components";
import { MainRoutes as Routes } from "./routes";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
