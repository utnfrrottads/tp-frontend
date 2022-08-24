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
// Traigo todos los mensajes del usuario que esta "logeado"
//con los mensajes del usuario al que clickeo el chat y vicebersa
// despues ordeno por fecha y los muestro de manera descendiente

// Testing user id: 62eaa14c3901f21e944abfcd

export default function Chat({ list, allMessagesUserLogged }) {
  const [isOpen, setIsOpen] = useState(false);
  const [friend, setFriend] = useState(null);
  const [dataChatUser, setDataChatUser] = useState([]);

  // Ver si usar useEffect para que se limite la ejecucion
  const exitChat = () => setIsOpen(false);

  const handleChatIsOpen = async (idFriend) => {
    setIsOpen(true);
    setFriend(idFriend);
    setDataChatUser(
      allMessagesUserLogged.map((msg) => {
        if (msg.sender === friend || msg.receiver === friend) {
          return msg;
        }
      })
    );
    // console.log(dataChatUser);
  };
  // Aca obtendria la id correspondiente, mejorar

  return (
    <div className="h-screen w-screen flex flex-row overflow-y-auto">
      <div className="h-screen w-1/4 p-6 bg-slate-500">
        <Header />
        <hr />
        <FriendList handleChat={handleChatIsOpen} dataList={list} />
        <hr />
        <Footer />
        {/* Faltaria el dashboard de los mensajes y demas */}
      </div>
      {isOpen ? (
        <Dashboard messages={dataChatUser} exitChat={exitChat} />
      ) : (
        // Hacer componente
        <p>Pagina sin chats</p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(urlUser);
  const list = await res.json();
  // Traigo todos los amigos
  const resMessages = await fetch(urlMessages);
  const allMessagesUserLogged = await resMessages.json();
  // Traigo todos los mensajes donde sea receiver o sender

  return {
    props: {
      list,
      allMessagesUserLogged,
    },
  };
}
