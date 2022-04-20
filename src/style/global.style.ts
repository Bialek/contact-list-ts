import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${(props): string => props.theme.colors.grey10};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;
