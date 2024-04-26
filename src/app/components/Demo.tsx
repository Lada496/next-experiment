"use client";
import { useState } from "react";

export default function Demo() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button
        className="px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-500 text-white mb-4"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Hi" : "Hello"}
      </button>
      <p>This is a demo component appearing only when filter is applied</p>
    </>
  );
}
