export default function TodoItem({ todo, onToggle }) {
  return (
    <li
      className={`cursor-pointer px-4 py-2 rounded border ${
        todo.done ? 'line-through text-gray-500 bg-gray-100' : 'bg-white'
      }`}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}
