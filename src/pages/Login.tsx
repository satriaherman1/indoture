import { useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import LoginForm from "@src/components/containers/Login/Form";
import Benefit from "@src/components/containers/home/Benefit";
import HeaderHome from "@src/components/containers/home/Header";
import HomeDesc from "@src/components/containers/home/HomeDesc";
import JoinUs from "@src/components/containers/home/JoinUs";
import Registration from "@src/components/containers/home/Registration";
import SmmPanel from "@src/components/containers/home/SmmPanel";

import Navbar from "@src/components/fragments/Navbar";
import { mediumBreakpoints } from "@src/definitions/variables";

export default function Login() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <>
      <LoginForm />
    </>
  );
}
