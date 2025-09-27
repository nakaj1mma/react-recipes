// ======= Framework imports =======
import { createBrowserRouter } from 'react-router'

// ======= Local Components / Pages =======
import { Landing } from './pages'
import MainLayout from './layouts/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <Landing /> }],
  },
])
