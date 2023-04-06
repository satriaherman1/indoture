import { Box, Button, Container, Flex, Heading, List, ListItem, Text, useColorModeValue, useMediaQuery, Icon, BoxProps } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import { FaFacebookF, FaInstagram, FaPhone, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const footerBg = useColorModeValue("gray.900", "#202633");
  const joinUsBg = useColorModeValue("gray.800", "#191e29");
  return (
    <Box {...props} as="footer" paddingTop="50px" bg={footerBg} color="white">
      <Container maxW={containerMaxWidth}>
        <Flex justifyContent="space-between" flexDir={largeScreen ? "row" : "column"}>
          <Box flexBasis={largeScreen ? "37%" : mediumScreen ? "100%" : "100%"}>
            <Heading as="h4" size="lg">
              Cur
              <Box as="span" color="teal.500">
                ture
              </Box>
            </Heading>
            <Text mb="20px">Majukan UMKM Bersama</Text>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63416.47709345438!2d110.63127296805919!3d-6.58086131478393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7118d34b9ae3ab%3A0x9d3067f98797ae0f!2sJepara%2C%20Jepara%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1676528548009!5m2!1sen!2sid"
              className="gmaps"
              style={{ border: 0, width: "100%", height: "100%", maxHeight: "500px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Flex flexBasis={largeScreen ? "60%" : mediumScreen ? "100%" : "100%"} flexDir={largeScreen ? "column" : "column-reverse"} rowGap="25px">
            <Flex justifyContent="space-between" flexDir={mediumScreen ? "row" : "column"} rowGap="40px">
              <Box as="section">
                <Heading as="h4" size="md">
                  Tentang Kami
                </Heading>
                <List display="flex" flexDir="column" rowGap="10px" marginTop="20px">
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
                <List display="flex" flexDir="column" rowGap="10px" marginTop="20px">
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

            <Flex
              padding="20px 29px"
              borderRadius="10px"
              bg={joinUsBg}
              flexDir={mediumScreen ? "row" : "column"}
              justifyContent="space-between"
              alignItems={largeScreen ? "center" : "start"}
              rowGap="10px"
              rounded="md"
              mt="20px"
            >
              <Box as="section">
                <Heading color="white" size="md">
                  Gabung Sekarang!
                </Heading>
                <Text marginTop="5px">Mari bergabung dengan kami</Text>
              </Box>
              <Link to="/register">
                <Button colorScheme="teal">Daftar Sekarang!</Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>

      <Box paddingY="20px" textAlign="center" bg="gray.800" marginTop={mediumScreen ? "120px" : "40px"}>
        &copy; Muhammad Satria Herman 2023
      </Box>
    </Box>
  );
}
