import { Box, BoxProps, Container, Flex, Heading, Icon, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import BenefitCard from "@src/components/fragments/benefit-card/BenefitCard";
import { IBenefitCardProps } from "@src/components/fragments/benefit-card/BenefitCardDeclare";
import { containerMaxWidth, mediumBreakpoints } from "@src/definitions/variables";
import { AiFillProject } from "react-icons/ai";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { RiBook2Fill } from "react-icons/ri";

export default function Benefit(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  const descBg = useColorModeValue("white", "gray.800");
  const textSecondaryColor = useColorModeValue("gray.600", "white");

  const benefitData: IBenefitCardProps[] = [
    {
      icon: (
        <Box p="12px" w="fit-content" h="fit-content" rounded="full" bg="blue.50">
          {" "}
          <Icon as={IoPeopleCircleOutline} display="block" color="blue.500" fontSize="34px" />{" "}
        </Box>
      ),
      title: "Relasi",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rerum fuga facere totam officiis repellat iure fugiat nam adipisci voluptatum.",
    },
    {
      icon: (
        <Box p="12px" w="fit-content" h="fit-content" rounded="full" bg="teal.50">
          {" "}
          <Icon as={RiBook2Fill} display="block" color="teal.500" fontSize="34px" />{" "}
        </Box>
      ),
      title: "Pengalaman",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rerum fuga facere totam officiis repellat iure fugiat nam adipisci voluptatum.",
    },
    {
      icon: (
        <Box p="12px" w="fit-content" h="fit-content" rounded="full" bg="red.50">
          {" "}
          <Icon as={AiFillProject} display="block" color="red.500" fontSize="34px" />{" "}
        </Box>
      ),
      title: "Portfolio",
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
