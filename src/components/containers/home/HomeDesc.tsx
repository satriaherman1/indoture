import { Box, BoxProps, Button, Container, Flex, Heading, Icon, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HomeDesc(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box {...props} marginTop="120px" bg="white">
      <Container maxW={containerMaxWidth}>
        <Flex columnGap="50px" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"} rowGap="50px" alignItems="center">
          <Box flexBasis={mediumScreen ? "50%" : "100%"}>
            <Image w={mediumScreen ? "90%" : "100%"} src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680684712/Indoture/image2_go2kci.png" fallbackSrc={fallbackSrc} />
          </Box>

          <Box flexBasis={mediumScreen ? "50%" : "100%"}>
            <Text color="teal.500" fontWeight={700}>
              Deskripsi
            </Text>
            <Heading as="h1">Apa itu Indoture</Heading>

            <Text mt="25px" color="gray.600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus sapiente perspiciatis aspernatur ad qui cupiditate dolores tempora, et corrupti saepe veniam, voluptates rerum
              quas sint perferendis quidem esse laborum beatae deserunt officia excepturi commodi?
            </Text>

            <Flex marginTop="20px" columnGap="14px">
              <Button size="sm" colorScheme="gray">
                <Icon as={FaFacebookF} />
              </Button>
              <Button size="sm" colorScheme="gray">
                <Icon as={FaInstagram} />
              </Button>
              <Button size="sm" colorScheme="gray">
                <Icon as={FaTwitter} />
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
