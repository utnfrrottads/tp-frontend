
export const idUserLogged = "62eaa14c3901f21e944abfcd";
const urlUser = `http://localhost:9000/api/v1/friendList/`;
const urlMessages = `http://localhost:9000/api/v1/messages/filter/`;
const urlFriendListFilter = `http://localhost:9000/api/v1/friendList/filter/`;
const urlFriendList = `http://localhost:9000/api/v1/friendList/`;
const urlArchivedMessages = `http://localhost:9000/api/v1/messages/archived/`;
const urlMessagesToSend = "http://localhost:9000/api/v1/messages/";

export async function getUsersNotInFriendList(idUser) {
  

  const endpoint = urlFriendListFilter + idUser;
  const resUsersNotInFriendList = await fetch(endpoint);
  const usersNotInFriendList = await resUsersNotInFriendList.json();

  return usersNotInFriendList;
}

export async function getFriendList(idUser) {
  const endpoint = urlFriendList + idUser;
  const resFriendsInList = await fetch(endpoint);
  const friendsInList = await resFriendsInList.json();
  console.log("endpoint")
  console.log(endpoint)
  console.log(friendsInList);
  return friendsInList;
}

export async function getArchivedMessages(idUser) {
  const endpoint = urlArchivedMessages + idUser;
  const resArchivedMessages = await fetch(endpoint);
  const archivedMessages = await resArchivedMessages.json();

  return archivedMessages;
}

export async function getMessageHistory(idUser) {
  const endpoint = urlMessages + idUser;
  const resMessages = await fetch(endpoint);
  const messagesHistorial = await resMessages.json();
  return messagesHistorial;
}

export async function postAddFriend(friendID, userID) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${urlFriendList}/${userID}/${friendID}`, requestOptions);

  return `Friend added: ${userID}`;
}

export async function postMessage(message, idReceiver, idUser) {
  const data = {
    description: message,
    sender: idUser,
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
