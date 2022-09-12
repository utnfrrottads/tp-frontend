import FriendCard from "./FriendCard";

export default function FriendList({ dataList, handleChat, dataChatHistory }) {
  const lastMessages = dataChatHistory[dataChatHistory.length - 1];

  console.log(lastMessages);

  return (
    <div className="container h-full py-4">
      <h2 className="my-2 mb-2 ml-2 text-lg font-semibold">Chats</h2>
      <ul className="h-[32rem] grid grid-flow-row auto-rows-max gap-4 px-2 overflow-y-auto">
        {dataList.map((friend, index) => {
          return (
            <FriendCard handleChat={handleChat} data={friend} key={index} />
          );
        })}
      </ul>
    </div>
  );
}
