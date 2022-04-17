import React from "react";
import { Provider } from "react-redux";
import configureStore from "store";
import ContactsPage from "components/pages/contacts-page";

function App(): JSX.Element {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="App">
        <ContactsPage />
      </div>
    </Provider>
  );
}

export default App;
