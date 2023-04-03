import { extendTheme } from "@chakra-ui/react";

const colorConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: {
      500: "#0C6A93",
    },
    dark: {
      600: "#1a202d",
    },
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    box: `'Poppins', sans-serif`,
    text: `'Poppins', sans-serif`,
  },
  ...colorConfig,
});

export { theme };
