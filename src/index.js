import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./pages/DataProviders/CategoryProv";
import { ProductProvider } from "./pages/DataProviders/ProductsProvid";
import { LoginProvider } from "./pages/DataProviders/LoginProv";
// Call make Server
makeServer();


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
      <ProductProvider>
      <CategoryProvider>

      <App />
      </CategoryProvider>

      </ProductProvider>
      </LoginProvider>
      
      
    
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
