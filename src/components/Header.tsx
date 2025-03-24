import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  InputBase
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navItems = [
    { text: 'Доставка', path: '/delivery' },
    { text: 'Оплата', path: '/payment' },
    { text: 'Блог', path: '/blog' },
    { text: 'Скидки', path: '/discounts' },
    { text: 'Контакты', path: '/contacts' },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 1 }}>
      <Toolbar sx={{ 
        justifyContent: 'center', 
        minHeight: '64px !important',
        position: 'relative'
      }}>
        {/* Кнопка каталога */}
        <Button
          variant="outlined"
          startIcon={<MenuIcon />}
          sx={{
            position: 'absolute',
            left: { 
              xs: 16, 
              sm: 'calc(50% - 500px)',
              md: 'calc(50% - 500px)',
              lg: 'calc(50% - 500px)'
            },
            color: '#4CAF50',
            borderColor: '#4CAF50',
            '&:hover': {
              borderColor: '#388E3C',
              bgcolor: 'transparent',
            },
            minWidth: 'auto',
            px: 2,
            py: 0.5,
            borderRadius: 1,
            textTransform: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            display: 'flex',
            zIndex: 1,
            whiteSpace: 'nowrap',
            '@media (orientation: landscape) and (max-height: 500px)': {
              left: 16,
              fontSize: '0.8rem',
              px: 1.5,
              py: 0.25
            }
          }}
        >
          Каталог
        </Button>

        {/* Логотип и поиск */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '100%',
          flexDirection: { 
            xs: 'column', 
            sm: 'row' 
          },
          gap: { 
            xs: 1, 
            sm: 2 
          }
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            height: '100%'
          }}>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <svg width={100} height={70} viewBox="0 0 672 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Компания АРГО</title>
                <path d="M495.232 34.954V8.55343C495.232 5.01252 492.371 2.14856 488.834 2.14856H442.385H406.495H407.067C403.53 2.14856 400.669 5.01252 400.669 8.55343V160.656C400.669 164.197 403.53 167.061 407.067 167.061H436.013C439.55 167.061 442.411 164.197 442.411 160.656V47.7637C442.411 44.2228 445.272 41.3588 448.809 41.3588H488.834C492.371 41.3588 495.232 38.4949 495.232 34.954Z" fill="#4CAF50"/>
                <path d="M309.254 2.14856H276.303V2.1746H247.981C244.444 2.1746 241.583 5.03856 241.583 8.57946V160.682C241.583 164.223 244.444 167.087 247.981 167.087H276.927C280.464 167.087 283.325 164.223 283.325 160.682V124.492C283.325 120.951 286.186 118.087 289.723 118.087H310.138C342.986 118.087 369.539 90.567 367.978 57.345C366.522 26.284 340.307 2.14856 309.254 2.14856ZM310.893 78.8508H289.697C286.16 78.8508 283.299 75.9868 283.299 72.4459V47.7637C283.299 44.2228 286.16 41.3589 289.697 41.3589H310.112C323.376 41.3589 333.467 55.2621 326.627 69.2955C323.74 75.2318 317.525 78.8508 310.893 78.8508Z" fill="#4CAF50"/>
                <path d="M591.562 0.0916916C541.889 -2.19948 501.005 38.7552 503.268 88.458C505.27 131.808 540.328 166.905 583.63 168.909C633.304 171.201 674.187 130.246 671.899 80.517C669.922 37.167 634.864 2.07043 591.562 0.0916916ZM591.64 128.554C564.099 131.001 541.134 108.011 543.579 80.4389C545.452 59.3237 562.46 42.2961 583.552 40.4215C611.094 37.9741 634.058 60.964 631.587 88.5101C629.741 109.651 612.732 126.679 591.64 128.554Z" fill="#4CAF50"/>
                <path d="M189.985 2.14856H158.62C156.93 2.14856 155.318 2.8255 154.121 4.02315L1.87512 156.178C-2.12999 160.187 0.704796 167.061 6.37437 167.061H56.3602C49.3643 158.677 58.5708 143.759 70.9242 137.953C72.6927 137.119 74.4092 136.599 75.9956 136.208C78.2843 135.661 81.3271 134.698 80.2088 136.338L75.2154 145.139C74.5652 145.789 71.1843 144.618 70.7422 144.488C70.17 144.279 69.4678 144.41 68.6876 144.982C62.0298 150.059 61.4836 156.516 70.3261 156.803C86.5806 157.323 135.994 150.632 154.381 122.435C155.708 120.404 155.318 119.233 157.372 119.233C158.152 119.233 161.455 118.868 162.262 118.842C164.992 118.556 164.03 119.467 162.496 123.216C154.225 143.368 149.934 158.807 162.704 166.124C163.484 166.566 163.926 166.853 164.03 167.061H191.78C195.317 167.061 198.177 164.197 198.177 160.656V10.3499C198.177 5.81964 194.51 2.14856 189.985 2.14856ZM131.703 126.653C124.291 131.496 102.497 139.853 91.1838 142.457C90.2996 142.665 89.5974 141.676 90.0915 140.921C99.3241 125.794 107.49 115.041 105.982 100.955C105.176 93.4309 100.885 88.7445 104.395 87.3125C106.424 86.5054 111.105 84.3964 111.73 84.2923L154.121 67.6292C180.363 69.7121 159.401 108.532 131.703 126.653Z" fill="#4CAF50"/>
              </svg>
            </RouterLink>
          </Box>

          {/* Поле поиска */}
          <Box sx={{ 
            position: 'relative',
            width: { 
              xs: '100%', 
              sm: '400px', 
              md: '500px', 
              lg: '600px' 
            },
            bgcolor: 'grey.50',
            borderRadius: 1,
            border: '1px solid',
            borderColor: 'grey.200',
            '&:hover': {
              borderColor: '#4CAF50',
            },
            '&:focus-within': {
              borderColor: '#4CAF50',
              boxShadow: 1,
            },
            height: '40px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <InputBase
              placeholder="Поиск"
              sx={{ 
                width: '100%',
                color: 'text.primary',
                '& .MuiInputBase-input': {
                  py: 0,
                  px: 2,
                  fontSize: { 
                    xs: '0.9rem', 
                    sm: '1rem', 
                    md: '1.1rem' 
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'text.secondary',
                },
              }}
            />
            <IconButton 
              sx={{ 
                position: 'absolute',
                right: 0,
                color: '#4CAF50',
                '&:hover': {
                  bgcolor: 'transparent',
                },
                padding: '8px',
              }}
            >
              <SearchIcon sx={{ 
                fontSize: { 
                  xs: '1.4rem', 
                  sm: '1.6rem', 
                  md: '1.8rem' 
                },
                strokeWidth: 0.5
              }} />
            </IconButton>
          </Box>
        </Box>

        {/* Навигация */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          gap: 1,
          position: 'absolute',
          right: 0
        }}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              component={RouterLink}
              to={item.path}
              sx={{
                color: '#4CAF50',
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'transparent',
                  color: '#388E3C',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Мобильное меню */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
          sx={{ 
            color: '#4CAF50',
            position: 'absolute',
            right: { xs: 16, sm: 8 },
            display: { xs: 'flex', md: 'none' }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          PaperProps={{
            sx: {
              mt: 1,
              minWidth: 200,
              maxHeight: { xs: '80vh', sm: 'none' },
              boxShadow: 3,
              borderRadius: 1,
            }
          }}
        >
          {navItems.map((item) => (
            <MenuItem 
              key={item.text}
              component={RouterLink}
              to={item.path}
              onClick={handleMobileMenuClose}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  bgcolor: 'grey.50',
                },
              }}
            >
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 