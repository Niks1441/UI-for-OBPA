import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Incremental } from "./screens/Incremental";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Incremental />
  </StrictMode>,
);
