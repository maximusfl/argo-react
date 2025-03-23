import React, { useState } from 'react';
import { Container, Typography, Box, Button, InputBase, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CatalogMenu from '../components/CatalogMenu';

const Home: React.FC = () => {
  const [catalogAnchorEl, setCatalogAnchorEl] = useState<HTMLElement | null>(null);

  const handleCatalogClick = (event: React.MouseEvent<HTMLElement>) => {
    setCatalogAnchorEl(event.currentTarget);
  };

  const handleCatalogClose = () => {
    setCatalogAnchorEl(null);
  };

  return (
    <Box>
      {/* Hero секция */}
      <Box sx={{ bgcolor: 'white', py: 3, boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 3
          }}>
          </Box>
        </Container>
      </Box>

      {/* Меню каталога */}
      <CatalogMenu 
        anchorEl={catalogAnchorEl}
        onClose={handleCatalogClose}
      />

      {/* Секция с подгруппами товаров */}
      <Box sx={{ bgcolor: 'white', py: 3, borderTop: '1px solid', borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
            gap: { xs: 1, sm: 2 },
            maxWidth: 800,
            mx: 'auto'
          }}>
            {[
              'Биолит',
              'Литовит',
              'Популин',
              'Коллоидные препараты',
              'Товары Арго для дома',
              'Ещё лолоо',
              'Тралала',
              'Хехехехе'
            ].map((name) => (
              <Button
                key={name}
                variant="outlined"
                sx={{
                  bgcolor: 'white',
                  color: 'text.primary',
                  borderColor: 'grey.200',
                  '&:hover': {
                    borderColor: '#4CAF50',
                    bgcolor: 'white',
                  },
                  py: { xs: 1, sm: 1.5 },
                  px: { xs: 1, sm: 2 },
                  borderRadius: 1,
                  textTransform: 'none',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  fontWeight: 500,
                  textAlign: 'center',
                  whiteSpace: 'normal',
                  height: 'auto',
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Секция с продуктами */}
      <Box sx={{ bgcolor: 'white', py: 4 }}>
        <ProductGrid />
      </Box>

      {/* Информационная секция */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
            Почему выбирают нас
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4, mt: 4 }}>
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Качество продукции
              </Typography>
              <Typography color="text.secondary">
                Все продукты проходят строгий контроль качества и соответствуют международным стандартам
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Научный подход
              </Typography>
              <Typography color="text.secondary">
                Разработка продуктов основана на последних научных исследованиях и клинических испытаниях
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Экологичность
              </Typography>
              <Typography color="text.secondary">
                Мы заботимся об окружающей среде и используем только экологически чистые материалы
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 