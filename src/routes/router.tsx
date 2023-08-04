import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import EuropePage from "../pages/photos/europe";
import App from "@/App.tsx";
import AboutPage from "@/pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/photos/europe",
        element: <EuropePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
