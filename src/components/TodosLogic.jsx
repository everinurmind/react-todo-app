import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/extensions
import InputTodo from '@/components/InputTodo';
// eslint-disable-next-line import/extensions
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos || [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (id) => {
    // eslint-disable-next-line max-len
    setTodos((prevState) => prevState.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const addTodoItem = (title) => {
    setTodos([...todos, { id: uuidv4(), title, completed: false }]);
  };

  const delTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const setUpdates = (updatedTitle, id) => {
    // eslint-disable-next-line max-len
    setTodos((prevState) => prevState.map((todo) => (todo.id === id ? { ...todo, title: updatedTitle } : todo)));
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList
        todos={todos}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdates={setUpdates}
      />
    </div>
  );
};

export default TodosLogic;
