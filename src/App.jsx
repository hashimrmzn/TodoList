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
  setAlltodo([...Alltodo, { text: Todo, completed: false }]);
  setTodo('');
};

  const handleDelete = (indexToRemove) => {
    setAlltodo(Alltodo.filter((_, index) => index !== indexToRemove));
  };
const handleComplete = (indexComplete) => {
  setAlltodo(
    Alltodo.map((item, index) =>
      index === indexComplete
        ? { ...item, completed: !item.completed }
        : item
    )
  );
};
const completedCount = Alltodo.filter(item => item.completed).length;
const remainingCount = Alltodo.filter(item => !item.completed).length;



  return (
    <Box
  
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 4 },
        backgroundColor: '#f8f8f8',
        overflowX: 'hidden'
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
          handleComplete={handleComplete}
         
        />
      </Box>

      <Footer totask={Alltodo.length} 
      remainingCount={remainingCount}
      completedCount={completedCount}/>
    </Box>
  );
}

export default App;
