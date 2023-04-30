import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js"; 
import "bootstrap/dist/js/bootstrap.min.js";
import SSRProvider from 'react-bootstrap/SSRProvider';

// Component of the application
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

<SSRProvider>
  <App />
</SSRProvider>;