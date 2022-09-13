import Image from "next/image";

export default function NotFriendCard({ user, handleAddFriendClick }) {
  return (
    <li className="h-24 w-full px-2 rounded-l bg-white hover:bg-gray-100 focus:outline-none cursor-pointer transition duration-150 ease-in-out">
      <a className="h-full flex items-center text-sm  border-gray-300  ">
        <div className="w-full h-full pb-2 px-4 flex items-center justify-between">
          <Image
            src={user.profileImage}
            alt="Profile img"
            height={64}
            width={64}
            className="rounded-full"
          />
          <span className="block ml-2 font-semibold text-gray-600">
            {user.name}
          </span>
          {/* <span className="block ml-2 w-10 text-sm text-gray-600 truncate">
            {user.description}
          </span> */}
          <button
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            onClick={() => handleAddFriendClick(user._id)}
          >
            Add friend
          </button>
        </div>
      </a>
    </li>
  );
}
