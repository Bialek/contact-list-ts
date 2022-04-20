import { Sizes } from "style/theme";
import styled from "styled-components";

export interface StyledFlexProps {
  direction?: "row" | "column";
  gap?: keyof Sizes;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap && props.theme.spaces[props.gap]};
`;
