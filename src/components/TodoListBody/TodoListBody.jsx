import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import Displayitems from './Displayitems';

function TodoListBody({ Todo, setTodo, Alltodo, handleClick, handleDelete,handleComplete }) {
  const setTodoItem = (e) => setTodo(e.target.value);

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleClick}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          mb: 4,
          mt: 4
        }}
      >
        <TextField
          onChange={setTodoItem}
          value={Todo}
          label="Add a task"
          variant="outlined"
          fullWidth
          sx={{
            border: 1,
            outline:"none !important",
            borderColor: "#fff705 !important",
            '& .MuiOutlinedInput-root': {
              fontWeight: 'bold',
              backgroundColor: 'white',
              '&:hover fieldset': {
                borderColor: '#fff705 !important',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fff705 !important',
              },
            },
            '& .MuiInputLabel-root': {
              fontWeight: 'bold',
              color: '#000',
              '&.Mui-focused': {
                color: '#0f0f0fff !important',
              },
            },
            '& input': {
              color: '#000',
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#fff705',
            color: '#000',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#e6e200',
            },
          }}
        >
          Add
        </Button>
      </Box>

      {Alltodo.map((item, index) => (
        <Displayitems
          key={index}
          singleitem={item}
          onDelete={() => handleDelete(index)}
          onComplete={() => handleComplete(index)}
        />
      ))}
    </Box>
  );
}

export default TodoListBody;
