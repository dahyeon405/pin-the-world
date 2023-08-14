import Home from "@/pages/home";
import EuropePage from "@/pages/photos/europe";
import AboutPage from "@/pages/about";
import MenuLayout from "@/layout/MenuLayout.tsx";
import NewYorkPage from "@/pages/photos/newYork";

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
        path: "/photos/new-york",
        element: <NewYorkPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
];
