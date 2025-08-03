import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import Displayitems from './Displayitems';

function TodoListBody() {
    const [Todo, settodo] = useState('');
    const [Alltodo, setAlltodo] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        if (Todo.trim() === '') return;
        setAlltodo([...Alltodo, Todo]);
        settodo('');
    };

    const setTodoItem = (e) => {
        settodo(e.target.value);
    };
    const handleDelete = (indexToRemove) => {
        setAlltodo(Alltodo.filter((_, index) => index !== indexToRemove));
    };
    return (
        <div className="container">
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    gap: 2,
                    mt: { xs: 4, sm: 6, md: 10 }
                }}
            >
                <TextField
                    onChange={setTodoItem}
                    label="Add a task"
                    variant="outlined"
                    fullWidth
                    value={Todo}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            fontWeight: 'bold',
                            backgroundColor: 'transparent',
                            '&:hover fieldset': {
                                borderColor: '#fff705',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#fff705',
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#fff705',
                        },
                        '& .MuiInputLabel-root': {
                            fontWeight: 'bold',
                            color: '#000',
                            '&.Mui-focused': {
                                color: '#92904aff',
                            },
                        },
                        '& input': {
                            backgroundColor: 'transparent !important',
                            WebkitBoxShadow: '0 0 0 1000px transparent inset',
                            WebkitTextFillColor: '#000',
                        },
                    }}
                />

                <Button
                    onClick={handleClick}
                    variant="contained"
                    sx={{
                        backgroundColor: '#fff705',
                        color: '#000',
                        fontWeight: 'bold',
                        cursor: 'pointer !important',
                        '&:hover': {
                            backgroundColor: '#e6e200'
                        }
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
                />
            ))}
        </div>
    );
}

export default TodoListBody;
