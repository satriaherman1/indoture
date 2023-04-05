import Benefit from "@src/components/containers/home/Benefit";
import HeaderHome from "@src/components/containers/home/Header";
import HomeDesc from "@src/components/containers/home/HomeDesc";
import JoinUs from "@src/components/containers/home/JoinUs";
import SmmPanel from "@src/components/containers/home/SmmPanel";

import Navbar from "@src/components/fragments/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderHome />
      <SmmPanel />
      <Benefit />
      <HomeDesc />
      <JoinUs />
    </>
  );
}
