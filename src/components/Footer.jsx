import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer({ totask, remain }) {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        mt: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 3 },
        backgroundColor: '#000',
        borderRadius: 3,
        boxShadow: '0 6px 25px rgba(0,0,0,0.4)',
        color: '#fff705',
        fontWeight: 'bold',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: 'center', sm: 'left' },
          flex: 1,
        }}
      >
        📋 Remaining Tasks: {remain}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: 'center', sm: 'right' },
          flex: 1,
        }}
      >
        ✅ Total Tasks: {totask}
      </Typography>
    </Box>
  );
}

export default Footer;
