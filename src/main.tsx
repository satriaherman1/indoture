import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./app-router";
import { theme } from "@src/definitions/theme";
import "@src/styles/globals.css";
import DarkButton from "@src/components/common/DarkButton";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={appRouter} />
      <DarkButton />
    </ChakraProvider>
  </React.StrictMode>,
);
