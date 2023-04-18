import { useMediaQuery } from "@chakra-ui/react";
import LoginForm from "@src/components/containers/Login/Form";

import { mediumBreakpoints } from "@src/definitions/variables";

export default function Login() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <>
      <LoginForm />
    </>
  );
}
