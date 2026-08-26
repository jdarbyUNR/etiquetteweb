import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { PrivacyPage } from "../pages/PrivacyPage";
import "../styles/global.css";

flushSync(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <PrivacyPage />
    </StrictMode>
  );
});
