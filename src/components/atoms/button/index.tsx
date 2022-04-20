import React from "react";
import { StyledButton, StyledButtonProps } from "./button.style";

interface Props extends StyledButtonProps {
  text: string;
  onClickHandler: () => void;
}

function Button({ color, size, text, onClickHandler }: Props) {
  return (
    <StyledButton size={size} color={color} onClick={onClickHandler}>
      {text}
    </StyledButton>
  );
}

export default Button;
