import React from "react";
import { StyledButton, StyledButtonProps } from "./button.style";

interface Props extends StyledButtonProps {
  text: string;
  onClickHandler: () => void;
}

const Button = ({ color, size, text, onClickHandler }: Props): JSX.Element => (
  <StyledButton size={size} color={color} onClick={onClickHandler}>
    {text}
  </StyledButton>
);

export default Button;
