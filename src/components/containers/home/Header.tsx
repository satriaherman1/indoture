import { Box, BoxProps, Button, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import { Expo, TweenLite, gsap } from "gsap";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

export default function HeaderHome(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const imageRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(boxRef1.current, { delay: 1, opacity: 0, y: -800, ease: Expo.easeIn }, { duration: 1, opacity: 1, y: 0, ease: Expo.easeInOut });
    gsap.fromTo(boxRef2.current, { delay: 2, opacity: 0, y: -800, ease: Expo.easeInOut }, { duration: 1, opacity: 1, y: 0, ease: Expo.easeInOut });
    gsap.fromTo(imageRef.current, { delay: 4, opacity: 0, y: -800, ease: Expo.easeInOut }, { duration: 2, opacity: 1, y: 0, ease: Expo.easeInOut });
  }, []);

  return (
    <Box {...props} as="header">
      <Container maxW={containerMaxWidth} display="flex" marginY={mediumScreen ? "16vh" : "5vh"} justifyContent="space-between" flexDir={largeScreen ? "row" : "column-reverse"} rowGap="40px">
        <Box display="flex" alignItems="center" flexBasis={mediumScreen ? "48%" : "100%"}>
          <Box>
            <Heading size="2xl">
              Temukan Modal Usaha untuk Bisnis{" "}
              <Box as="span" color="teal.500">
                UMKM
              </Box>{" "}
              Anda
            </Heading>
            <Text marginTop="25px" textTransform="capitalize">
              kini mencari modal usaha semudah membuka ponsel hp anda Bersama InvestKU. Cukup dengan mengisikan data UMKM anda dan tunggu verifikasi dari sistem kami untuk mendapatkan dana!
            </Text>
            <Link to="/register">
              <Button className="start-now" marginTop="25px" size="lg" variant="solid" colorScheme="teal">
                Daftar Sekarang!
              </Button>
            </Link>
          </Box>
        </Box>

        <Flex justifyContent="space-between" flexBasis={mediumScreen ? "48%" : "100%"}>
          <Box ref={boxRef1} w={mediumScreen ? "3vw" : "3vw"} h="180vh" bg="green.500" position="absolute" top="-80vh" right="24vw" zIndex="-1"></Box>
          <Box ref={boxRef2} w={mediumScreen ? "3vw" : "3vw"} h="180vh" bg="gray.300" position="absolute" top="-80vh" right="28vw" zIndex="-1"></Box>
          <Image
            ref={imageRef}
            src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680497518/Indoture/header_ljhsxn.png"
            loading="lazy"
            display="block"
            mx="auto"
            maxH="500px"
            fallbackSrc="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg"
          />
        </Flex>
      </Container>
    </Box>
  );
}
