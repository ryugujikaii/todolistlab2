import { useState } from 'react'
import TodoItem from './components/TodoItem'
import Instructions from './components/Instructions'

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') return
    setTasks([...tasks, { id: Date.now(), text: task.trim(), done: false }])
    setTask('')
  }

  const toggleDone = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const clearAll = () => setTasks([])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-red-600 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">My To-Do List</h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Enter a new task..."
            className="flex-1 border-2 border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Add Task
          </button>
        </div>

        {tasks.length > 0 && (
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600 text-sm">
              {tasks.filter(t => t.done).length} of {tasks.length} done
            </p>
            <button
              onClick={clearAll}
              className="text-sm bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded-lg transition"
            >
              Clear All
            </button>
          </div>
        )}

        <ul className="space-y-3">
          {tasks.length === 0 && (
            <li className="text-center text-gray-400 py-6">No tasks yet. Add one above!</li>
          )}
          {tasks.map(t => (
            <TodoItem
              key={t.id}
              task={t}
              onToggle={() => toggleDone(t.id)}
              onDelete={() => deleteTask(t.id)}
            />
          ))}
        </ul>
      </div>

      <Instructions />
    </div>
  )
}
