export default function Header({
  search,
  searchFriend,
  handleClickHeader,
  status,
}) {
  return (
    <div className="h-32 w-full flex flex-col items-center justify-center py-4 ">
      <div className="h-16 text-gray-600 w-5/6">
        <div className="relative inset-y-0 left-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-gray-300"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            type="text"
            className="w-full py-2 pl-10 bg-gray-100 rounded outline-none"
            name="search"
            placeholder="Search"
            value={searchFriend}
            onChange={(e) => search(e)}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <a
          className={`inline-block font-semibold cursor-pointer border-b-2 border-transparent transition-all duration-200 p-4 rounded-t-lg ${
            status === "Chats"
              ? "text-blue-500 border-blue-300 dark:focus:text-blue-500 "
              : null
          }`}
          onClick={(e) => handleClickHeader(e)}
          name="Chats"
        >
          Chats
        </a>
        <a
          className={`inline-block font-semibold cursor-pointer border-b-2 border-transparent p-4 rounded-t-lg transition-all duration-200	 ${
            status === "Find"
              ? "text-blue-500 border-blue-300 dark:focus:text-blue-500"
              : null
          }`}
          onClick={(e) => handleClickHeader(e)}
          name="Find"
        >
          Find new people!
        </a>
        <a
          className={`inline-block font-semibold cursor-pointer border-b-2 border-transparent p-4 rounded-t-lg transition-all duration-200	 ${
            status === "Archived"
              ? "text-blue-500 border-blue-300 dark:focus:text-blue-500"
              : null
          }`}
          onClick={(e) => handleClickHeader(e)}
          name="Archived"
        >
          Archived messages
        </a>
      </div>
    </div>
  );
}
