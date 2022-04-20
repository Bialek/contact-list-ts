import "styled-components";
import { Colors, Sizes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    breakpoints: string[];
    fontSizes: Sizes;
    spaces: Sizes;
    colors: Colors;
    boxShadow: string;
  }
}
