import { Container, Grid2 as Grid, Typography } from '@mui/material';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

//Mock Product Data
const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    image: 'https://placehold.co/400',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 99.99,
    image: 'https://placehold.co/400',
  },
];

const Plp: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product Listing Page
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Plp;
