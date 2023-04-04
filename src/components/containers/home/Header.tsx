import { Box, BoxProps, Button, Container, Flex, Heading, Icon, Image, ImageProps, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import { Expo, TweenMax, gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Tween } from "react-gsap";

export default function HeaderHome(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const imageRef = useRef(null);
  const ctaButton = useRef(null);
  const boxImageRef = useRef(null);

  const statistic1Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(boxImageRef.current, { opacity: 0, width: 0, ease: Expo.easeIn }, { duration: 2, opacity: 1, width: "100%", ease: Expo.easeInOut });
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.4, ease: Expo.easeInOut }, { duration: 2, opacity: 1, scale: 1, ease: Expo.easeInOut });
    TweenMax.to(statistic1Ref.current, 2, {
      value: 500,
      // Animasi properti 'ease' dari lambat ke cepat
      ease: "power4.out",
    });
  }, []);

  const clickAnimation = () => {
    gsap.to(ctaButton.current, 0.2, {
      scale: 0.8,
      opacity: 0.8,
      duration: 0.2,

      onComplete: function () {
        gsap.to(ctaButton.current, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
        });
      },
    });
  };

  const imgProperty: ImageProps = {
    loading: "lazy",
    display: "block",
    mx: "auto",

    fallbackSrc: "https://res.cloudinary.com/dbg3ckwtz/image/upload/v1677231020/investment-competition/fallback_qvvcgt.svg",
  };

  return (
    <Box {...props} as="header" marginTop="140px">
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
          <Box marginTop="20px">
            <Heading size="2xl">Lestarikan Budaya Daerahmu dan Kenalkan Kepada Dunia Anda</Heading>
            <Text marginTop="25px" textTransform="capitalize">
              Gabung bersama kami di komunitas budaya untuk melestarikan Budaya daerahmu dan membawanya ke kancah dunia!
            </Text>

            <Button className="start-now" marginTop="25px" size="lg" variant="solid" colorScheme="teal" ref={ctaButton} onClick={clickAnimation}>
              Daftar Sekarang!
            </Button>

            <Flex marginTop="50px" gap="40px">
              <Box position="relative">
                <Tween ref={statistic1Ref} from={{ value: 0 }}>
                  <Heading>{0}</Heading>
                </Tween>

                <Text>Anggota</Text>
                <Image src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680610705/Indoture/decorator_lup2rj.png" position="absolute" top="-8px" left="-8px" w="40px" zIndex="-1" />
              </Box>
              <Box position="relative">
                <Heading>20</Heading>
                <Text>Prestasi</Text>
                <Image src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680610161/Indoture/statistic-decorator2_o3rfzx.png" position="absolute" top="-8px" left="-8px" w="40px" zIndex="-1" />
              </Box>
              <Box position="relative">
                <Heading>10 </Heading>
                <Text>Tahun Berdiri</Text>
                <Image src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680610273/Indoture/decorator_smiipk.png" position="absolute" top="-8px" left="-8px" w="40px" zIndex="-1" />
              </Box>
            </Flex>
          </Box>
        </Box>

        <Flex gap="45px" justifyContent="space-between" flexBasis={mediumScreen ? "48%" : "100%"} position="relative">
          {/* <Box ref={boxRef1} w={mediumScreen ? "3vw" : "3vw"} h="180vh" bg="green.500" position="absolute" top="-80vh" right="24vw" zIndex="-1"></Box> */}
          <Box ref={boxImageRef} w={mediumScreen ? "40vw" : "32vw"} h={mediumScreen ? "170vh" : "150vh"} bg="teal.600" position="absolute" top="-80vh" right="-10vw" zIndex="-1"></Box>
          <Flex flexWrap="wrap">
            <Image ref={imageRef} src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680608404/Indoture/header1_htnexi.png" {...imgProperty} />
          </Flex>
        </Flex>

        {/* <Box ref={chevronRef1} position="absolute" bottom="-20%" right="50%" display="flex" gap="9px" alignItems="center" height="fit-content" transform="rotate(90deg)">
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
        </Box> */}
      </Container>
    </Box>
  );
}
