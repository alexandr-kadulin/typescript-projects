import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components";
import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
