import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useCart } from '../context/cartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <Typography variant="body1">Your cart is empty.</Typography>;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">Your Cart</Typography>
      <List>
        {cart.map((product) => (
          <ListItem key={product.id} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText
              primary={product.name}
              secondary={`$${product.price}`}
            />
            <Button color="error" onClick={() => removeFromCart(product.id)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Cart;
