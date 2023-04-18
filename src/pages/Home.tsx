import { useMediaQuery } from "@chakra-ui/react";
import Footer from "@src/components/common/Footer";
import Benefit from "@src/components/containers/home/Benefit";
import FaQ from "@src/components/containers/home/FaQ";
import HeaderHome from "@src/components/containers/home/Header";
import HomeDesc from "@src/components/containers/home/HomeDesc";
import JoinUs from "@src/components/containers/home/JoinUs";
import SmmPanel from "@src/components/containers/home/SmmPanel";
import Testimonials from "@src/components/containers/home/Testimonials";

import Navbar from "@src/components/fragments/Navbar";
import { mediumBreakpoints } from "@src/definitions/variables";

export default function Home() {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <>
      <Navbar />
      <HeaderHome />
      <SmmPanel />
      <HomeDesc />
      <JoinUs />
      <Benefit />
      <Testimonials />
      <FaQ />

      <Footer />
    </>
  );
}
