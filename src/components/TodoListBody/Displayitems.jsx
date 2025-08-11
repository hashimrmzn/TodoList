import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Displayitems({ singleitem, onDelete,onComplete }) {
  return (
    <Box
      sx={{
        mt: 3,
        p: 1,
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
  sx={{
    wordBreak: 'break-word',
    flex: 1,
    textDecoration: singleitem.completed ? 'line-through' : 'none',
    color: singleitem.completed ? '#000' : '#000'
  }}
>
  {singleitem.text}
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

        <IconButton aria-label="complete" onClick={onComplete} sx={{ color: "green" }}>
          <DoneIcon />
        </IconButton>
    </Box>
  );
}

export default Displayitems;
