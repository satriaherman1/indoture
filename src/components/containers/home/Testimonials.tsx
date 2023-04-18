import { Avatar, Box, BoxProps, Container, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  const [largeScreen] = useMediaQuery(largeBreakpoints);

  const bgImg: BoxProps = {
    bgImg: "https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <Box {...props} marginTop="120px" bg="gray.100" py={mediumScreen ? "70px" : "30px"} {...bgImg}>
      <Box pos="absolute" bg="teal.900" w="100%" h="100%" top={0} left={0} opacity="0.9"></Box>
      <Container maxW={containerMaxWidth} pos="relative" zIndex={3}>
        <Box mx="auto" bg="teal.700" color="white" rounded="lg" p="30px">
          <Flex justifyContent="space-between" flexDir={largeScreen ? "row" : "column"} gap="20px">
            <Box flexBasis="30%">
              <Heading>Apa kata mereka?</Heading>
              <Text mt="14px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui dignissimos, quas aperiam ullam accusantium nam nostrum quis minima dicta?</Text>
            </Box>

            <Box pos="relative" width={largeScreen ? "65%" : "100%"} color="blackAlpha.800">
              <Swiper navigation spaceBetween={30} slidesPerView={largeScreen ? 2 : 1} modules={[Pagination]}>
                <SwiperSlide>
                  <Box w="100%" bg="white" p="20px" borderRadius="20px" pos="relative" overflow="visible">
                    {/* <Box w="30px" h="30px" pos="absolute" bg="blue.500" rounded="full" top="-10px">
                      "
                    </Box> */}
                    <Text color="gray.700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero perspiciatis minus aspernatur nisi expedita delectus quo quas deserunt dolore!</Text>

                    <Flex borderTop="1px solid #eaeaea" mt="20px" pt="12px" alignItems="center" gap="12px">
                      <Avatar display="inline-block" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                      <Box>
                        <Text fontWeight={700}>Ryan Florence</Text>
                        <Text mt={0}>Software Developer </Text>
                      </Box>
                    </Flex>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box w="100%" bg="white" p="20px" borderRadius="20px" pos="relative" overflow="visible">
                    {/* <Box w="30px" h="30px" pos="absolute" bg="blue.500" rounded="full" top="-10px">
                      "
                    </Box> */}
                    <Text color="gray.700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero perspiciatis minus aspernatur nisi expedita delectus quo quas deserunt dolore!</Text>

                    <Flex borderTop="1px solid #eaeaea" mt="20px" pt="12px" alignItems="center" gap="12px">
                      <Avatar display="inline-block" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                      <Box>
                        <Text fontWeight={700}>Ryan Florence</Text>
                        <Text mt={0}>Software Developer </Text>
                      </Box>
                    </Flex>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
