import { Box, BoxProps, Button, Container, Flex, Heading, Icon, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import { Expo, gsap } from "gsap";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

export default function HeaderHome(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const imageRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const chevronRef1 = useRef(null);
  const ctaButton = useRef(null);

  useEffect(() => {
    // gsap.fromTo(boxRef1.current, { opacity: 0, y: -800, ease: Expo.easeIn }, { duration: 1, opacity: 1, y: 0, ease: Expo.easeInOut });
    // gsap.fromTo(boxRef2.current, { opacity: 0, y: -800, ease: Expo.easeInOut }, { delay: 0.5, duration: 1, opacity: 1, y: 0, ease: Expo.easeInOut });
    gsap.fromTo(imageRef.current, { opacity: 0, y: -400, ease: Expo.easeInOut }, { duration: 2, opacity: 1, y: 0, ease: Expo.easeInOut });

    gsap.fromTo(chevronRef1.current, { opacity: 0, y: -20, ease: Expo.easeInOut }, { duration: 1, opacity: 1, y: 0, repeat: -1, yoyo: true, ease: Expo.easeInOut });
  }, []);

  const clickAnimation = () => {
    gsap.to(ctaButton.current, {
      scale: 0.8,
      opacity: 0.8,
      duration: 0.2,
      repeat: 1,
      yoyo: true,
      onComplete: function () {
        gsap.to(ctaButton.current, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
        });
      },
    });
  };

  return (
    <Box {...props} as="header">
      <Container
        position="relative"
        maxW={containerMaxWidth}
        display="flex"
        marginY={mediumScreen ? "16vh" : "5vh"}
        justifyContent="space-between"
        flexDir={largeScreen ? "row" : "column-reverse"}
        rowGap="40px"
      >
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

            <Button className="start-now" marginTop="25px" size="lg" variant="solid" colorScheme="teal" ref={ctaButton} onClick={clickAnimation}>
              Daftar Sekarang!
            </Button>
          </Box>
        </Box>

        <Flex justifyContent="space-between" flexBasis={mediumScreen ? "48%" : "100%"}>
          {/* <Box ref={boxRef1} w={mediumScreen ? "3vw" : "3vw"} h="180vh" bg="green.500" position="absolute" top="-80vh" right="24vw" zIndex="-1"></Box>
          <Box ref={boxRef2} w={mediumScreen ? "3vw" : "3vw"} h="180vh" bg="gray.300" position="absolute" top="-80vh" right="28vw" zIndex="-1"></Box> */}
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

        <Box ref={chevronRef1} position="absolute" bottom="-20%" right="50%" display="flex" gap="9px" alignItems="center" height="fit-content" transform="rotate(90deg)">
          Scroll{" "}
          <Box height="fit-content" display="flex" alignItems="center">
            <Box as="span" display="flex" alignItems="center">
              <Icon as={HiOutlineChevronRight} w="12px" />
            </Box>
            <Box as="span" display="flex" alignItems="center">
              <Icon as={HiOutlineChevronRight} w="12px" />
            </Box>
            <Box as="span" display="flex" alignItems="center">
              <Icon as={HiOutlineChevronRight} w="12px" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
