import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "utils/redux/store/store";
import App from "routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
