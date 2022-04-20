import { Colors, Sizes } from "style/theme";
import styled from "styled-components";

export interface StyledButtonProps {
  size?: keyof Sizes;
  color?: keyof Colors;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props): string => props.theme.colors.white};
  color: ${(props) => props.theme.colors[props.color ?? "black"]};
  size: ${(props) => props.theme.fontSizes[props.size ?? "m"]};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow};
  border: 2px solid ${(props) => props.theme.colors.red20};
  transition: border-color ease-in-out 0.3s;
  &:hover {
    border-color: ${(props) => props.theme.colors.red10};
  }
  padding: ${(props) => props.theme.spaces[props.size ?? "m"]};
  font-weight: 700;
`;
