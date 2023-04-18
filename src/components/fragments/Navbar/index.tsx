import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Image,
  List,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
// import Switch from "@src/components/common/Switch";
import { navigationList } from "@src/components/fragments/Navbar/data";
import { boxShadowColor, containerMaxWidth, logoSrc, mediumBreakpoints } from "@src/definitions/variables";
import { useEffect, useRef, useState } from "react";
import "./style.css";

import useGsapNavbar, { IGsapNavbar } from "@src/components/fragments/Navbar/hooks/gsap";
import { useAuth } from "@src/lib/context/firebase/useAuth";
import { Link } from "react-router-dom";

import { AiOutlinePoweroff } from "react-icons/ai";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isBg, setIsBg] = useState<boolean>(true);

  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const bg = useColorModeValue("white", "#282e39");
  const linkActiveColor = useColorModeValue("teal.500", "teal.300");
  const boxShadow = useColorModeValue(boxShadowColor, "none");

  const smallNavRef = useRef(null);
  const smallNavBgRef = useRef(null);

  const setBgNavbar = () => {
    window.scrollY > 20 ? setIsBg(true) : setIsBg(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", setBgNavbar);
    return () => window.removeEventListener("scroll", setBgNavbar);
  });

  const gsapNavbarProps: IGsapNavbar = {
    smallNavBgRef: smallNavBgRef,
    smallNavRef: smallNavRef,
    openNav: openNav,
  };

  useGsapNavbar(gsapNavbarProps);

  const { authUser, signOut } = useAuth() as any;

  console.log(authUser);

  return (
    <Box as="nav" paddingY="20px" fontWeight={500} className="navbar" bg={isBg ? bg : "unset"} boxShadow={isBg ? `0 0 30px ${boxShadow}` : "unset"} position="fixed" top="0px" w="full" zIndex={999}>
      <Container maxW={containerMaxWidth} display="flex" alignItems="center" justifyContent="space-between">
        <Image w="35px" src={logoSrc} />

        <List display={mediumScreen ? "flex" : "none"} columnGap="40px" textTransform="capitalize">
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

        {mediumScreen && authUser !== null ? (
          <Box pos="relative">
            <Popover>
              <PopoverTrigger>
                <Image rounded="full" src={authUser?.photoURL} w="30px" h="30px" />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{authUser?.displayName}</PopoverHeader>
                <PopoverBody>
                  <Button colorScheme="red" onClick={signOut}>
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        ) : (
          <Box display={mediumScreen ? "flex" : "none"}>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </Box>
        )}

        <Box as="button" className="nav-button" display={mediumScreen ? "none" : "flex"} flexDir="column" onClick={() => setOpenNav(!openNav)}>
          <HamburgerIcon fontSize="29px" />
        </Box>
      </Container>

      {!mediumScreen && (
        <>
          <Box ref={smallNavBgRef} bg={bg} position="fixed" w="100vw" h={0} left="0" zIndex={997}></Box>
          <Box ref={smallNavRef} bg="none" pos="fixed" height={0} top="69px" left={0} overflow="hidden" zIndex={997}>
            <Divider />
            <List display="flex" flexDir="column" marginTop="20px">
              {navigationList.map((nav, key) => (
                <>
                  {nav.url == location.pathname ? (
                    <ListItem className={`nav-list-small nav-list-small-gsap-active`} padding="19px 20px" key={nav.url} color={linkActiveColor}>
                      <Link to={nav.url}>{nav.name}</Link>
                    </ListItem>
                  ) : (
                    <ListItem className={`nav-list-small nav-list-small-gsap-${key}`} padding="19px 20px" key={nav.url}>
                      <Link to={nav.url}>{nav.name}</Link>
                    </ListItem>
                  )}
                </>
              ))}
            </List>

            <Box position="absolute" left="22px" bottom="10vh">
              {authUser !== null ? (
                <Flex gap="20px" alignItems="center">
                  <Image rounded="full" src={authUser?.photoURL} w="30px" h="30px" />
                  <Box>
                    <Text fontSize="15px" lineHeight="normal">
                      {authUser?.displayName}
                    </Text>
                    <Text fontSize="12px" lineHeight="normal">
                      Online
                    </Text>
                  </Box>

                  <Button colorScheme="red" ml="auto">
                    <Icon as={AiOutlinePoweroff} />
                  </Button>
                </Flex>
              ) : (
                <Link to="/login">
                  <Button colorScheme="teal">Login</Button>
                </Link>
              )}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
