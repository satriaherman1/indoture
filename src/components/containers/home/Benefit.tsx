import { Box, BoxProps, Container, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";

export default function Benefit(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box {...props} marginTop="120px" bg="white">
      <Container maxW={containerMaxWidth}>
        <Flex columnGap="50px" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"} rowGap="50px">
          <Flex flexDir={mediumScreen ? "row" : "column"} padding="20px" flexBasis={mediumScreen ? "50%" : "100%"} rounded="md" border="2px solid #eaeaea" columnGap="20px">
            <Image
              w={mediumScreen ? "280px" : "100%"}
              display="inline-block"
              marginTop="-40px"
              marginLeft={mediumScreen ? "30px" : 0}
              src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1680607828/Indoture/header2_s7f4rb.png"
              fallbackSrc={fallbackSrc}
            />
            <Box>
              <Heading size="lg" marginTop="20px">
                Menyatukan Budaya Indonesia
              </Heading>
              <Text mt="12px" color="gray.600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, neque!
              </Text>
            </Box>
          </Flex>

          <Flex flexDir="column" flexBasis={mediumScreen ? "40%" : "100%"}>
            <Flex paddingY="30px" borderTop="2px solid #eeeeee" gap="19px">
              <Text fontWeight={700}>Juara 1 Tari Modern</Text>
              <Text>Lomba tari modern di MKKS Nasional Jakarta</Text>
              {mediumScreen && <Text>2022</Text>}
            </Flex>
            <Flex paddingY="30px" borderTop="2px solid #eeeeee" gap="19px">
              <Text fontWeight={700}>Juara 1 Tari Modern</Text>
              <Text>Lomba tari modern di MKKS Nasional Jakarta</Text>
              {mediumScreen && <Text>2022</Text>}
            </Flex>
            <Flex paddingY="30px" borderTop="2px solid #eeeeee" gap="19px">
              <Text fontWeight={700}>Juara 1 Tari Modern</Text>
              <Text>Lomba tari modern di MKKS Nasional Jakarta</Text>
              {mediumScreen && <Text>2022</Text>}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
