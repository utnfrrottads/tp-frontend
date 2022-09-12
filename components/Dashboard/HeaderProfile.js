import Image from "next/image";

export default function HeaderProfile({ friend }) {
  return (
    <div className="relative flex items-center h-16 border-b border-gray-300">
      <Image
        className="object-cover rounded-full"
        height="40px"
        width="40px"
        src={friend.profileImage}
        alt="username profile picture"
      />
      <span className="block ml-2 font-bold text-gray-600">{friend.name}</span>
      {/* <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span> */}
    </div>
  );
}
