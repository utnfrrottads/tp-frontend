import Image from "next/image";

// Ver como hacer para vincular los mensajes con los usuarios que lo mandaron
// Desde el back podria ver como popular los archived por sender o receiver != a la id
// Desde el front alguna manera de mergear los arrays

export default function ArchivedList({
  data,
  friendList,
  usersNotInFriendList,
}) {
  const allUsers = [...friendList, ...usersNotInFriendList];

  const userData = allUsers.find((user) => {});

  return (
    <ul className="h-1/2 grid grid-flow-row auto-rows-max gap-4 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-200 py-2">
      {data.map((msg, i) => {
        return (
          <li
            key={i}
            className="h-24 w-full px-2 rounded-l bg-white hover:bg-gray-100 focus:outline-none cursor-pointer transition duration-150 ease-in-out"
          >
            <a className="h-full flex items-center text-sm  border-gray-300">
              <div>
                {/* <Image
                  height={24}
                  width={24}
                  src={allUsers[i].profileImage}
                  alt={"Profile img"}
                /> */}
                {/* <span>{allUsers[i].name}</span> */}
              </div>
              <span>{msg.description}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
