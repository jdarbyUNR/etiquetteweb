import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { PressPage } from "../pages/PressPage";
import "../styles/global.css";
import "../styles/gallery.css";
import "../styles/press.css";

flushSync(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <PressPage />
    </StrictMode>
  );
});
