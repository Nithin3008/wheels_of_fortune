import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./pages/DataProviders/CategoryProv";

import { AuthProvider } from "./pages/DataProviders/AuthProvider";
import { MainProvider } from "./pages/DataProviders/MainReducer";
// Call make Server
makeServer();


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <MainProvider> 
    <AuthProvider>
    
      
      <CategoryProvider>

      <App />
      </CategoryProvider>

    
     
      </AuthProvider>
      </MainProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);
