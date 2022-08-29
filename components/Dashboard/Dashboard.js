import ContainerMessages from "./ContainerMessages";
import HeaderProfile from "./HeaderProfile";
import FormMessage from "./FormMessage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const idUserLogged = "62eaa14c3901f21e944abfcd";

export default function Dashboard({ messages, exitChat, friend }) {
  // Falta filtarlos por fecha, diferenciarlos por color y contruirle un component
  // Y construir todo el dashboard
  // Usuario logeado y tendriamos que obtenerlo por global context
  const router = useRouter();
  const forceReload = () => {
    router.reload();
  };

  const endpoint = "http://localhost:9000/api/v1/messages/";

  const [messageForm, setMessageForm] = useState("");

  const handleChangeInput = (event) => {
    setMessageForm(event.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      description: messageForm,
      sender: idUserLogged,
      receiver: friend._id,
    };

    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response
      .json()
      .then(alert("Msg sended"))
      .then(forceReload());
  };

  const msgs = messages.map((msg) => {
    if (msg) {
      return {
        description: msg.description,
        sender: msg.sender,
        receiver: msg.receiver,
        date: `${msg.date.split(".")[0]}`,
      };
    } else return undefined;
  });
  return (
    <div className="h-full w-full relative flex flex-col justify-between">
      <HeaderProfile friend={friend} />
      <ContainerMessages messages={msgs} />
      <FormMessage
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        message={messageForm}
      />
      <button className="absolute top-1/2" onClick={exitChat}>
        Exit Chat
      </button>
    </div>
  );
}
