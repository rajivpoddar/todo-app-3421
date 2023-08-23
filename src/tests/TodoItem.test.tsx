import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
describe('TodoItem', () => {
  test('renders without crashing', () => {
    const dummyTodo = { id: 1, text: 'dummy todo', completed: false };
    const toggleTodo = jest.fn(); // Add this line to create a mock function
    const { getByText } = render(<TodoItem todo={dummyTodo} toggleTodo={toggleTodo} />); // Include toggleTodo prop here
    expect(getByText(/dummy todo/i)).toBeInTheDocument();
  });

  test('toggles todo', () => {
    let dummyTodo = { id: 1, text: 'dummy todo', completed: false }; // Fix the type of "id" here as well
  
    const toggleTodo = (id: number) => { // Fix the type of "id" here
      dummyTodo = { ...dummyTodo, completed: !dummyTodo.completed };
    };
  
    const { getByText, rerender } = render(<TodoItem todo={dummyTodo} toggleTodo={toggleTodo} />);
    const checkbox = getByText(/dummy todo/i).previousSibling as HTMLInputElement;
    fireEvent.click(checkbox);
  
    rerender(<TodoItem todo={dummyTodo} toggleTodo={toggleTodo} />);
  
    expect(getByText(/dummy todo/i)).toHaveClass('line-through');
  });

});
