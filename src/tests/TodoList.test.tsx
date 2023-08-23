import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoContext } from '../components/TodoContext';
import TodoList from '../components/TodoList';

const mockTodos = [
  { id: 1, text: 'Todo 1', completed: false },
  { id: 2, text: 'Todo 2', completed: true },
];

const mockState = {
  state: { todos: mockTodos },
  dispatch: jest.fn(), // Add dummy implementation
  toggleTodo: jest.fn(), // Add dummy implementation
  removeTodo: jest.fn(), // Add dummy implementation
};

test('renders without crashing', () => {
  render(
    <TodoContext.Provider value={mockState}>
      <TodoList />
    </TodoContext.Provider>
  );
  const todoElement = screen.getByText(/Todo 1/i);
  expect(todoElement).toBeInTheDocument();
});

test('renders completed todos correctly', () => {
  render(
    <TodoContext.Provider value={mockState}>
      <TodoList />
    </TodoContext.Provider>
  );
  const completedTodoElement = screen.getByText(/Todo 2/i);
  expect(completedTodoElement).toHaveClass('line-through');
});
