import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/router";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
