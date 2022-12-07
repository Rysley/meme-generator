import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/components/App";
import { MemeContextProvider } from "./context/meme-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemeContextProvider>
      <App />
    </MemeContextProvider>
  </React.StrictMode>
);
