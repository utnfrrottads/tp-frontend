export default function Message({ data, idUserLogged }) {
  return (
    <li className={`flex items-end ${idUserLogged ? "justify-end" : null}`}>
      <div
        className={`flex flex-col max-w-md space-y-1 text-sm mx-1 md:space-y-2 md:text-base md:mx-4  ${
          idUserLogged ? "order-2 items-start" : "order-1 items-end"
        }  shadow `}
      >
        <span
          className={`px-4 py-2 rounded-lg inline-block relative bg-gray-300  ${
            idUserLogged
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-300 text-gray-600 rounded-bl-none"
          }`}
        >
          {data.description}
        </span>
      </div>
    </li>
  );
}
