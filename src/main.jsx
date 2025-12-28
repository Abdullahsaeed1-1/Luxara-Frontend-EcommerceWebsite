import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css"; // global settings (we'll create it)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
