import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import Footer from "../src/components/Footer";
import { CartProvider } from "./contexts/CarrinhoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
      <Footer />
    </CartProvider>
  </StrictMode>
);
