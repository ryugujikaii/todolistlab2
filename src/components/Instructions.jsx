export default function Instructions() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-red-700 mb-4">How to Use</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong className="text-blue-600">Add a task:</strong> Type your task in the input box and click "Add Task" (or press Enter).</li>
        <li><strong className="text-blue-600">Mark Done / Not Done:</strong> Click the "Mark Done" button on a task to mark it done, and "Mark Not Done" to undo it.</li>
        <li><strong className="text-red-600">Delete a task:</strong> Click the red "Delete" button next to the task you want to remove.</li>
        <li><strong className="text-red-600">Clear all:</strong> Use the "Clear All" button to reset the entire list.</li>
      </ul>
    </div>
  )
}
