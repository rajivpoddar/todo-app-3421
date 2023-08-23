import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { TodoContextProvider, useTodoContext } from './components/TodoContext';

function App() {
  return (
    <div className='App bg-gray-100 min-h-screen'>
      <h1 className='text-4xl font-semibold text-center text-blue-600 py-4'>Todo App</h1>
      <TodoContextProvider>
        <AddTodoWrapper />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

const AddTodoWrapper: React.FC = () => {
  const { dispatch } = useTodoContext();

  const addTodo = (title: string) => {
    dispatch({ type: 'ADD_TODO', payload: title });
  };

  return <AddTodo addTodo={addTodo} />;
};

export default App;
