import "styled-components";
import { Colors, Sizes, Breakpoints } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    breakpoints: Breakpoints;
    fontSizes: Sizes;
    spaces: Sizes;
    colors: Colors;
    boxShadow: string;
  }
}
