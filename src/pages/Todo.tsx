import { useEffect, useState } from "react";

type Todo = {
  title: string;
  description: string;
  status: string;
};

export default function TodoForm() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleAddTodo = () => {
    if (title && description && status) {
      setTodos([...todos, { title, description, status}]);
      setTitle("");
      setDescription("");
      setStatus("");
    }
  };
  
  // Load from localStorage on mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  return (
    <div>
      <h3> Add ToDo </h3>
      <form onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            handleAddTodo();
          }}>
        <input
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <textarea
          id="message"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your task description here..."
        ></textarea>
        <select
          id="countries"
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="pending">Pending</option>
          <option value="complete">Complete</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </form>
        <ul className="mt-4 space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800"
            >
              <h4 className="font-bold text-lg">{todo.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {todo.description}
              </p>
              <span
                className={`text-xs font-medium px-2 py-1 rounded ${
                  todo.status === "complete"
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {todo.status}
              </span>
            </li>
          ))}
        </ul>
    </div>
  );
}
