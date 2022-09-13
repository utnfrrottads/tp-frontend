import FriendCard from "./FriendCard";

export default function FriendList({
  friendList,
  handleChat,
  dataChatHistory,
  searchFriend,
  usersNotInFriendList,
}) {
  const allUsers = [...friendList, ...usersNotInFriendList];

  const filteredData = friendList.filter((fr) => {
    if (searchFriend === "") {
      return fr;
    } else {
      return fr.name.includes(searchFriend);
    }
  });

  const chats = allUsers.map((f) => {
    const chatsByUser = dataChatHistory.filter((c) => {
      if (c.sender === f._id || c.receiver === f._id) {
        return c;
      }
    });
    return chatsByUser;
  });

  const lastMessages = chats.map((c) => {
    let size = Object.keys(c).length;
    return c[size - 1];
  });

  const usersNotInList = usersNotInFriendList.filter((us) => {
    return dataChatHistory.find((msg) => msg.sender === us._id);
  });

  return (
    <div className="container h-full py-4 accordion-item border ">
      <h2 className="p-4 font-semibold">Friends</h2>
      <ul className="h-1/2 grid grid-flow-row auto-rows-max gap-4 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-200">
        {filteredData.map((friend, index) => {
          return (
            <FriendCard
              handleChat={handleChat}
              data={friend}
              isFriend={true}
              lastMessage={
                lastMessages[index] ? lastMessages[index] : { date: new Date() }
              }
              key={index}
            />
          );
        })}
      </ul>

      <details className="p-4 rounded-lg overflow-y-auto h-auto w-full">
        <summary className="font-semibold cursor-pointer">
          Unknows Users
        </summary>
        <ul className="h-auto grid grid-flow-row auto-rows-max gap-4 px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-200">
          {usersNotInList.map((user, index) => {
            return (
              <FriendCard
                handleChat={handleChat}
                data={user}
                isFriend={false}
                lastMessage={{ date: new Date() }}
                key={index}
              />
            );
          })}
        </ul>
      </details>
    </div>
  );
}
