import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import configureStore from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore(); // pass initial if server rendering or pass data from localStorage

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </Router>
  </React.StrictMode>
);
