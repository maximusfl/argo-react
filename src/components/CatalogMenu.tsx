import React from 'react';
import { 
  Popover, 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import { 
  LocalPharmacy, 
  Home, 
  Spa, 
  Science, 
  Kitchen, 
  MoreHoriz 
} from '@mui/icons-material';

interface CatalogMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const CatalogMenu: React.FC<CatalogMenuProps> = ({ anchorEl, onClose }) => {
  const open = Boolean(anchorEl);

  const menuItems = [
    { text: 'Биолит', icon: <LocalPharmacy /> },
    { text: 'Литовит', icon: <Spa /> },
    { text: 'Популин', icon: <Science /> },
    { text: 'Коллоидные препараты', icon: <LocalPharmacy /> },
    { text: 'Товары Арго для дома', icon: <Home /> },
    { text: 'Ещё лолоо', icon: <Kitchen /> },
    { text: 'Тралала', icon: <MoreHoriz /> },
    { text: 'Хехехехе', icon: <MoreHoriz /> },
  ];

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          mt: 1,
          width: 300,
          maxHeight: 400,
          boxShadow: 3,
          borderRadius: 1,
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="primary" gutterBottom>
          Каталог товаров
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <List sx={{ p: 0 }}>
          {menuItems.map((item, index) => (
            <React.Fragment key={item.text}>
              <ListItem 
                button 
                onClick={onClose}
                sx={{
                  '&:hover': {
                    bgcolor: 'grey.50',
                  },
                  borderRadius: 1,
                }}
              >
                <ListItemIcon sx={{ color: '#4CAF50' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: { fontSize: '0.95rem' }
                  }}
                />
              </ListItem>
              {index < menuItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Popover>
  );
};

export default CatalogMenu; 