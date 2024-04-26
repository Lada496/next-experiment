import type { ToDo } from "@/actions/getTodos";
import ToggleSearchInput from "./ToggleSearchInput";

export default function ToDoList({ todos }: { todos: ToDo[] }) {
  return (
    <div className="flex flex-col w-full">
      <ToggleSearchInput />
      <ul className="mt-4 flex-grow">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center bg-white shadow overflow-hidden sm:rounded-md mb-2 border-l-4 border-pink-500"
          >
            <div className="flex-grow px-4 py-3">
              <p className="text-sm font-medium text-gray-900">{todo.task}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
