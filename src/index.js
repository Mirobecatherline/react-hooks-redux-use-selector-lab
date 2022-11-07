import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import{ createStore }from "redux";
import usersReducer from "./features/users/usersSlice";

// add imports and code
const store=createStore(usersReducer)

ReactDOM.render(
  <Provider store={store} >
  // add imports and code
  <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
