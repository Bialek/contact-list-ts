import React, { PropsWithChildren } from "react";
import { StyledFlex, StyledFlexProps } from "./flex.style";

const Flex = ({
  direction,
  gap,
  alignItems,
  children,
}: PropsWithChildren<StyledFlexProps>): JSX.Element => (
  <StyledFlex direction={direction} gap={gap} alignItems={alignItems}>
    {children}
  </StyledFlex>
);

export default Flex;
