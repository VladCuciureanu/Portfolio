"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EasterEggLink() {
  const [colorIndex, setColorIndex] = useState(-1);

  const router = useRouter();

  return (
    <button
      className={`fixed bottom-0 right-0 inline-flex items-center px-4 py-4 font-medium text-stone-600 dark:text-stone-400 focus-visible:text-orange-500 dark:focus-visible:text-orange-300 group/mac`}
      onClick={() => router.push("/macintosh")}
    >
      <span className="sr-only">Click to see easter egg</span>
      <svg
        version="1.1"
        id="mac"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 25 32"
        className="h-8 w-[1.5625rem] fill-neutral-400 group-hover/mac:fill-black dark:fill-neutral-700 dark:group-hover/mac:fill-white"
      >
        <g
          id="happy"
          className="opacity-0 group-hover/mac:opacity-100 transition-colors"
        >
          <path d="M12,14c-0.5,0-1.5,0-2,0v1c1.2,0,2.8,0,4,0v-1C13.5,14,12.5,14,12,14z" />
          <rect x="14" y="13" width="1" height="1" />
          <rect x="9" y="13" width="1" height="1" />
          <path d="M13,12c0-1.6,0-3.4,0-5h-1c0,1.2,0,2.8,0,4h-1v1C11.5,12,12.5,12,13,12z" />
          <path d="M9,8V7H8c0,0.5,0,1.5,0,2h1V8z" />
          <path d="M16,8v1h1c0-0.5,0-1.5,0-2h-1V8z" />
        </g>
        <g id="shell" className="transition-colors">
          <path
            d="M22,27c-7,0-14,0-21,0c0,1.6,0,3.4,0,5c7.6,0,15.4,0,23,0c0-1.6,0-3.4,0-5C23.5,27,22.5,27,22,27z M23,29c0,0.5,0,1.5,0,2
		c-7,0-14,0-21,0c0-0.9,0-2.1,0-3c7,0,14,0,21,0V29z"
          />
          <path d="M1,25C1,17.4,1,9.6,1,2H0c0,8.3,0,16.7,0,25h1C1,26.5,1,25.5,1,25z" />
          <path d="M19,22c-1.2,0-2.8,0-4,0v1c2,0,4,0,6,0v-1C20.5,22,19.5,22,19,22z" />
          <path d="M3,22v1c0.5,0,1.5,0,2,0v-1C4.5,22,3.5,22,3,22z" />
          <path d="M19,17c-5,0-10,0-15,0v1c5.6,0,11.4,0,17,0v-1C20.5,17,19.5,17,19,17z" />
          <path d="M4,15c0-3.6,0-7.4,0-11H3c0,4.3,0,8.7,0,13h1C4,16.5,4,15.5,4,15z" />
          <path d="M21,5c0,4,0,8,0,12h1c0-4.3,0-8.7,0-13h-1V5z" />
          <path d="M6,4c5,0,10,0,15,0V3C15.4,3,9.6,3,4,3v1C4.5,4,5.5,4,6,4z" />
          <path d="M24,2c0,8.3,0,16.7,0,25h1c0-8.3,0-16.7,0-25H24z" />
          <rect x="23" y="1" width="1" height="1" />
          <rect x="1" y="1" width="1" height="1" />
          <path d="M4,1c6.3,0,12.7,0,19,0V0C16,0,9,0,2,0v1C2.5,1,3.5,1,4,1z" />
        </g>
        <g
          id="sad"
          className="opacity-100 group-hover/mac:opacity-0 transition-colors"
        >
          <rect x="16.4" y="15" width="1" height="1" />
          <path d="M15.4,14h-1v1c0.5,0,1.5,0,2,0v-1H15.4z" />
          <rect x="8.4" y="14" width="1" height="1" />
          <path d="M13.4,13c-1.2,0-2.8,0-4,0v1c1.6,0,3.4,0,5,0v-1H13.4z" />
          <path d="M11.4,12h1v-1c-0.5,0-1.5,0-2,0v1H11.4z" />
          <rect x="12.4" y="10" width="1" height="1" />
          <rect x="9.4" y="10" width="1" height="1" />
          <rect x="16.4" y="8" width="1" height="1" />
          <rect x="14.4" y="8" width="1" height="1" />
          <rect x="8.4" y="8" width="1" height="1" />
          <rect x="6.4" y="8" width="1" height="1" />
          <rect x="15.4" y="7" width="1" height="1" />
          <rect x="7.4" y="7" width="1" height="1" />
          <rect x="16.4" y="6" width="1" height="1" />
          <rect x="14.4" y="6" width="1" height="1" />
          <rect x="8.4" y="6" width="1" height="1" />
          <rect x="6.4" y="6" width="1" height="1" />
        </g>
      </svg>
    </button>
  );
}
