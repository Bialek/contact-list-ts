import React from "react";
import { Provider } from "react-redux";
import configureStore from "store";
import ContactsPage from "components/pages/contacts-page";
import { theme } from "./style/theme";
import { GlobalStyle } from "style/global.style";
import { ThemeProvider } from "styled-components";

function App(): JSX.Element {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContactsPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
