export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg p-3">
      <div className="flex-1 min-w-0">
        <p className={`truncate ${task.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.text}
        </p>
        <span className={`text-xs font-semibold ${task.done ? 'text-blue-600' : 'text-red-600'}`}>
          {task.done ? 'Done' : 'Not Done'}
        </span>
      </div>
      <button
        onClick={onToggle}
        className={`text-sm font-semibold px-3 py-1 rounded-lg text-white transition ${
          task.done ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {task.done ? 'Mark Not Done' : 'Mark Done'}
      </button>
      <button
        onClick={onDelete}
        className="text-sm font-semibold px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
      >
        Delete
      </button>
    </li>
  )
}
