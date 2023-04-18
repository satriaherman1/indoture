import { Box, BoxProps, Container, Divider, Flex, Heading, Icon, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, largeBreakpoints, mediumBreakpoints } from "@src/definitions/variables";
import { ImQuotesLeft } from "react-icons/im";
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

  const testimonialData = [
    {
      name: "Ryan Florence",
      title: "Software Developer",
      imageUrl: "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?h=350&auto=compress&cs=tinysrgb",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero perspiciatis minus aspernatur nisi expedita delectus quo quas deserunt dolore!",
    },
    {
      name: "Ryan Florence",
      title: "Software Developer",
      imageUrl: "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?h=350&auto=compress&cs=tinysrgb",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero perspiciatis minus aspernatur nisi expedita delectus quo quas deserunt dolore!",
    },
    {
      name: "Ryan Florence",
      title: "Software Developer",
      imageUrl: "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?h=350&auto=compress&cs=tinysrgb",
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt libero perspiciatis minus aspernatur nisi expedita delectus quo quas deserunt dolore!",
    },
  ];

  return (
    <Box {...props} marginTop="120px" bg="gray.100" py={mediumScreen ? "70px" : "30px"} {...bgImg}>
      <Box pos="absolute" bg="teal.900" w="100%" h="100%" top={0} left={0} opacity="0.9"></Box>
      <Container maxW={containerMaxWidth} pos="relative" zIndex={3}>
        <Box mx="auto" bg="teal.700" color="white" rounded="lg" p="30px">
          <Flex justifyContent="space-between" alignItems="center" flexDir={largeScreen ? "row" : "column"} gap="20px">
            <Box flexBasis="30%">
              <Heading>Apa kata mereka?</Heading>
              <Text mt="14px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui dignissimos, quas aperiam ullam accusantium nam nostrum quis minima dicta?</Text>
            </Box>

            <Box pos="relative" width={largeScreen ? "65%" : "100%"} color="blackAlpha.800">
              <Swiper navigation spaceBetween={30} slidesPerView={largeScreen ? 2 : 1} modules={[Pagination]}>
                {testimonialData.map((data) => (
                  <SwiperSlide>
                    <Box w="100%" bg="white" borderRadius="10px" pos="relative" overflow="visible">
                      <Flex justifyContent="center" alignItems="center" w="46px" h="46px" color="white" fontSize="24px" pos="absolute" bg="blue.500" rounded="full" top="45%" left="80%">
                        <Icon as={ImQuotesLeft} />
                      </Flex>

                      <Image borderTopRadius="10px" display="inline-block" src={data.imageUrl} />

                      <Box p="20px">
                        <Box alignItems="center" gap="12px">
                          <Text fontWeight={700} fontSize="28px">
                            {data.name}
                          </Text>
                          <Text mt={0}>{data.title}</Text>
                        </Box>

                        <Divider my="12px" />
                        <Text color="gray.600">{data.testimonial}</Text>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
