import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IRegistrationCardProps } from "@src/components/fragments/registration-card/RegistCard";

export default function RegistrationCard(props: IRegistrationCardProps) {
  const { title, description } = props;
  return (
    <Box {...props} padding="12px 20px" borderRadius="14px">
      <Flex columnGap="16px">
        <StarIcon fontSize="15px" mt="5px" />

        <Box>
          <Heading fontSize="24px">{title}</Heading>
          <Text color="gray.500">{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
