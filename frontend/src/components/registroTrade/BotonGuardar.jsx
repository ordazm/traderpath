export default function BotonGuardar({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
    >
      Guardar operación
    </button>
  );
}
