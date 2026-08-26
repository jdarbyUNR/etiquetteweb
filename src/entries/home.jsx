import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { HomePage } from "../pages/HomePage";
import "../styles/global.css";

flushSync(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <HomePage />
    </StrictMode>
  );
});
