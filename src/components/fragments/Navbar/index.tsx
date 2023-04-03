import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Flex, Heading, Icon, List, ListItem, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
// import Switch from "@src/components/common/Switch";
import { navigationList } from "@src/components/fragments/Navbar/data";
import { boxShadowColor, containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import { useEffect, useState } from "react";
import "./style.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isBg, setIsBg] = useState<boolean>(false);

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const bg = useColorModeValue("white", "#282e39");
  const linkActiveColor = useColorModeValue("teal.500", "teal.300");
  const boxShadow = useColorModeValue(boxShadowColor, "none");

  const setBgNavbar = () => {
    window.scrollY > 20 ? setIsBg(true) : setIsBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", setBgNavbar);
    return () => window.removeEventListener("scroll", setBgNavbar);
  });

  return (
    <Box as="nav" paddingY="20px" fontWeight={500} className="navbar" bg={isBg ? bg : "unset"} boxShadow={isBg ? `0 0 30px ${boxShadow}` : "unset"} position="fixed" top="0px" w="full" zIndex={998}>
      <Container maxW={containerMaxWidth} display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h4" size="md">
          Invest
          <Box as="span" color="primary.500">
            KU
          </Box>
        </Heading>

        <List display={mediumScreen ? "flex" : "none"} columnGap="40px" textTransform="uppercase">
          {navigationList.map((nav) => (
            <>
              {nav.url == location.pathname ? (
                <ListItem key={nav.url} color={linkActiveColor}>
                  <Link to={nav.url}>{nav.name}</Link>
                </ListItem>
              ) : (
                <ListItem key={nav.url}>
                  <Link to={nav.url}>{nav.name}</Link>
                </ListItem>
              )}
            </>
          ))}
        </List>

        <Box display={mediumScreen ? "flex" : "none"}>
          <Button>Login</Button>
        </Box>

        <Box as="button" className="nav-button" display={mediumScreen ? "none" : "flex"} flexDir="column" onClick={() => setOpenNav(true)}>
          <HamburgerIcon fontSize="29px" />
        </Box>
      </Container>

      {!mediumScreen && (
        <Box bg={bg} pos="fixed" top={0} left={openNav ? 0 : "-100vw"} h="100vh" w="100vw" transition="0.3s" zIndex={999}>
          <Flex justifyContent="space-between">
            <Heading as="h4" size="md" margin="20px">
              Invest
              <Box as="span" color="primary.500">
                KU
              </Box>
            </Heading>

            <Box as="button" marginRight="22px" onClick={() => setOpenNav(false)}>
              <CloseIcon />
            </Box>
          </Flex>
          <Divider />
          <List display="flex" flexDir="column" marginTop="20px">
            {navigationList.map((nav) => (
              <>
                {nav.url == location.pathname ? (
                  <ListItem className="nav-list-small" padding="19px 20px" key={nav.url} color={linkActiveColor}>
                    <Link to={nav.url}>{nav.name}</Link>
                  </ListItem>
                ) : (
                  <ListItem className="nav-list-small" padding="19px 20px" key={nav.url}>
                    <Link to={nav.url}>{nav.name}</Link>
                  </ListItem>
                )}
              </>
            ))}
          </List>

          {/* <Box position="absolute" left="22px" bottom="10vh">
            <Switch />
          </Box> */}
        </Box>
      )}
    </Box>
  );
}
