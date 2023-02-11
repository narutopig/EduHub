import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {}
import "./index.css";
import Routes from "./Routes";

const router 

const root = document.getElementById("root");

const isAuthenticated = false;

if (root & isAuthenticated) {
  router = createBrowserRouter(Routes);
}

if (root) {
  createRoot(root).render(<RouterProvider router={router} />);
}
