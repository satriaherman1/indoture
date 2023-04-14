import { Box, BoxProps } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "@src/components/containers/Login/styles.scss";

export default function FormDecorator() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  const element = [box1Ref, box2Ref, box3Ref, box4Ref];

  const styles: BoxProps = {
    position: "fixed",
    top: "10vh",
    w: "90px",
    h: "90px",
    background: "rgba( 255, 255, 255, 0.2 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 8px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  };

  const resetAnimation = (ref: typeof box1Ref) => {
    gsap.set(ref.current, { opacity: 0, y: "120vh" });
  };
  useEffect(() => {
    element.map((el, key) => {
      gsap.fromTo(
        el.current,
        {
          top: "120vh",
          opacity: 0,
        },
        {
          opacity: 1,
          top: "-40vh",
          duration: 3,
          repeat: -1,
          force3D: true,
          onComplete: () => resetAnimation(el),
        },
      );
    });
  }, []);
  return (
    <div className="bubbles">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div>
  );
}
