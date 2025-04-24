import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { CartProvider } from './context/cartContext';

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
