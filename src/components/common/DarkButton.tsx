import { MoonIcon } from "@chakra-ui/icons";
import { Box, useColorMode } from "@chakra-ui/react";
import { gsap } from "gsap";
import { useRef } from "react";

export default function DarkButton() {
  const bgDarkButtonRef = useRef(null);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    if (colorMode == "light") {
      gsap.fromTo(
        bgDarkButtonRef.current,
        {
          bottom: "6%",
          right: "27px",
        },
        {
          duration: 0.8,
          width: "100vw",
          height: "100%",
          borderRadius: 0,
          top: 0,
          left: 0,
          display: "block",

          onComplete: () => {
            gsap.to(bgDarkButtonRef.current, 0.2, {
              delay: 0.2,
              top: 0,
              left: 0,
              opacity: 0,
              display: "none",
            });
            setTimeout(() => toggleColorMode(), 400);
          },
        },
      );
    } else {
      gsap.to(bgDarkButtonRef.current, 0.8, {
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        top: "unset",
        bottom: "6%",
        right: "27px",
        left: "unset",
        display: "block",
        opacity: 1,

        onComplete: () => {
          gsap.to(bgDarkButtonRef.current, 0.2, {
            delay: 0.2,
            top: "unset",
            bottom: "6%",
            right: "27px",
            left: "unset",
          });
          setTimeout(() => toggleColorMode(), 400);
        },
      });
    }
  };
  return (
    <>
      <Box onClick={handleClick} as="button" padding="12px 16px" bg="blackAlpha.900" rounded="full" h="fit-content" zIndex={99} pos="fixed" bottom="5%" right="25">
        <MoonIcon h="20px" w="20px" fontSize="20px" color="white" />
      </Box>
      <Box ref={bgDarkButtonRef} position="fixed" h="20px" w="20px" bg="blackAlpha.900" bottom="6%" right="27" borderRadius="100%" zIndex={4} padding="12px 16px">
        .
      </Box>
    </>
  );
}
