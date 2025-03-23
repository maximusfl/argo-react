import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import ProductCard from './ProductCard';

// Временные данные для демонстрации
const products = [
  {
    id: 1,
    title: 'Коллагеновый напиток',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1572490122747-f8b2c8f5c1b5?w=500&h=300&fit=crop',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    title: 'Витаминный комплекс',
    price: 1990,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&h=300&fit=crop',
    rating: 4.8,
    reviews: 256
  },
  {
    id: 3,
    title: 'Протеиновый коктейль',
    price: 2490,
    image: 'https://images.unsplash.com/photo-1572490122747-f8b2c8f5c1b5?w=500&h=300&fit=crop',
    rating: 4.2,
    reviews: 89
  },
  {
    id: 4,
    title: 'Антиоксидантный комплекс',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&h=300&fit=crop',
    rating: 4.7,
    reviews: 167
  },
  {
    id: 5,
    title: 'Омега-3 комплекс',
    price: 2790,
    image: 'https://images.unsplash.com/photo-1572490122747-f8b2c8f5c1b5?w=500&h=300&fit=crop',
    rating: 4.6,
    reviews: 145
  },
  {
    id: 6,
    title: 'Пробиотический напиток',
    price: 2290,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&h=300&fit=crop',
    rating: 4.4,
    reviews: 98
  }
];

const ProductGrid: React.FC = () => {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Популярные продукты
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductGrid; 