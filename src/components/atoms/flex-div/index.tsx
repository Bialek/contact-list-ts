import React, { PropsWithChildren } from "react";
import { StyledFlexDiv, StyledFlexDivProps } from "./flex-div.style";

const FlexDiv = ({
  direction,
  gap,
  children,
}: PropsWithChildren<StyledFlexDivProps>): JSX.Element => (
  <StyledFlexDiv direction={direction} gap={gap}>
    {children}
  </StyledFlexDiv>
);

export default FlexDiv;
