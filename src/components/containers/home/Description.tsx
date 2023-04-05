import { Box, BoxProps, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";

export default function Description(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box {...props} marginTop="120px" bg="white">
      <Container maxW={containerMaxWidth}>
        <Flex columnGap="50px" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"} rowGap="50px">
          <Box flexBasis={mediumScreen ? "50%" : "100%"}>
            <Image w="90%" src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680684712/Indoture/image2_go2kci.png" fallbackSrc={fallbackSrc} />
          </Box>

          <Box flexBasis={mediumScreen ? "50%" : "100%"}>
            <Text color="teal.500">Deskripsi</Text>
            <Heading as="h1">Apa itu Indoture</Heading>

            <Text mt="25px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus sapiente perspiciatis aspernatur ad qui cupiditate dolores tempora, et corrupti saepe veniam, voluptates rerum
              quas sint perferendis quidem esse laborum beatae deserunt officia excepturi commodi?
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
