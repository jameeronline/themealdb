import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";

//App
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
