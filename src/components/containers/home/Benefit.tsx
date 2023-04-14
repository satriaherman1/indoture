import { Box, BoxProps, Button, Container, Flex, Heading, Icon, Image, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import BenefitCard from "@src/components/fragments/benefit-card/BenefitCard";
import { IBenefitCardProps } from "@src/components/fragments/benefit-card/BenefitCardDeclare";
import RegistrationCard from "@src/components/fragments/registration-card/RegistrationCard";
import { boxShadow, containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoPeopleCircleOutline } from "react-icons/io5";

export default function Benefit(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  const descBg = useColorModeValue("white", "gray.800");
  const textSecondaryColor = useColorModeValue("gray.600", "white");

  const benefitData: IBenefitCardProps[] = [
    {
      icon: (
        <Box p="12px" w="fit-content" h="fit-content" rounded="full" bg="blue.50">
          {" "}
          <Icon as={IoPeopleCircleOutline} display="block" fontSize="34px" />{" "}
        </Box>
      ),
      title: "Relasi",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rerum fuga facere totam officiis repellat iure fugiat nam adipisci voluptatum.",
    },
    {
      icon: (
        <Box p="12px" w="fit-content" h="fit-content" rounded="full" bg="blue.50">
          {" "}
          <Icon as={IoPeopleCircleOutline} display="block" fontSize="34px" />{" "}
        </Box>
      ),
      title: "Pengalaman",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rerum fuga facere totam officiis repellat iure fugiat nam adipisci voluptatum.",
    },
    {
      icon: (
        <Box p="12px" w="fit-content" h="fit-content" rounded="full" bg="blue.50">
          {" "}
          <Icon as={IoPeopleCircleOutline} display="block" fontSize="34px" />{" "}
        </Box>
      ),
      title: "Relasi",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rerum fuga facere totam officiis repellat iure fugiat nam adipisci voluptatum.",
    },
  ];

  return (
    <Box {...props} marginTop={mediumScreen ? "120px" : "60px"} bg={descBg}>
      <Container maxW={containerMaxWidth}>
        <Text color="teal.500" fontWeight={700}>
          Keuntungan
        </Text>
        <Heading as="h1">Keuntungan Bergabung</Heading>

        <Flex mt="40px" columnGap="50px" justifyContent="space-between" flexDir={mediumScreen ? "row" : "column-reverse"} rowGap="50px" alignItems="center">
          {benefitData.map((benefit) => (
            <Box flexBasis={mediumScreen ? "32%" : "100%"}>
              <BenefitCard {...benefit} />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
