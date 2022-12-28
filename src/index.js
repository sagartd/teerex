import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextStore from "./context/context";
import "./index.css";
import App from "./App";
import FltrContext from "./context/fltrContext";
import CartContext from "./context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextStore>
    <FltrContext>
      <CartContext>
        <App />
      </CartContext>
    </FltrContext>
  </ContextStore>
);
