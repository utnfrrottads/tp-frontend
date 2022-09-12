import Image from "next/image";

export default function FriendCard({ data, handleChat }) {
  return (
    <li className="h-14 w-full px-2 rounded-l bg-white hover:bg-gray-100 focus:outline-none cursor-pointer transition duration-150 ease-in-out">
      <a
        className="h-full flex items-center text-sm  border-gray-300  "
        onClick={() => handleChat(data._id)}
      >
        <Image
          src={data.profileImage}
          alt="Profile img"
          height={32}
          width={32}
          classNameName="rounded-full"
        />
        <div className="w-full pb-2">
          <div className="flex justify-between">
            <span className="block ml-2 font-semibold text-gray-600">
              {data.name}
            </span>
            <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
          </div>
          <span className="block ml-2 text-sm text-gray-600">bye</span>
        </div>
      </a>
    </li>
  );
}
