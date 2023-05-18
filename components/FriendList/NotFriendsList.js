import { useRouter } from "next/router";
import { useState } from "react";
import NotFriendCard from "./NotFriendCard";
import { postAddFriend } from "../../utils/api";
import {useUser} from '../../context/userContext'


export default function NotFriendsList({ data, setStatusMenu }) {

  const {user} =  useUser()


  const handleAddFriendClick = async (id) => {
    await postAddFriend(id, user._id).then((msg) => {
      alert(msg);
      setStatusMenu("Chats");
    });
  };

  return (
    <div className="container h-full py-4">
      <ul className="h-3/4 grid grid-flow-row auto-rows-max gap-4 px-4 overflow-y-auto">
        {data.map((user, index) => {
          return (
            <NotFriendCard
              user={user}
              key={index}
              handleAddFriendClick={handleAddFriendClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
