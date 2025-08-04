import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import TodoListBody from './components/TodoListBody/TodoListBody';
import { Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const [Alltodo, setAlltodo] = useState([]);
  const [Todo, setTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (Todo.trim() === '') return;
    setAlltodo([...Alltodo, Todo]);
    setTodo('');
  };

  const handleDelete = (indexToRemove) => {
    setAlltodo(Alltodo.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 4 },
        backgroundColor: '#f8f8f8',
      }}
    >
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <TodoListBody
          Todo={Todo}
          setTodo={setTodo}
          Alltodo={Alltodo}
          handleClick={handleAddTodo}
          handleDelete={handleDelete}
        />
      </Box>

      <Footer totask={Alltodo.length} remain={Alltodo.length} />
    </Box>
  );
}

export default App;
