import { Box, BoxProps, Button, Container, Flex, Heading, Icon, List, ListItem, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const footerBg = useColorModeValue("blackAlpha.900", "#202633");

  return (
    <Box {...props} as="footer" paddingTop="50px" bg={footerBg} color="white">
      <Container maxW={containerMaxWidth}>
        <Flex justifyContent="space-between" flexDir={largeScreen ? "row" : "column"}>
          <Box flexBasis={largeScreen ? "30%" : mediumScreen ? "100%" : "100%"}>
            <Heading as="h4" size="lg">
              Indo
              <Box as="span" color="teal.500">
                ture
              </Box>
            </Heading>
            <Text my="20px" color="whiteAlpha.700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat id eos nihil sint expedita suscipit in sapiente quia, debitis reprehenderit?
            </Text>
          </Box>
          <Flex flexBasis={largeScreen ? "60%" : mediumScreen ? "100%" : "100%"} flexDir={largeScreen ? "column" : "column-reverse"} rowGap="25px">
            <Flex justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"} rowGap="40px">
              <Box as="section">
                <Heading as="h4" size="md">
                  Tentang Kami
                </Heading>
                <List display="flex" flexDir="column" rowGap="10px" marginTop="20px" color="whiteAlpha.700">
                  <ListItem>
                    <a href="">Kebijakan dan Privasi</a>
                  </ListItem>
                  <ListItem>
                    <a href="">Kisah Sukses</a>
                  </ListItem>
                  <ListItem>
                    <a href="">Syarat dan Ketentuan</a>
                  </ListItem>
                </List>
              </Box>
              <Box as="section">
                <Heading as="h4" size="md">
                  Hubungi Kami
                </Heading>
                <List display="flex" flexDir="column" rowGap="10px" marginTop="20px" color="whiteAlpha.700">
                  <ListItem as="a" href="/" display="flex" alignItems="center" columnGap="10px">
                    <Icon as={HiOutlineMail} /> curture@gmail.com
                  </ListItem>
                  <ListItem as="a" href="/" display="flex" alignItems="center" columnGap="10px">
                    <Icon as={FaPhoneAlt} /> +6277634589
                  </ListItem>
                  <ListItem as="a" href="/" display="flex" alignItems="center" columnGap="10px">
                    <Icon as={FaInstagram} /> _invest_ku
                  </ListItem>
                </List>
              </Box>
              <Box as="section">
                <Heading as="h4" size="md">
                  Sosial Media
                </Heading>
                <List display="flex" gap="8px" marginTop="20px">
                  <Button colorScheme="facebook" size="sm">
                    <Icon as={FaFacebookF} />
                  </Button>
                  <Button colorScheme="pink" size="sm">
                    <Icon as={FaInstagram} />
                  </Button>
                  <Button colorScheme="whatsapp" size="sm">
                    <Icon as={FaWhatsapp} />
                  </Button>
                </List>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>

      <Box paddingY="20px" textAlign="center" bg="blackAlpha.600" marginTop="30px">
        &copy; Muhammad Satria Herman 2023
      </Box>
    </Box>
  );
}
