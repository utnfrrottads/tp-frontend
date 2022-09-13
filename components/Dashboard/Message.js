import { useState } from "react";

export default function Message({ data, idUserLogged }) {
  return (
    <li className={`flex items-end ${idUserLogged ? "justify-end" : null}`}>
      <div
        className={`flex flex-col space-y-2 text-md max-w-md mx-4  ${
          idUserLogged ? "order-2 items-start" : "order-1 items-end"
        }  shadow `}
      >
        <span
          className={`px-4 py-2 rounded-lg inline-block relative bg-gray-300 text-gray-600 ${
            idUserLogged
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-300 text-gray-600 rounded-bl-none"
          }`}
        >
          {data.description}
        </span>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={"none"}
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
        </svg> */}
      </div>
    </li>
  );
}
