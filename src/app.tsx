import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import appRouter from "@src/app-router";
import DarkButton from "@src/components/common/DarkButton";
import { theme } from "@src/definitions/theme";
import { AuthUserContext } from "@src/lib/context/firebase/useAuth";
import useFirebaseAuth from "@src/lib/useFirebaseAuth";
import { memo } from "react";
import { RouterProvider } from "react-router-dom";

function App() {
  const auth = useFirebaseAuth();
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthUserContext.Provider value={auth}>
        <RouterProvider router={appRouter} />
      </AuthUserContext.Provider>
      <DarkButton />
    </ChakraProvider>
  );
}

export default memo(App);
