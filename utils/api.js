export const idUserLogged = "62eaa14c3901f21e944abfcd";
const urlUser = `http://localhost:9000/api/v1/friendList/${idUserLogged}`;
const urlMessages = `http://localhost:9000/api/v1/messages/filter/${idUserLogged}`;
const urlFriendListFilter = `http://localhost:9000/api/v1/friendList/filter/${idUserLogged}`;
const urlFriendList = `http://localhost:9000/api/v1/friendList/${idUserLogged}`;
const urlArchivedMessages = `http://localhost:9000/api/v1/messages/archived/${idUserLogged}`;
const urlMessagesToSend = "http://localhost:9000/api/v1/messages/";

export async function getUsersNotInFriendList() {
  const resUsersNotInFriendList = await fetch(urlFriendListFilter);
  const usersNotInFriendList = await resUsersNotInFriendList.json();

  return usersNotInFriendList;
}

export async function getFriendList() {
  const resFriendsInList = await fetch(urlFriendList);
  const friendsInList = await resFriendsInList.json();

  console.log(friendsInList);
  return friendsInList;
}

export async function getArchivedMessages() {
  const resArchivedMessages = await fetch(urlArchivedMessages);
  const archivedMessages = await resArchivedMessages.json();

  return archivedMessages;
}

export async function getMessageHistory() {
  const resMessages = await fetch(urlMessages);
  const messagesHistorial = await resMessages.json();
  return messagesHistorial;
}

export async function postAddFriend(userID) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${urlFriendList}/${userID}`, requestOptions);

  return `Friend added: ${userID}`;
}

export async function postMessage(message, idReceiver) {
  const data = {
    description: message,
    sender: idUserLogged,
    receiver: idReceiver,
  };

  const JSONdata = JSON.stringify(data);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  const response = await fetch(urlMessagesToSend, options);

  return response;
}

export function filterMessages(messages) {
  const msgs = messages.filter((msg) => {
    return {
      description: msg.description,
      sender: msg.sender,
      receiver: msg.receiver,
      date: `${msg.date.split(".")[0]}`,
    };
  });
  return msgs;
}
