import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "./pages/DataProviders/MainReducer";
import { FuncProvider } from "./pages/DataProviders/FuncCall";
// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <MainProvider>
      <FuncProvider>

          <App />

      </FuncProvider>
    </MainProvider>
  </Router>,
  document.getElementById("root")
);
