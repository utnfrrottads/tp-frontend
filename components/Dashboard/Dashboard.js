export default function Dashboard({ messages, exitChat }) {
  // Falta filtarlos por fecha, diferenciarlos por color y contruirle un component
  // Y construir todo el dashboard
  const msgs = messages.map((msg) => {
    if (msg) {
      return msg.description;
    }
  });
  console.log(msgs);
  return (
    <div clasname="w-3/4 h-screen bg-gray-600">
      <button onClick={exitChat}>Exit Chat</button>
      {msgs.map((desc, index) => {
        return <p key={index}>{desc}</p>;
      })}
    </div>
  );
}
