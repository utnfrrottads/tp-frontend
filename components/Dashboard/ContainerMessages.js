const idUserLogged = "62eaa14c3901f21e944abfcd";
// Usuario logeado y tendriamos que obtenerlo por global context

export default function ContainerMessages({ messages }) {
  return (
    <div className="h-5/6 w-full p-6 overflow-y-auto">
      <ul className="space-y-6">
        {messages.map((m, i) => {
          if (m !== undefined) {
            return (
              <li className="flex justify-end" key={i}>
                <div
                  className={`relative max-w-xl px-4 py-2 text-gray-700 ${
                    m.sender === idUserLogged ? "bg-gray-300" : null
                  } rounded shadow`}
                >
                  <span className="block">{m.description}</span>
                  <span>{m.date}</span>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
