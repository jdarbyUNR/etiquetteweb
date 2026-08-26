import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { ReleasePage } from "../pages/ReleasePage";
import "../styles/global.css";
import "../styles/release.css";

flushSync(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <ReleasePage />
    </StrictMode>
  );
});
