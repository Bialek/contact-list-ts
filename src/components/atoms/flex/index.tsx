import React, { PropsWithChildren } from "react";
import { StyledFlex, StyledFlexProps } from "./flex.style";

const Flex = ({
  direction,
  gap,
  children,
}: PropsWithChildren<StyledFlexProps>): JSX.Element => (
  <StyledFlex direction={direction} gap={gap}>
    {children}
  </StyledFlex>
);

export default Flex;
