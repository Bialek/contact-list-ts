import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    breakpoints: string[];
    fontSizes: { [key in keyof typeof fontSizes]: string };
    spaces: { [key in keyof typeof space]: string };
    colors: { [key in keyof typeof colors]: string };
    boxShadow: string;
  }
}
