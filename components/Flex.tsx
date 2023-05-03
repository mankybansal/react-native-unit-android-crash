import styled from "@emotion/native";
import React from "react";
import { ViewProps } from "react-native";

export interface StyledViewProps {
  // Whyyy https://stackoverflow.com/questions/60479653/invalid-ygdirection-row-should-be-one-of-inherit-ltr-rtl-react-native
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | "start"
    | "end";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

const StyledView = styled.View<StyledViewProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
`;

export interface FlexProps extends StyledViewProps, ViewProps {
  column?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

export const Flex = ({
  flexDirection = "row",
  column,
  children,
  ...restProps
}: FlexProps) => (
  <StyledView flexDirection={column ? "column" : flexDirection} {...restProps}>
    {children}
  </StyledView>
);
