import { createBrowserRouter } from "react-router-dom";
import App from "@/App.tsx";
import { menuRoutes } from "./menuRoutes.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...menuRoutes],
  },
]);
