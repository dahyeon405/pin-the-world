import Home from '@/pages/home'
import EuropePage from '@/pages/photos/europe'
import AboutPage from '@/pages/about'
import MenuLayout from '@/layout/MenuLayout.tsx'
import NewYorkPage from '@/pages/photos/newYork'
import { PhotosPage } from '@/pages/photos'
import PinsPage from '@/pages/photos/pins'
import Paris2024Page from '@/pages/photos/paris2024'

export const menuRoutes = [
  {
    path: '/',
    element: <MenuLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/photos/europe',
        element: <EuropePage />,
      },
      {
        path: '/photos/paris2024',
        element: <Paris2024Page />,
      },
      {
        path: '/photos/new-york',
        element: <NewYorkPage />,
      },
      {
        path: '/photos',
        element: <PhotosPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/photos/pins',
        element: <PinsPage />,
      },
    ],
  },
]
