import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

test('renders without crashing', () => {
  const { getByPlaceholderText } = render(<AddTodo addTodo={() => {}} />);
  const inputElement = getByPlaceholderText(/Add a new task/i);
  expect(inputElement).toBeInTheDocument();
});

test('allows the user to add a new todo', () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTodo addTodo={addTodo} />);
  const inputElement = getByPlaceholderText(/Add a new task/i);
  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  const buttonElement = getByText(/Add/i);
  fireEvent.click(buttonElement);
  expect(addTodo).toHaveBeenCalledWith('New Todo');
});