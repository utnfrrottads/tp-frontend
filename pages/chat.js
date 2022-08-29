import Footer from "../components/FriendList/Footer";
import FriendList from "../components/FriendList/FriendList";
import Header from "../components/FriendList/Header";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";

const idUserLogged = "62eaa14c3901f21e944abfcd";
const urlUser =
  "http://localhost:9000/api/v1/friendList/62eaa14c3901f21e944abfcd";
// Aca tendria que ir una especie de session con la id del usuario que se logeo para obtener sus datos

const urlMessages = `http://localhost:9000/api/v1/messages/filter/${idUserLogged}`;

// Traigo todos los mensajes del usuario que esta "logeado" con OTRO ENDPOINT para facilitar la request
//con los mensajes del usuario al que clickeo el chat y vicebersa
// despues ordeno por fecha y los muestro de manera descendiente
// Testing user id: 62eaa14c3901f21e944abfcd

export default function Chat({ list, messagesHistory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [friend, setFriend] = useState({});
  const [dataChatUser, setDataChatUser] = useState([]);

  const exitChat = () => setIsOpen(false);

  const handleChatIsOpen = (idFriend) => {
    setIsOpen(true);
    if (idFriend !== friend._id && friend !== {}) {
      const f = list.find((user) => user._id === idFriend);
      setFriend(f);
    }
  };

  useEffect(() => {
    const filterMsg = () => {
      const newData = messagesHistory.map((msg) => {
        if (msg.sender === friend._id || msg.receiver === friend._id) {
          return msg;
        } else null;
      });
      setDataChatUser(newData);
      console.log(dataChatUser);
    };
    filterMsg();
  }, [friend]);

  return (
    <div className="h-screen w-screen flex flex-row overflow-y-hidden">
      <div className="h-full w-1/4 bg-slate-200 py-4">
        <Header />
        <FriendList
          handleChat={handleChatIsOpen}
          dataList={list}
          dataChatHistory={messagesHistory}
        />
        <hr />
        <Footer />
        {/* Faltaria el dashboard de los mensajes y demas */}
      </div>
      <div className="h-full w-3/4">
        {isOpen ? (
          <Dashboard
            messages={dataChatUser}
            exitChat={exitChat}
            friend={friend}
          />
        ) : (
          // Hacer componente
          <p>Pagina sin chats</p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(urlUser);
  const list = await res.json();
  // Traigo todos los amigos
  const resMessages = await fetch(urlMessages);
  const messagesHistory = await resMessages.json();
  // Traigo todos los mensajes donde sea receiver o sender

  return {
    props: {
      list,
      messagesHistory,
    },
  };
}
