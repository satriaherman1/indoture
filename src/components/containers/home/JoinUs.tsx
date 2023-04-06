import { Avatar, AvatarGroup, Box, BoxProps, Button, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";

export default function JoinUs(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box {...props} marginTop="120px" bg="teal.700" py={mediumScreen ? "70px" : "30px"}>
      <Container maxW={containerMaxWidth}>
        <Box mx="auto" textAlign="center" color="white" maxW="700px">
          <AvatarGroup size="md" max={2} justifyContent="center">
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>

          <Heading size="xl" mt="20px">
            Mari Bergabung Bersama Kami
          </Heading>
          <Text mt="14px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quae ullam neque voluptatibus reprehenderit!</Text>
          <Button bg="white" mt="12px" color="black">
            Gabung Sekarang!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
