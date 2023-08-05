import { createHashRouter } from "react-router-dom";
import App from "@/App.tsx";
import { menuRoutes } from "./menuRoutes.tsx";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [...menuRoutes],
  },
]);
