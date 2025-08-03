import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Displayitems({ singleitem, onDelete }) {
  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '2px solid #000',
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color="text.primary"
        sx={{ wordBreak: 'break-word', flex: 1 }}
      >
        {singleitem}
      </Typography>

      <IconButton
        aria-label="delete"
        onClick={onDelete}
        sx={{
          color: '#d32f2f',
          ml: 2,
          '&:hover': {
            backgroundColor: '#ffebee',
          },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default Displayitems;
