import { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1 w-2/3"
        placeholder="Enter a todo..."
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
