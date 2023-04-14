import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { IBenefitCardProps } from "@src/components/fragments/benefit-card/BenefitCardDeclare";
import { boxShadow } from "@src/definitions/variables";

export default function BenefitCard(props: IBenefitCardProps) {
  const { title, description, icon } = props;
  const bg = useColorModeValue("white", "gray.700");
  const shadow = useColorModeValue(boxShadow, "none");
  const textSecondaryColor = useColorModeValue("gray.500", "whiteAlpha.700");
  return (
    <Box {...props} padding="20px 24px" borderRadius="14px" bg={bg} shadow={shadow}>
      <Flex flexDir="column" columnGap="16px">
        {icon}

        <Box mt="20px">
          <Heading fontSize="24px">{title}</Heading>
          <Text mt="10px" color={textSecondaryColor}>
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
