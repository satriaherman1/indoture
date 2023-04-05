import { Box, BoxProps, Button, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";

export default function JoinUs(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box {...props} marginTop="120px" bg="teal.700" py="30px">
      <Container maxW={containerMaxWidth}>
        <Box mx="auto" textAlign="center" color="white">
          <Heading size="xl">Mari Bergabung Bersama Kami</Heading>
          <Text mt="14px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quae ullam neque voluptatibus reprehenderit!</Text>
          <Button mt="12px" color="black">
            Gabung Sekarang!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
