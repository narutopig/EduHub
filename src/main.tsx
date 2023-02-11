import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./Routes";
import App from "./App";

const router = createBrowserRouter(Routes);

const root = document.getElementById("root");

if (root & )

if (root) {
  createRoot(root).render(<RouterProvider router={router} />);
}
