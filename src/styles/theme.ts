export const theme = {
  colors: {
    primary: "#365052", // verde escuro
    secondary: "#3a7470", // verde claro
    background: "#f0f4f8", // Cinza bem claro
    backgroundLogin: "#e5e7eb", // Cinza bem claro
    textPrimary: "#1f2937", // Preto suave
    textSecondary: "#6b7280", // Cinza médio
    highlight: "#60a5fa", // Azul suave para destaques
    highlightSecondary: "#7799a5",
    accent: "#e5e7eb", // Cinza claro para bordas ou áreas de suporte
    white: "#ffffff", //branco puro
  },
  fonts: {
    family: {
      primary: "'Roboto', sans-serif",
      secondary: "'Lato', sans-serif",
      headerTitle: "'Edu AU VIC WA NT Pre', sans-serif",
    },
    sizes: {
      pp: "12px", // Pequeno
      p: "14px", // Padrão
      m: "16px", // Médio
      g: "20px", // Grande
      gg: "24px", // Muito grande
    },
  },
  spacing: (factor: number) => `${factor * 8}px`,
};
