// ======= Framework imports =======
import { createBrowserRouter, Navigate } from 'react-router'

// ======= Local Components / Pages =======
import { HomePage, LoginPage, RegisterPage } from './pages'
import { AuthLayout, MainLayout } from './layouts'
import { action } from './pages/Auth/auth.action'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='login' replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: action,
      },
      {
        path: 'register',
        element: <RegisterPage />,
        action: action,
      },
    ],
  },
])
