import Message from "./Message";
import { idUserLogged } from "../../utils/api";

export default function ContainerMessages({ messages, archivedMessages }) {
  return (
    <div className="h-5/6 w-full px-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-200">
      <ul className="space-y-6">
        {messages.map((m, i) => {
          if (m !== undefined) {
            return (
              <Message data={m} idUserLogged={m.sender === idUserLogged} />
            );
          }
        })}
      </ul>
    </div>
  );
}
