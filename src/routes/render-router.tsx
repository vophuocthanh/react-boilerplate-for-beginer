import Home from '@/pages/home/Home';
import { FC, lazy } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

const NotFound = lazy(() => import('@/pages/not-found/not-found'));
const Login = lazy(() => import('@/pages/login/LoginPage'));
const Register = lazy(() => import('@/pages/register/RegisterPage'));

const RenderRouter: FC = () => {
  const location = useLocation();

  const routerElement = useRoutes(
    [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
    location
  );

  return routerElement;
};

export default RenderRouter;
