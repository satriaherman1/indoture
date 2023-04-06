import { Box, BoxProps, Button, Container, Flex, Heading, Icon, Image, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import RegistrationCard from "@src/components/fragments/registration-card/RegistrationCard";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Registration(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  const descBg = useColorModeValue("white", "gray.800");
  const textSecondaryColor = useColorModeValue("gray.600", "white");

  return (
    <Box {...props} marginTop="120px" bg={descBg}>
      <Container maxW={containerMaxWidth}>
        <Flex columnGap="50px" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column-reverse"} rowGap="50px" alignItems="center">
          <Box flexBasis={mediumScreen ? "50%" : "100%"}>
            <Text color="teal.500" fontWeight={700}>
              Pendaftaran
            </Text>
            <Heading as="h1">Proses Pendaftaran</Heading>

            {/* <Text mt="25px" color={textSecondaryColor}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repudiandae. Lorem ipsum dolor sit.
            </Text> */}

            <RegistrationCard mt="20px" title="Mengisi formulir" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
            <RegistrationCard mt="20px" title="Mengisi formulir" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit." />
          </Box>
          <Box flexBasis={mediumScreen ? "50%" : "100%"}>
            <Image
              w={mediumScreen ? "90%" : "100%"}
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              fallbackSrc={fallbackSrc}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
