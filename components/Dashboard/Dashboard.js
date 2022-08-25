import ContainerMessages from "./ContainerMessages";
import HeaderProfile from "./HeaderProfile";
import FormMessage from "./FormMessage";
export default function Dashboard({ messages, exitChat, friend }) {
  // Falta filtarlos por fecha, diferenciarlos por color y contruirle un component
  // Y construir todo el dashboard

  const msgs = messages.map((msg) => {
    if (msg) {
      return msg.description;
    } else return undefined;
  });
  return (
    <div className="h-full w-full relative flex flex-col justify-between">
      <HeaderProfile friend={friend} />
      <ContainerMessages messages={msgs} />
      <FormMessage />
      <button className="absolute top-1/2" onClick={exitChat}>
        Exit Chat
      </button>
    </div>
  );
}
