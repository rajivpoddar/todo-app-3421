import React from 'react';
import { Todo } from './TodoContext';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
