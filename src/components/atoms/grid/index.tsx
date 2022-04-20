import React, { ReactNode } from "react";
import { StyledGrid } from "./grid.style";

type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props): JSX.Element => (
  <StyledGrid>{children}</StyledGrid>
);

export default Grid;
