"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Input() {
  const pathname = usePathname();
  const [text, setText] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLocaleLowerCase();
    setText(inputValue);
    router.push(`${pathname}?filter=${inputValue}`);
  };
  return (
    <input
      type="text"
      name="filter"
      aria-label="Filter todos"
      placeholder="Enter keywords"
      value={text}
      onChange={handleChange}
      className="px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white text-gray-800 mb-4s"
    />
  );
}
