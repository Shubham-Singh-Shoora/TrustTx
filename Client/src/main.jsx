import React from "react";
import ReactDOM from "react-dom/client"; // Use client instead of dom
import App from "./App";
import { TransactionsProvider } from "./Context/TransactionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>
);