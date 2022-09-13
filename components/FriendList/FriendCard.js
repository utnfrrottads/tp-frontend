import Image from "next/image";
import { useState } from "react";

const defaultSrc = "/user_icon.png";

export default function FriendCard({
  data,
  handleChat,
  lastMessage,
  isFriend,
}) {
  const [imageError, setImageError] = useState(false);

  const date = new Date(lastMessage.date);
  const dateNow = new Date();
  const daysDiff = Math.floor((dateNow - date) / (1000 * 60 * 60 * 24));
  const hoursDiff = Math.floor((dateNow - date) / (1000 * 60 * 60));
  const minDiff = Math.floor((dateNow - date) / (1000 * 60));

  return (
    <li className="h-24 w-full px-2 rounded-l bg-white hover:bg-gray-100 focus:outline-none cursor-pointer transition duration-150 ease-in-out">
      <a
        className="h-full flex items-center text-sm  border-gray-300  "
        onClick={() => handleChat(data._id)}
      >
        <Image
          src={imageError ? defaultSrc : data.profileImage}
          alt="Profile img"
          height={64}
          width={64}
          className="rounded-full"
          onErrorCapture={(e) => setImageError(true)}
        />
        <div className="w-full pb-2">
          <div className="flex justify-between items-center">
            <span className="block ml-6 font-semibold text-gray-600">
              {data.name}
            </span>
            {isFriend ? (
              <span className="block ml-2 text-sm text-gray-600">
                {minDiff <= 60
                  ? `${minDiff} min`
                  : hoursDiff <= 24
                  ? `${hoursDiff} hs`
                  : `${daysDiff} day`}
              </span>
            ) : (
              <div className="">
                <button
                  type="button"
                  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  // onClick={() => handleAddFriendClick(user._id)}
                >
                  Add friend
                </button>
              </div>
            )}
          </div>
          <span className="block ml-6 text-sm text-gray-600">
            {lastMessage.description}
          </span>
        </div>
      </a>
    </li>
  );
}
