import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { EpkPage } from "../pages/EpkPage";
import "../styles/global.css";
import "../styles/epk.css";

// Match existing entries: links are mounted before the shared DOMContentLoaded tracker.
flushSync(() => {
  createRoot(document.getElementById("root")).render(<StrictMode><EpkPage /></StrictMode>);
});
