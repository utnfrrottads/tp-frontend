import Message from "./Message";
import { idUserLogged } from "../../utils/api";

export default function ContainerMessages({ messages, archivedMessages }) {
  // No funca
  const indexs = archivedMessages.map((e) => {
    return messages.indexOf(e._id);
  });
  console.log(indexs);

  return (
    <div className="h-5/6 w-full px-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-200">
      <ul className="space-y-6">
        {messages.map((m, i) => {
          if (m !== undefined) {
            return (
              <Message
                data={m}
                idUserLogged={m.sender === idUserLogged}
                isArchived={indexs.find((e) => e === i)}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}
