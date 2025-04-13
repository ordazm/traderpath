import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Sidebar from "../components/sidebar/Sidebar";
import { Menu } from "lucide-react";

export default function Technical() {
  const [username, setUsername] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // Sidebar colapsado

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const decoded = jwtDecode(token);
    const userId = decoded.id;

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/auth/user/${userId}`);
        setUsername(res.data.username);
      } catch (err) {
        console.error("Error al obtener usuario:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-950 text-white relative">
      {/* Sidebar escritorio */}
      <aside className={`hidden xl:flex fixed top-0 left-0 h-screen ${collapsed ? "w-20" : "w-64"} z-40`}>
        <Sidebar collapsed={collapsed} toggleCollapse={() => setCollapsed(!collapsed)} />
      </aside>

      {/* Sidebar móvil (overlay corregido) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-black bg-opacity-60 flex">
          <div className="w-64 max-h-screen overflow-y-auto bg-gradient-to-b from-black to-orange-300 shadow-lg flex flex-col">
            <Sidebar />
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {/* Contenido principal */}
      <div className={`flex flex-col w-full transition-all duration-300 ${collapsed ? "xl:pl-20" : "xl:pl-64"}`}>
        {/* Botón hamburguesa */}
        <div className="xl:hidden fixed top-4 left-4 z-50">
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="p-2 rounded-md bg-gray-800 hover:bg-orange-400 transition"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Contenido + derecha */}
        <div className="flex flex-col xl:flex-row w-full flex-1">
          <main className="flex-1 w-full px-4 sm:px-6 md:px-8 xl:px-12 py-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Bienvenida */}
              <section className="bg-gray-900 rounded-xl p-6 shadow-lg">
                <h1 className="text-3xl font-bold text-orange-400 mb-2">
                  ¡Hello, {username} 👋!
                </h1>
                <p className="text-gray-400 text-sm">
                  Bienvenido a tu centro de comando. Este es tu espacio para mejorar, organizarte y alcanzar tu máximo potencial como trader.
                </p>
              </section>

              {/* Cards KPI */}
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">📘 Resumen Técnico</h3>
                  <p className="text-gray-400">Condiciones de tus setups más usados.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">🧠 Estado Emocional</h3>
                  <p className="text-gray-400">Promedios de claridad, impulsividad y confianza.</p>
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">📘 Resumen Técnico</h3>
                  <p className="text-gray-400">Condiciones de tus setups más usados.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">🧠 Estado Emocional</h3>
                  <p className="text-gray-400">Promedios de claridad, impulsividad y confianza.</p>
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">📘 Resumen Técnico</h3>
                  <p className="text-gray-400">Condiciones de tus setups más usados.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">🧠 Estado Emocional</h3>
                  <p className="text-gray-400">Promedios de claridad, impulsividad y confianza.</p>
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">📘 Resumen Técnico</h3>
                  <p className="text-gray-400">Condiciones de tus setups más usados.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">🧠 Estado Emocional</h3>
                  <p className="text-gray-400">Promedios de claridad, impulsividad y confianza.</p>
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">📘 Resumen Técnico</h3>
                  <p className="text-gray-400">Condiciones de tus setups más usados.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">🧠 Estado Emocional</h3>
                  <p className="text-gray-400">Promedios de claridad, impulsividad y confianza.</p>
                </div>
              </section>
            </div>
          </main>

          {/* Sección derecha (solo escritorio) */}
          <aside className="hidden xl:block w-64 bg-gray-800 text-white py-8 px-4 shadow-xl">
            <h2 className="text-lg font-semibold text-orange-300 mb-4">Sección adicional</h2>
            <p className="text-gray-400">Aquí puedes poner widgets o información adicional.</p>
          </aside>
        </div>
      </div>
    </div>
  );
}




