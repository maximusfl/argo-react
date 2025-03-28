import React from 'react';
import {Card, CardContent, CardMedia, Typography, Box, Rating, CardActionArea} from '@mui/material';
import {useNavigate} from 'react-router-dom';

interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({id, title, price, image, rating, reviews, description}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.2s',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3
            }
        }}>
            <CardActionArea onClick={handleCardClick}
                            sx={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                    sx={{objectFit: 'cover'}}
                />
                <CardContent sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                    <Typography gutterBottom variant="h6" component="h2" sx={{fontSize: '1rem', mb: 1}}>
                        {title}
                    </Typography>
                    {description && (
                        <Typography variant="body2" color="text.secondary" sx={{mb: 1.5, flexGrow: 1}}>
                            {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                        </Typography>
                    )}
                    <Box sx={{mt: 'auto'}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                            <Rating value={rating} precision={0.5} readOnly size="small"/>
                            <Typography variant="body2" color="text.secondary" sx={{ml: 1}}>
                                ({reviews})
                            </Typography>
                        </Box>
                        <Typography variant="h6" color="primary" sx={{fontWeight: 'bold'}}>
                            {price.toLocaleString('ru-RU')} ₽
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard; 