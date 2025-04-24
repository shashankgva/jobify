import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import Error from './pages/Error';
import Plp from './pages/Plp';
import Cart from './pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Plp />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
