import React, {useEffect, useState} from 'react';
import {useParams, Link as RouterLink} from 'react-router-dom';
import {
    Container,
    Grid,
    Typography,
    Box,
    Paper,
    Breadcrumbs,
    Link,
    Chip,
    Divider,
    Button,
    Rating,
    Tabs,
    Tab
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// Импорт изображений для продуктов
import collagenDrinkImage from '../assets/images/products/collagen_drink.webp';
import multiComplexImage from '../assets/images/products/multi_complex.webp';
import proteinCoctailImage from '../assets/images/products/protein_coctail.webp';
import antioxidantComplexImage from '../assets/images/products/antioxidant_complex.webp';
import omega3Image from '../assets/images/products/omega_3.jpg';
import probioticDrinkImage from '../assets/images/products/probiotic_drink.webp';

// Используем те же временные данные, что и в ProductGrid
// В реальном приложении эти данные должны быть получены из API или Redux
const products = [
    {
        id: 1,
        title: 'Коллагеновый напиток',
        price: 2990,
        image: collagenDrinkImage,
        rating: 4.5,
        reviews: 128,
        description: 'Коллагеновый напиток для поддержания здоровья суставов и красоты кожи. Содержит гидролизованный коллаген, витамины и минералы.',
        fullDescription: 'Коллагеновый напиток представляет собой инновационную формулу, разработанную для поддержания здоровья суставов, кожи, волос и ногтей. В состав входит гидролизованный коллаген высокого качества, который легко усваивается организмом. Напиток обогащен витаминами C, E, группы B, а также микроэлементами, необходимыми для синтеза собственного коллагена. Регулярное применение помогает замедлить процессы старения, увеличить эластичность кожи, уменьшить боли в суставах и улучшить общее состояние соединительных тканей.',
        ingredients: 'Гидролизованный коллаген, витамин С, витамин Е, витамины группы B, цинк, медь, гиалуроновая кислота, экстракт ягод асаи, натуральный ароматизатор, подсластитель стевия.',
        usage: 'Растворить одну мерную ложку (10 г) в 200 мл теплой воды. Принимать один раз в день, предпочтительно утром или вечером. Курс приема - 1-3 месяца.',
        categories: ['Суставы', 'Кожа', 'Красота'],
        inStock: true,
        weight: '300 г',
        servings: 30
    },
    {
        id: 2,
        title: 'Витаминный комплекс',
        price: 1990,
        image: multiComplexImage,
        rating: 4.8,
        reviews: 256,
        description: 'Комплекс витаминов и минералов для ежедневной поддержки иммунитета и энергии. Разработан с учетом потребностей организма.',
        fullDescription: 'Мультивитаминный комплекс содержит полный спектр витаминов и минералов, необходимых для правильного функционирования организма. Особое внимание уделено дозировкам и биодоступным формам веществ для максимального усвоения. Комплекс способствует укреплению иммунитета, повышению энергии, улучшению метаболизма и защите клеток от окислительного стресса. Идеально подходит для восполнения дефицита питательных веществ в периоды повышенных нагрузок, стресса или сезонного авитаминоза.',
        ingredients: 'Витамины A, C, D3, E, K2, B1, B2, B3, B5, B6, B12, фолиевая кислота, биотин, кальций, магний, цинк, селен, железо, йод, медь, марганец, хром, молибден, инозитол, холин.',
        usage: 'Принимать по 1 капсуле в день во время еды. Продолжительность приема - 1-3 месяца.',
        categories: ['Иммунитет', 'Энергия', 'Общее здоровье'],
        inStock: true,
        weight: '45 г',
        servings: 60
    },
    {
        id: 3,
        title: 'Протеиновый коктейль',
        price: 2490,
        image: proteinCoctailImage,
        rating: 4.2,
        reviews: 89,
        description: 'Протеиновый коктейль с высоким содержанием белка для восстановления мышц после тренировок и правильного питания.',
        fullDescription: 'Протеиновый коктейль создан на основе высококачественного сывороточного протеина с добавлением комплекса BCAA (аминокислоты с разветвленной цепью). Продукт имеет оптимальный аминокислотный профиль и быстро усваивается организмом. Коктейль способствует эффективному восстановлению мышц после физических нагрузок, набору мышечной массы и снижению уровня жира в организме. Подходит для использования в качестве перекуса для контроля веса благодаря высокому содержанию белка и низкому содержанию углеводов.',
        ingredients: 'Концентрат сывороточного протеина, изолят сывороточного протеина, BCAA (L-лейцин, L-изолейцин, L-валин), лактаза, натуральный ароматизатор, подсластитель стевия.',
        usage: 'Смешать одну мерную ложку (30 г) с 250-300 мл воды или обезжиренного молока. Принимать 1-2 раза в день: после тренировки и/или между приемами пищи.',
        categories: ['Спорт', 'Питание', 'Мышцы'],
        inStock: true,
        weight: '900 г',
        servings: 30
    },
    {
        id: 4,
        title: 'Антиоксидантный комплекс',
        price: 3490,
        image: antioxidantComplexImage,
        rating: 4.7,
        reviews: 167,
        description: 'Мощный комплекс антиоксидантов для защиты клеток от свободных радикалов и замедления процессов старения организма.',
        fullDescription: 'Антиоксидантный комплекс представляет собой уникальную формулу, содержащую мощные природные антиоксиданты, которые нейтрализуют свободные радикалы и предотвращают окислительный стресс. В состав входят экстракты растений с высоким ORAC (показатель антиоксидантной активности), коэнзим Q10, ресвератрол и астаксантин. Комплекс помогает замедлить процессы старения, улучшить состояние кожи, поддержать здоровье сердечно-сосудистой системы и повысить жизненный тонус. Особенно рекомендуется людям, подверженным стрессу, экологическим загрязнениям и УФ-излучению.',
        ingredients: 'Экстракт зеленого чая, экстракт виноградных косточек, экстракт граната, коэнзим Q10, ресвератрол, астаксантин, ликопин, лютеин, селен, витамин С, витамин Е.',
        usage: 'Принимать по 1 капсуле 2 раза в день во время еды. Рекомендуемый курс - 2-3 месяца.',
        categories: ['Антиоксиданты', 'Старение', 'Защита клеток'],
        inStock: true,
        weight: '60 г',
        servings: 60
    },
    {
        id: 5,
        title: 'Омега-3 комплекс',
        price: 2790,
        image: omega3Image,
        rating: 4.6,
        reviews: 145,
        description: 'Омега-3 жирные кислоты из натурального рыбьего жира для поддержки здоровья сердечно-сосудистой системы и мозга.',
        fullDescription: 'Омега-3 комплекс содержит высококонцентрированные полиненасыщенные жирные кислоты EPA и DHA, полученные из дикой рыбы холодных морей. Продукт проходит молекулярную дистилляцию, что гарантирует отсутствие тяжелых металлов и других загрязнений. Регулярный прием Омега-3 способствует нормализации уровня холестерина, поддержанию здоровья сердечно-сосудистой системы, улучшению работы мозга и когнитивных функций, а также снижению воспалительных процессов в организме. Дополнительно комплекс содержит витамин Е, который предотвращает окисление жирных кислот.',
        ingredients: 'Концентрат рыбьего жира (содержит EPA и DHA), желатин (оболочка капсулы), глицерин, витамин Е (антиоксидант).',
        usage: 'Принимать по 1-2 капсулы в день во время еды. Продолжительность приема - 2-3 месяца.',
        categories: ['Сердце', 'Мозг', 'Сосуды'],
        inStock: true,
        weight: '90 г',
        servings: 60
    },
    {
        id: 6,
        title: 'Пробиотический напиток',
        price: 2290,
        image: probioticDrinkImage,
        rating: 4.4,
        reviews: 98,
        description: 'Натуральный пробиотический напиток для поддержания здоровой микрофлоры кишечника и улучшения пищеварения.',
        fullDescription: 'Пробиотический напиток представляет собой живую симбиотическую культуру полезных бактерий и дрожжей, ферментированную на натуральной основе. Продукт содержит миллиарды активных пробиотических микроорганизмов, включая Lactobacillus, Bifidobacterium и Saccharomyces, которые способствуют восстановлению и поддержанию здоровой микрофлоры кишечника. Регулярное употребление напитка улучшает пищеварение, укрепляет иммунную систему, помогает усваивать питательные вещества и детоксицировать организм. Напиток имеет приятный освежающий вкус и не содержит искусственных добавок.',
        ingredients: 'Очищенная вода, симбиотическая культура (Lactobacillus acidophilus, Lactobacillus casei, Bifidobacterium lactis, Saccharomyces boulardii), органический зеленый чай, органический тростниковый сахар, натуральный фруктовый сок.',
        usage: 'Принимать по 100-150 мл в день, желательно натощак или за 30 минут до еды. Перед употреблением взболтать. После вскрытия хранить в холодильнике.',
        categories: ['Пищеварение', 'Микрофлора', 'Иммунитет'],
        inStock: true,
        weight: '500 мл',
        servings: 4
    }
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const ProductDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<any | null>(null);
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        // Имитация получения данных о продукте
        // В реальном приложении это будет запрос к API или получение из Redux
        const foundProduct = products.find(p => p.id === Number(id));
        setProduct(foundProduct || null);
    }, [id]);

    if (!product) {
        return (
            <Container maxWidth="lg" sx={{py: 5}}>
                <Typography variant="h4" align="center">
                    Продукт не найден
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            {/* Хлебные крошки */}
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small"/>}
                aria-label="навигация по сайту"
                sx={{mb: 4}}
            >
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center', color: 'text.primary'}}
                    component={RouterLink}
                    to="/"
                >
                    <HomeIcon sx={{mr: 0.5, fontSize: '0.9rem'}}/>
                    Главная
                </Link>
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center', color: 'text.primary'}}
                    component={RouterLink}
                    to="/catalog"
                >
                    Каталог
                </Link>
                <Typography color="text.primary" sx={{fontSize: 'inherit'}}>
                    {product.title}
                </Typography>
            </Breadcrumbs>

            {/* Основная информация о продукте */}
            <Grid container spacing={4}>
                {/* Изображение продукта */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={2}
                        sx={{
                            borderRadius: 2,
                            overflow: 'hidden',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 2
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '400px'}}
                        />
                    </Paper>
                </Grid>

                {/* Информация о продукте */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {product.title}
                    </Typography>

                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Rating value={product.rating} precision={0.5} readOnly/>
                        <Typography variant="body2" sx={{ml: 1}}>
                            {product.rating} ({product.reviews} отзывов)
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3}}>
                        {product.categories.map((category: string, index: number) => (
                            <Chip key={index} label={category} color="primary" variant="outlined" size="small"/>
                        ))}
                    </Box>

                    <Typography variant="body1" paragraph sx={{mb: 3}}>
                        {product.fullDescription}
                    </Typography>

                    <Divider sx={{my: 3}}/>

                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3}}>
                        <Typography variant="h5" color="primary" sx={{fontWeight: 'bold'}}>
                            {product.price.toLocaleString('ru-RU')} ₽
                        </Typography>
                        <Box>
                            <Chip
                                label={product.inStock ? "В наличии" : "Нет в наличии"}
                                color={product.inStock ? "success" : "error"}
                                sx={{mr: 1}}
                            />
                        </Box>
                    </Box>

                    <Box sx={{display: 'flex', gap: 2}}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<ShoppingCartIcon/>}
                            fullWidth
                            sx={{py: 1.5}}
                        >
                            В корзину
                        </Button>
                    </Box>

                    <Box sx={{mt: 4}}>
                        <Typography variant="body2" sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <span>Вес/объем:</span>
                            <span>{product.weight}</span>
                        </Typography>
                        <Typography variant="body2" sx={{display: 'flex', justifyContent: 'space-between', mt: 1}}>
                            <span>Количество порций:</span>
                            <span>{product.servings}</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Дополнительная информация в табах */}
            <Paper sx={{mt: 6, borderRadius: 2}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="информация о продукте"
                        sx={{'& .MuiTab-root': {textTransform: 'none'}}}
                    >
                        <Tab label="Состав"/>
                        <Tab label="Способ применения"/>
                        <Tab label="Отзывы"/>
                    </Tabs>
                </Box>
                <TabPanel value={tabValue} index={0}>
                    <Typography variant="body1">{product.ingredients}</Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <Typography variant="body1">{product.usage}</Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <Typography variant="body1">Отзывы покупателей о продукте будут здесь.</Typography>
                </TabPanel>
            </Paper>
        </Container>
    );
};

export default ProductDetail; 