import React from "react";
import { StyledText, StyledTextProps } from "./text.style";

interface Props extends StyledTextProps {
  text: string;
}

const Text = ({
  textColor,
  size,
  weight,
  textTransform,
  marginBottom,
  marginLeft,
  text,
}: Props): JSX.Element => (
  <StyledText
    size={size}
    textColor={textColor}
    weight={weight}
    textTransform={textTransform}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
  >
    {text}
  </StyledText>
);

export default Text;
