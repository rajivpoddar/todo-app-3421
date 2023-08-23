import React, { useContext } from 'react';
import { Todo, TodoContext } from './TodoContext';

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoList must be used within a TodoContextProvider');
  }
  const { state, toggleTodo, removeTodo } = context; 
  const { todos } = state;

  return (
    <div className='todo-list max-w-lg mx-auto'>
      {todos.map((todo: Todo, index: number) => (
        <div key={index} className='todo-item flex justify-between items-center p-2 border-b'>
          <p className={todo.completed ? 'line-through' : ''}>{todo.text}</p>
          <div>
            <button onClick={() => toggleTodo(todo.id)} className='bg-green-500 text-white p-1 rounded mr-2'>
              Complete
            </button> 
            <button onClick={() => removeTodo(todo.id)} className='bg-red-500 text-white p-1 rounded'>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
