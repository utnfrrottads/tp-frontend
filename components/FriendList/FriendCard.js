import Image from "next/image";

export default function FriendCard({ data, handleChat }) {
  return (
    <li className="h-12 w-full rounded-xl bg-white hover:cursor-pointer px-4">
      <a
        onClick={() => handleChat(data._id)}
        className="h-full w-full flex flex-row items-center"
      >
        <Image
          src={data.profileImage}
          alt="Profile img"
          height={32}
          width={32}
          className="rounded-full"
        />
        <h1 className="font-semibold px-4">{data.name}</h1>
      </a>
    </li>
  );
}
