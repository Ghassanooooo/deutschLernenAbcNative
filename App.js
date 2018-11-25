import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import Index from "./src/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
