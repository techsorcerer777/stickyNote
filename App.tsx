/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import store from "./src/utils/store";
import { Provider } from "react-redux";

import Routes from "./src/nativation";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
