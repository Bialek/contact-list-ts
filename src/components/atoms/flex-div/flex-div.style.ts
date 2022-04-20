import { Sizes } from "style/theme";
import styled from "styled-components";

export interface StyledFlexDivProps {
  direction?: "row" | "column";
  gap?: keyof Sizes;
}

export const StyledFlexDiv = styled.div<StyledFlexDivProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap && props.theme.spaces[props.gap]};
`;
