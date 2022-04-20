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
  red10: "#e74c3c",
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
  xxl: string;
};

const fontSizes: Sizes = {
  xs: "0.3rem",
  s: "0.6rem",
  m: "0.9rem",
  l: "1.2rem",
  xl: "1.5rem",
  xxl: "1.8rem",
};

const spaces: Sizes = {
  xs: "0.4rem",
  s: "0.8rem",
  m: "1.2rem",
  l: "1.6rem",
  xl: "2rem",
  xxl: "2.4rem",
};

export type Breakpoints = {
  mobile: string;
  tablet: string;
  desktop: string;
};

const breakpoints: Breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1024px",
};

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
