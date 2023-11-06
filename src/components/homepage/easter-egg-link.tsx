"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Colors = [
  "stroke-red-600",
  "stroke-green-500",
  "stroke-blue-600",
  "stroke-amber-300",
  "stroke-neutral-300",
];

export default function EasterEggLink() {
  const [colorIndex, setColorIndex] = useState(-1);

  const currentColor =
    colorIndex > -1 ? Colors[colorIndex] : "stroke-neutral-700";

  const scrambleColor = () => {
    setColorIndex(Math.floor(Math.random() * Colors.length));
  };

  const router = useRouter();

  return (
    <button
      className={`absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-neutral-400 focus-visible:text-orange-300`}
      onMouseEnter={scrambleColor}
      onMouseLeave={() => setColorIndex(-1)}
      onClick={() => router.push("/zelda")}
    >
      <span className="sr-only">Click to see easter egg</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        strokeWidth="1"
        aria-hidden="true"
        className={`h-6 w-6 ${currentColor}`}
      >
        <path d="M14.12,5.99l-3.9-3.9c-0.12-0.12-0.31-0.12-0.43,0l-3.9,3.9C5.83,6.04,5.79,6.12,5.79,6.2v7.59   c0,0.08,0.03,0.16,0.09,0.22l3.9,3.9c0.12,0.12,0.31,0.12,0.43,0l3.9-3.9c0.06-0.06,0.09-0.14,0.09-0.22V6.2   C14.21,6.12,14.17,6.04,14.12,5.99z"></path>
        <path d="M11.97,6.77l-1.75-1.75c-0.12-0.12-0.31-0.12-0.43,0L8.03,6.77C7.98,6.83,7.95,6.91,7.95,6.99v6.09   c0,0.08,0.03,0.16,0.09,0.22l1.75,1.75c0.12,0.12,0.31,0.12,0.43,0l1.75-1.75c0.06-0.06,0.09-0.14,0.09-0.22V6.99   C12.05,6.91,12.02,6.83,11.97,6.77z"></path>
        <line x1="10" y1="2" x2="10" y2="4.94"></line>
        <line x1="12.03" y1="6.87" x2="14.18" y2="6.09"></line>
        <line x1="12.03" y1="13.19" x2="14.18" y2="13.91"></line>
        <line x1="10" y1="18" x2="10" y2="15.13"></line>
        <line x1="5.82" y1="13.91" x2="7.97" y2="13.19"></line>
        <line x1="5.82" y1="6.09" x2="7.97" y2="6.87"></line>
      </svg>
    </button>
  );
}
