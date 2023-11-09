import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpcomingBox({ todo, }) {
  const boxStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={boxStyle}>
      <div>
        <strong>{todo.title}</strong>
        <p>{todo.description}</p>
        <p>{todo.due_date}</p>
      </div>     
    </div>
  );
}

function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodoItems = () => {
    axios
      .get('http://localhost:7000/api/todos/')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Error fetching todo items:', error);
      });
  };

  useEffect(() => {
    fetchTodoItems();
  }, []);



  return (
    <div>
      <h1>Todo lists</h1>
    
      <ul>
        {todos.map((todo) => (
          <UpcomingBox
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
     
    </div>
  );
}

export default Home;
