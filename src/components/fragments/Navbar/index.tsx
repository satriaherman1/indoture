import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Flex, Heading, Icon, List, ListItem, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
// import Switch from "@src/components/common/Switch";
import { navigationList } from "@src/components/fragments/Navbar/data";
import { boxShadowColor, containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import { useEffect, useRef, useState } from "react";
import "./style.css";

import { Link } from "react-router-dom";
import { gsap } from "gsap";

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

  useEffect(() => {
    if (openNav) {
      gsap.fromTo(smallNavBgRef.current, { opacity: 0 }, { borderRadius: 0, opacity: 1, width: "100vw", height: "90vh", top: "69px" });
      gsap.fromTo(
        smallNavRef.current,
        { width: 0, height: 0 },
        {
          width: "100vw",
          height: "90vh",
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-active",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-0",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-1",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
      gsap.fromTo(
        ".nav-list-small-gsap-2",
        {
          opacity: 0,
          marginTop: "20px",
        },
        {
          duration: 0.3,
          opacity: 1,
          marginTop: 0,
        },
      );
    } else {
      gsap.to(smallNavRef.current, {
        delay: 0.2,
        width: 0,
        height: 0,
      });
      gsap.to(smallNavBgRef.current, {
        delay: 0.2,
        opacity: 0,
        height: 0,
        top: 0,
      });

      // nav list
      gsap.to(".nav-list-small-gsap-active", 0.2, {
        duration: 0.2,
        opacity: 0,
        marginTop: "20px",
      });
      gsap.to(".nav-list-small-gsap-0", 0.2, {
        opacity: 0,
        marginTop: "20px",
      });

      gsap.to(".nav-list-small-gsap-1", 0.2, {
        opacity: 0,
        marginTop: "20px",
      });

      gsap.to(".nav-list-small-gsap-2", 0.2, {
        opacity: 0,
        marginTop: "20px",
      });
    }
  }, [openNav]);

  return (
    <Box as="nav" paddingY="20px" fontWeight={500} className="navbar" bg={isBg ? bg : "unset"} boxShadow={isBg ? `0 0 30px ${boxShadow}` : "unset"} position="fixed" top="0px" w="full" zIndex={999}>
      <Container maxW={containerMaxWidth} display="flex" alignItems="center" justifyContent="space-between">
        <Heading as="h4" size="md">
          Curtu
          <Box as="span" color="primary.500">
            re
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

        <Box as="button" className="nav-button" display={mediumScreen ? "none" : "flex"} flexDir="column" onClick={() => setOpenNav(!openNav)}>
          <HamburgerIcon fontSize="29px" />
        </Box>
      </Container>

      {!mediumScreen && (
        <>
          <Box ref={smallNavBgRef} bg={bg} position="fixed" w="100vw" left="0" zIndex={997}></Box>
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

            {/* <Box position="absolute" left="22px" bottom="10vh">
            <Switch />
          </Box> */}
          </Box>
        </>
      )}
    </Box>
  );
}
