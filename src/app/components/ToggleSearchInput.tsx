"use client";
import { useState } from "react";
import SearchInput from "./SearchInput";
export default function ToggleSearchInput() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <>
      <button
        className="px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-500 text-white mb-4"
        onClick={() => {
          setShowSearchInput(!showSearchInput);
        }}
      >
        {showSearchInput ? "Hide" : "Show"} Input
      </button>
      {showSearchInput && <SearchInput />}
    </>
  );
}
