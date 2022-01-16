import React from "react";
import { Provider } from "react-redux";
import ReactDom from "react-dom";

import App from "./App";
import store from "./store"

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";


ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
