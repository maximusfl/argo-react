import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: 'white',
        borderTop: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Typography 
        variant="caption" 
        sx={{ 
          color: '#4CAF50',
          fontSize: '0.7rem',
          opacity: 0.9,
          letterSpacing: '0.02em',
          fontWeight: 500,
          display: 'block',
          textAlign: 'center',
          lineHeight: 1.2
        }}
      >
        сайт участника 12345678
      </Typography>
    </Box>
  );
};

export default Footer; 