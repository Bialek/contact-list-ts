import { Colors, Sizes } from "style/theme";
import styled from "styled-components";

export interface StyledButtonProps {
  size?: keyof Sizes;
  color?: keyof Colors;
  isDisabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props): string =>
    props.isDisabled ? props.theme.colors.grey10 : props.theme.colors.white};
  color: ${(props) => props.theme.colors[props.color ?? "black"]};
  font-size: ${(props) => props.theme.fontSizes[props.size ?? "m"]};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  box-shadow: ${(props) => props.theme.boxShadow};
  border: 2px solid ${(props) => props.theme.colors.red20};
  transition: border-color ease-in-out 0.3s;
  &:hover {
    border-color: ${(props) => props.theme.colors.red10};
  }
  padding: ${(props) => props.theme.spaces[props.size ?? "m"]};
  font-weight: 700;
`;
