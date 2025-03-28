import React, {useState} from 'react';
import {
    Container,
    Typography,
    Box,
    InputBase,
    IconButton,
    Grid,
    ToggleButton,
    ToggleButtonGroup,
    Paper,
    Breadcrumbs,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Modal,
    Backdrop,
    Fade,
    Button
} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
// Иконки для систем организма из Material-UI
import LungsAltIcon from '@mui/icons-material/AirRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SecurityIcon from '@mui/icons-material/Security';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
// Кастомная иконка кишечника
import IntestinesIcon from '../components/IntestinesIcon';
// Иконки для областей применения
import AllergyIcon from '@mui/icons-material/HealthAndSafety';
import BugReportIcon from '@mui/icons-material/BugReport';
import EggAltIcon from '@mui/icons-material/EggAlt';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const Home: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('systems');
    const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);

    const handleCategoryChange = (
        event: React.MouseEvent<HTMLElement>,
        newCategory: string | null,
    ) => {
        if (newCategory !== null) {
            setSelectedCategory(newCategory);
        }
    };

    const handleOpenModal = (category: string) => {
        setSelectedCategory(category);
        setIsMobileModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsMobileModalOpen(false);
    };

    // Списки для систем организма и областей применения
    const systemsList = [
        {name: 'Дыхательная система', icon: <LungsAltIcon/>},
        {name: 'Зрительная система', icon: <VisibilityIcon/>},
        {name: 'Имунная система', icon: <SecurityIcon/>},
        {name: 'Лимфатическая система', icon: <WaterDropIcon/>},
        {name: 'Мочевыделительная система', icon: <SanitizerIcon/>},
        {name: 'Нервная система', icon: <PsychologyIcon/>},
        {name: 'Опорно-двигательная система', icon: <FitnessCenterIcon/>},
        {name: 'Пищеварительная система', icon: <IntestinesIcon/>},
        {name: 'Покровная система', icon: <SpaIcon/>},
        {name: 'Репродуктивная система', icon: <PregnantWomanIcon/>},
        {name: 'Сердечно-сосудистая система', icon: <FavoriteIcon/>},
        {name: 'Эндокринная система', icon: <HealthAndSafetyIcon/>},
    ];

    const usageList = [
        {name: 'Антиаллергические средства', icon: <AllergyIcon/>},
        {name: 'Антипаразитные средства', icon: <BugReportIcon/>},
        {name: 'Белково-минеральные комплексы', icon: <EggAltIcon/>},
        {name: 'Детоксикация', icon: <CleaningServicesIcon/>},
        {name: 'Коррекция массы тела', icon: <MonitorWeightIcon/>},
        {name: 'Профилактика онкологических заболеваний', icon: <LocalHospitalIcon/>},
        {name: 'Стимуляция кроветворения', icon: <BloodtypeIcon/>},
        {name: 'Тонизирующие средства', icon: <BatteryChargingFullIcon/>},
        {name: 'Успокоительные средства', icon: <NightsStayIcon/>},
    ];

    return (
        <Box>
            {/* Hero секция */}
            <Box sx={{bgcolor: 'white', py: {xs: 1, md: 3}, boxShadow: 1}}>
                <Container maxWidth="lg">
                    {/* Хлебные крошки */}
                    <Box sx={{mb: {xs: 3, md: 2}, mt: {xs: 5, md: 3}}}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small"/>}
                            aria-label="навигация по сайту"
                            sx={{
                                '& .MuiBreadcrumbs-ol': {
                                    flexWrap: {xs: 'wrap', md: 'nowrap'}
                                },
                                '& .MuiBreadcrumbs-li': {
                                    fontSize: {xs: '0.75rem', md: '0.85rem'}
                                }
                            }}
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
                                Товары для здоровья
                            </Typography>
                        </Breadcrumbs>
                    </Box>

                    {/* Мобильные кнопки (видны только на мобильных) */}
                    <Box
                        sx={{
                            display: {xs: 'block', md: 'none'},
                            mt: {xs: 3, md: 4},
                            mb: {xs: 3, md: 2}
                        }}
                    >
                        <Box sx={{display: 'flex', gap: 2}}>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    color: '#4CAF50',
                                    borderColor: '#4CAF50',
                                    '&:hover': {
                                        borderColor: '#388E3C',
                                        bgcolor: 'rgba(76, 175, 80, 0.04)',
                                    },
                                    py: 0.8,
                                    fontSize: '0.85rem',
                                    textTransform: 'none'
                                }}
                                onClick={() => handleOpenModal('systems')}
                            >
                                По системам организма
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    color: '#4CAF50',
                                    borderColor: '#4CAF50',
                                    '&:hover': {
                                        borderColor: '#388E3C',
                                        bgcolor: 'rgba(76, 175, 80, 0.04)',
                                    },
                                    py: 0.8,
                                    fontSize: '0.85rem',
                                    textTransform: 'none'
                                }}
                                onClick={() => handleOpenModal('usage')}
                            >
                                По области применения
                            </Button>
                        </Box>
                    </Box>

                    {/* Модальное окно для мобильной версии */}
                    <Modal
                        open={isMobileModalOpen}
                        onClose={handleCloseModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                            style: {backgroundColor: 'rgba(0, 0, 0, 0)'}
                        }}
                        sx={{
                            display: {xs: 'flex', md: 'none'},
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Fade in={isMobileModalOpen}>
                            <Box sx={{
                                width: '90%',
                                maxWidth: 400,
                                maxHeight: '80vh',
                                bgcolor: 'background.paper',
                                borderRadius: 1,
                                boxShadow: 24,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    bgcolor: '#4CAF50',
                                    color: 'white',
                                    p: 2
                                }}>
                                    <Typography variant="subtitle1" sx={{fontWeight: 500}}>
                                        {selectedCategory === 'systems' ? 'Системы организма' : 'Области применения'}
                                    </Typography>
                                    <IconButton
                                        size="small"
                                        onClick={handleCloseModal}
                                        sx={{color: 'white'}}
                                    >
                                        <CloseIcon/>
                                    </IconButton>
                                </Box>
                                <Box sx={{
                                    overflow: 'auto',
                                    flexGrow: 1,
                                }}>
                                    <List sx={{p: 0}}>
                                        {(selectedCategory === 'systems' ? systemsList : usageList).map((item, index, array) => (
                                            <ListItem
                                                button
                                                component={RouterLink}
                                                to={`/${selectedCategory === 'systems' ? 'systems' : 'usage'}/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                key={index}
                                                sx={{
                                                    borderBottom: index < array.length - 1 ? '1px solid' : 'none',
                                                    borderColor: 'grey.100',
                                                    py: 1.5,
                                                    '&:hover': {
                                                        bgcolor: 'rgba(76, 175, 80, 0.04)'
                                                    }
                                                }}
                                                onClick={handleCloseModal}
                                            >
                                                <ListItemIcon sx={{minWidth: 40, color: '#4CAF50'}}>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.name}
                                                    sx={{
                                                        '& .MuiListItemText-primary': {
                                                            fontSize: '0.95rem'
                                                        }
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Box>
                        </Fade>
                    </Modal>

                    {/* Desktop Grid layout */}
                    <Grid container spacing={2} sx={{mt: {xs: 0, md: 2}}}>
                        {/* Левая колонка с кнопками (видна только на десктопе) */}
                        <Grid item xs={12} md={3} sx={{
                            display: {xs: 'none', md: 'block'}
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                width: '100%'
                            }}>
                                <ToggleButtonGroup
                                    value={selectedCategory}
                                    exclusive
                                    onChange={handleCategoryChange}
                                    orientation="vertical"
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        '& .MuiToggleButton-root': {
                                            color: '#4CAF50',
                                            borderColor: '#4CAF50',
                                            '&:hover': {
                                                borderColor: '#388E3C',
                                                bgcolor: 'rgba(76, 175, 80, 0.04)',
                                            },
                                            '&.Mui-selected': {
                                                color: 'white',
                                                bgcolor: '#4CAF50',
                                                '&:hover': {
                                                    bgcolor: '#388E3C',
                                                },
                                            },
                                            textTransform: 'none',
                                            py: 0.5,
                                            px: 1,
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            borderRadius: '4px !important',
                                            mb: 0.5,
                                            minHeight: '32px'
                                        }
                                    }}
                                >
                                    <ToggleButton
                                        value="systems"
                                        aria-label="по системам организма"
                                    >
                                        По системам организма
                                    </ToggleButton>
                                    <ToggleButton
                                        value="usage"
                                        aria-label="по области применения"
                                    >
                                        По области применения
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Box>

                            {/* Список систем организма или областей применения - только для десктопной версии */}
                            <Box
                                sx={{
                                    display: {xs: 'none', md: 'block'},
                                    mt: 3,
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    borderRadius: 1,
                                    bgcolor: 'white',
                                    boxShadow: 1,
                                    overflow: 'hidden',
                                    height: 'calc(100% - 85px)'
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        bgcolor: '#4CAF50',
                                        color: 'white',
                                        py: 1,
                                        px: 2,
                                        fontWeight: 500
                                    }}
                                >
                                    {selectedCategory === 'systems' ? 'Системы организма' : 'Области применения'}
                                </Typography>
                                {selectedCategory === 'systems' && (
                                    <List component="nav" sx={{p: 0}}>
                                        {systemsList.map((system, index) => (
                                            <ListItem
                                                button
                                                component={RouterLink}
                                                to={`/systems/${system.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                key={index}
                                                sx={{
                                                    borderBottom: index < systemsList.length - 1 ? '1px solid' : 'none',
                                                    borderColor: 'grey.100',
                                                    py: 0.75,
                                                    '&:hover': {
                                                        bgcolor: 'rgba(76, 175, 80, 0.04)'
                                                    }
                                                }}
                                            >
                                                <ListItemIcon sx={{minWidth: 40, color: '#4CAF50'}}>
                                                    {system.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={system.name}
                                                    sx={{
                                                        '& .MuiListItemText-primary': {
                                                            fontSize: '0.9rem',
                                                            fontWeight: 400
                                                        }
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                                {selectedCategory === 'usage' && (
                                    <List component="nav" sx={{p: 0}}>
                                        {usageList.map((area, index, array) => (
                                            <ListItem
                                                button
                                                component={RouterLink}
                                                to={`/usage/${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                key={index}
                                                sx={{
                                                    borderBottom: index < array.length - 1 ? '1px solid' : 'none',
                                                    borderColor: 'grey.100',
                                                    py: 0.75,
                                                    '&:hover': {
                                                        bgcolor: 'rgba(76, 175, 80, 0.04)'
                                                    }
                                                }}
                                            >
                                                <ListItemIcon sx={{minWidth: 40, color: '#4CAF50'}}>
                                                    {area.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={area.name}
                                                    sx={{
                                                        '& .MuiListItemText-primary': {
                                                            fontSize: '0.9rem',
                                                            fontWeight: 400
                                                        }
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </Box>
                        </Grid>
                        {/* Правая колонка с каталогом */}
                        <Grid item xs={12} md={9} sx={{display: 'flex'}}>
                            <Box sx={{width: '100%'}}>
                                <ProductGrid/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Информационная секция */}
            <Box sx={{py: 8, bgcolor: 'white'}}>
                <Container maxWidth="lg">
                    <Typography variant="h4" component="h2" gutterBottom align="center" color="primary">
                        Почему выбирают нас
                    </Typography>
                    <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: 'repeat(3, 1fr)'}, gap: 4, mt: 4}}>
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
                                Разработка продуктов основана на последних научных исследованиях и клинических
                                испытаниях
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