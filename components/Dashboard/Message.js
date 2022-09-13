import { useState } from "react";

export default function Message({ data, idUserLogged, isArchived }) {
  return (
    <li className="flex justify-end">
      <div
        className={`relative max-w-xl px-6 py-3 text-gray-700 ${
          idUserLogged ? "bg-gray-300" : null
        } rounded shadow relative`}
      >
        <span className="block mr-3">{data.description}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isArchived ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 absolute top-3 right-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>

        <span className="">{data.date}</span>
      </div>
    </li>
  );
}
