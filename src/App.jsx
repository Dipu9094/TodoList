import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build a Todo App', done: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleDone = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="max-w-xl mx-auto p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul className="mt-4 space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleDone} />
        ))}
      </ul>
      <button
        onClick={resetTodos}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
}
