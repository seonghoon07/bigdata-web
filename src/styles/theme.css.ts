import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  blue: {
    50: "#eaf0f9",
    100: "#bdd1eb",
    200: "#9dbae2",
    300: "#719bd5",
    400: "#5587cd",
    500: "#2b69c0",
    600: "#2760af",
    700: "#1f4b88",
    800: "#183a6a",
    900: "#122c51",
  },
  gray: {
    50: "#F6F6F8",
    100: "#E5E5E5",
    200: "#D8D8D8",
    300: "#C5C5C5",
    400: "#A2A2A2",
    500: "#787878",
    600: "#5A5A5A",
  },
  white: "#FFFFFF",
  black: "#171719",
  stressRed: "#F73435",
});

export default theme;