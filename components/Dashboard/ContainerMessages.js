export default function ContainerMessages({ messages }) {
  console.log(messages);
  return (
    <div className="h-5/6 w-full p-6 overflow-y-auto">
      <ul className="space-y-2">
        {messages.map((m, i) => {
          return (
            <li className="flex justify-end" key={i}>
              <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                <span className="block">{m}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
