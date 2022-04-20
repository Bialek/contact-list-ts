import { Colors, Sizes } from "style/theme";
import styled from "styled-components";

export interface StyledTextProps {
  size?: keyof Sizes;
  textColor?: keyof Colors;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  textTransform?: "uppercase" | "capitalize";
  marginBottom?: keyof Sizes;
  marginLeft?: keyof Sizes;
}

export const StyledText = styled.p<StyledTextProps>`
  color: ${(props) => props.theme.colors[props.textColor ?? "black"]};
  font-size: ${(props) => props.theme.fontSizes[props.size ?? "m"]};
  font-weight: ${(props) => props.weight};
  margin: 0;
  text-transform: ${(props) => props.textTransform};
  margin-bottom: ${(props) =>
    props.marginBottom && props.theme.spaces[props.marginBottom]};
  margin-left: ${(props) =>
    props.marginLeft && props.theme.spaces[props.marginLeft]};
`;
