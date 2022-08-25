// parte de arriba del chat cambiar nombre si hay algo mejor
// Importar en el dashboard para que no quede todo el componente muy nazi
export default function HeaderProfile({ friend }) {
  return (
    <div className="h-auto w-full bg-red-500 text-white">
      <h1>Friend:{friend.name}</h1>
    </div>
  );
}
