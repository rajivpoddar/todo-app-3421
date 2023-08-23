import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4 max-w-lg mx-auto">
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Add a new task'
        className="w-full border rounded p-2 mr-2"
      />
      <button type='submit' className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
