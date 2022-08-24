import FriendCard from "./FriendCard";

export default function FriendList({ dataList, handleChat }) {
  return (
    <div className="container h-full py-4">
      <ul className="h-auto grid grid-flow-row auto-rows-max gap-4">
        {dataList.map((friend, index) => {
          return (
            <FriendCard handleChat={handleChat} data={friend} key={index} />
          );
        })}
      </ul>
    </div>
  );
}
