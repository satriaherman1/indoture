import Benefit from "@src/components/containers/home/Benefit";
import HeaderHome from "@src/components/containers/home/Header";
import SmmPanel from "@src/components/containers/home/SmmPanel";
import Description from "@src/components/containers/home/description";
import Navbar from "@src/components/fragments/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderHome />
      <SmmPanel />
      <Benefit />
      <Description />
    </>
  );
}
