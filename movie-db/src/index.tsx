import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components";
import { AppProvider } from "./context/appContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
);
