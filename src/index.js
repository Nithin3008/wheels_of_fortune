import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
// import { CategoryProvider } from "./pages/DataProviders/CategoryProdProv";

import { AuthProvider } from "./pages/DataProviders/AuthProvider";
import { MainProvider } from "./pages/DataProviders/MainReducer";
import { FuncProvider } from "./pages/DataProviders/FuncCall";
// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <MainProvider>
      <FuncProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FuncProvider>
    </MainProvider>
  </Router>,
  document.getElementById("root")
);
