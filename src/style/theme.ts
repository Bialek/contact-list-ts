import { DefaultTheme } from "styled-components";

export type Colors = {
  red10: string;
  red20: string;
  white: string;
  black: string;
  grey10: string;
  grey20: string;
};

const colors: Colors = {
  red10: "#333333",
  red20: "#e74d3cae",
  white: "#ffffff",
  black: "#333333",
  grey10: "#f4f4f4",
  grey20: "#666666",
};

export type Sizes = {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
};

const fontSizes: Sizes = {
  xs: "0.6rem",
  s: "0.8rem",
  m: "1rem",
  l: "1.4rem",
  xl: "1.8rem",
};

const spaces: Sizes = {
  xs: "0.6rem",
  s: "1.2rem",
  m: "1.8rem",
  l: "2.5rem",
  xl: "3rem",
};

const breakpoints = ["31.25em", "43.75em", "46.875em"];

const borderRadius = "20px";

const boxShadow = "0px 1px 2px 0px rgba(0, 0, 0, 0.15)";

export const theme: DefaultTheme = {
  borderRadius,
  breakpoints,
  fontSizes,
  spaces,
  colors,
  boxShadow,
};
