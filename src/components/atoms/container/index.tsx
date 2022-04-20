import React, { ReactNode } from "react";
import { StyledContainer } from "./container.style";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props): JSX.Element => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
