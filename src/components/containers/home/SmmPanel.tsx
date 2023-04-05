import { Box, BoxProps, Flex, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import { boxShadow, mediumBreakpoints } from "@src/definitions/variables";
import { BsPeopleFill } from "react-icons/bs";
import { RiBook2Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";

export default function SmmPanel(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  return (
    <Box {...props} w="90%" mx="auto" boxShadow={boxShadow} bg="white" p="30px" rounded="md">
      <Flex flexDir={mediumScreen ? "row" : "column"} rowGap="29px" justifyContent="space-around">
        <Box display="flex" columnGap="20px" alignItems="center">
          <Box padding="12px" h="fit-content" rounded="full" bg="teal.50">
            <Icon display="block" color="teal.500" fontSize="30px" w="30px" h="30px" as={BsPeopleFill} />
          </Box>
          <Box>
            <Heading size="md">Relasi</Heading>
            <Text color="gray.600">relasi antar anggota</Text>
          </Box>
        </Box>
        <Box display="flex" columnGap="20px" alignItems="center">
          <Box padding="12px" h="fit-content" rounded="full" bg="facebook.50">
            <Icon display="block" color="facebook.500" fontSize="30px" w="30px" h="30px" as={RiBook2Fill} />
          </Box>
          <Box>
            <Heading size="md">Ilmu</Heading>
            <Text color="gray.600">Ilmu Yang Bermanfaat</Text>
          </Box>
        </Box>
        <Box display="flex" columnGap="20px" alignItems="center">
          <Box padding="12px" h="fit-content" rounded="full" bg="pink.50">
            <Icon display="block" color="pink.500" fontSize="30px" w="30px" h="30px" as={AiFillProject} />
          </Box>
          <Box>
            <Heading size="md">Portfolio</Heading>
            <Text color="gray.600">Portfolio Karir</Text>
          </Box>
        </Box>
        <Box display="flex" columnGap="20px" alignItems="center">
          <Box padding="12px" h="fit-content" rounded="full" bg="teal.50">
            <Icon display="block" color="teal.500" fontSize="30px" w="30px" h="30px" as={BsPeopleFill} />
          </Box>
          <Box>
            <Heading size="md">Relasi</Heading>
            <Text color="gray.600">relasi antar anggota</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
