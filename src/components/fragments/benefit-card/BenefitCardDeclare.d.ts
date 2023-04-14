import { BoxProps } from "@chakra-ui/react";
import React from "react";

interface IBenefitCardProps extends BoxProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export { IBenefitCardProps };
