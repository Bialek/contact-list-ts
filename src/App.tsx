import React from "react";
import { Provider } from "react-redux";
import configureStore from "store";
import ContactsPage from "components/pages/contacts-page";
import { theme } from "./style/theme";
import { GlobalStyle } from "style/global.style";
import { ThemeProvider } from "styled-components";
import NotificationsContainer from "components/organisms/notifications-container";

function App(): JSX.Element {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContactsPage />
        <NotificationsContainer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
