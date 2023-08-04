import Home from "@/pages/home";
import EuropePage from "@/pages/photos/europe";
import AboutPage from "@/pages/about";
import MenuLayout from "@/layout/MenuLayout.tsx";

export const menuRoutes = [
  {
    path: "/",
    element: <MenuLayout />,
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
];
