"use client";

import { useState } from "react";
import type { ToDo } from "@/actions/getTodos";
import Input from "./SearchInput";

export default function ToDoList({ todos }: { todos: ToDo[] }) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <button
        className="px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-500 text-white mb-4"
        onClick={() => {
          setShowSearchInput(!showSearchInput);
        }}
      >
        {showSearchInput ? "Hide" : "Show"} Input
      </button>
      {showSearchInput && <Input />}
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
