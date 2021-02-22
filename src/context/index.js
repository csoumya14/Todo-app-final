import { createContext, useEffect, useState } from 'react';
import initTodoData from '../todoData';

export const Context = createContext();

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([initTodoData]);
  const [newTask, setNewTask] = useState('');
  const [state, setState] = useState(0); // 0 = All, 1 = Active, 2 = Completed

  const addTodo = (event) => {
    event.preventDefault();
    const todoObject = {
      id: new Date().getTime(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, todoObject]);
    setNewTask('');
  };

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTodo = (item) => {
    const filteredItem = todos.filter((i) => i.id !== item.id);
    setTodos(filteredItem);
  };

  const completeTodo = (id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[idx].completed = !newTodos[idx].completed;
    setTodos(newTodos);
  };

  const clearComplete = (item) => {
    const completedItems = todos.filter((i) => i.completed !== true);
    setTodos(completedItems);
  };

  const allButton = (item) => {
    setTodos(todos);
  };

  const activeButton = (item) => {
    const ActiveItems = todos.filter((i) => i.completed !== true);
    setTodos(ActiveItems);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    setTodos(storedTodos !== null ? JSON.parse(storedTodos) : initTodoData);
    localStorage.clear();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.clear();
  }, [todos]);

  const ContextValue = {
    todos,
    setTodos,
    newTask,
    setNewTask,
    addTodo,
    handleTaskChange,
    deleteTodo,
    completeTodo,
    clearComplete,
    setState,
    state,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;
