import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { BetweenUsGirlsPage } from "../pages/BetweenUsGirlsPage";
import "../styles/global.css";
import "../styles/between-us-girls.css";

// Match the existing entry pattern: links mount before DOMContentLoaded tracking.
flushSync(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <BetweenUsGirlsPage />
    </StrictMode>
  );
});
