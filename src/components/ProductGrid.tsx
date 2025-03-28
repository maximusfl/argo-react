import React from 'react';
import {Grid, Container, Typography, Box} from '@mui/material';
import ProductCard from './ProductCard';
// Импорт изображений для продуктов
import collagenDrinkImage from '../assets/images/products/collagen_drink.webp';
import multiComplexImage from '../assets/images/products/multi_complex.webp';
import proteinCoctailImage from '../assets/images/products/protein_coctail.webp';
import antioxidantComplexImage from '../assets/images/products/antioxidant_complex.webp';
import omega3Image from '../assets/images/products/omega_3.jpg';
import probioticDrinkImage from '../assets/images/products/probiotic_drink.webp';

// Временные данные для демонстрации
const products = [
    {
        id: 1,
        title: 'Коллагеновый напиток',
        price: 2990,
        image: collagenDrinkImage,
        rating: 4.5,
        reviews: 128,
        description: 'Коллагеновый напиток для поддержания здоровья суставов и красоты кожи. Содержит гидролизованный коллаген, витамины и минералы.'
    },
    {
        id: 2,
        title: 'Витаминный комплекс',
        price: 1990,
        image: multiComplexImage,
        rating: 4.8,
        reviews: 256,
        description: 'Комплекс витаминов и минералов для ежедневной поддержки иммунитета и энергии. Разработан с учетом потребностей организма.'
    },
    {
        id: 3,
        title: 'Протеиновый коктейль',
        price: 2490,
        image: proteinCoctailImage,
        rating: 4.2,
        reviews: 89,
        description: 'Протеиновый коктейль с высоким содержанием белка для восстановления мышц после тренировок и правильного питания.'
    },
    {
        id: 4,
        title: 'Антиоксидантный комплекс',
        price: 3490,
        image: antioxidantComplexImage,
        rating: 4.7,
        reviews: 167,
        description: 'Мощный комплекс антиоксидантов для защиты клеток от свободных радикалов и замедления процессов старения организма.'
    },
    {
        id: 5,
        title: 'Омега-3 комплекс',
        price: 2790,
        image: omega3Image,
        rating: 4.6,
        reviews: 145,
        description: 'Омега-3 жирные кислоты из натурального рыбьего жира для поддержки здоровья сердечно-сосудистой системы и мозга.'
    },
    {
        id: 6,
        title: 'Пробиотический напиток',
        price: 2290,
        image: probioticDrinkImage,
        rating: 4.4,
        reviews: 98,
        description: 'Натуральный пробиотический напиток для поддержания здоровой микрофлоры кишечника и улучшения пищеварения.'
    }
];

const ProductGrid: React.FC = () => {
    return (
        <Box sx={{bgcolor: 'background.default', height: '100%'}}>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            rating={product.rating}
                            reviews={product.reviews}
                            description={product.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductGrid; 