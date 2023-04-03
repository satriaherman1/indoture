import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app-router";
import "virtual:windi.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./app-router";
import { theme } from "@src/definitions/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={appRouter} />
    </ChakraProvider>
  </React.StrictMode>,
);
