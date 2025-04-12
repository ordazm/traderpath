import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Sidebar from "../components/sidebar/Sidebar";
import KpiStats from "../components/home/KpiStats";

export default function Home() {
  const [username, setUsername] = useState("");

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
    <div className="flex min-h-screen">
      {/* Sidebar envuelto en sticky */}
      <div className="sticky top-0 z-10">
        <Sidebar />  {/* Sidebar a la izquierda */}
      </div>

      <main className="flex-1 bg-gray-950 text-white p-8 overflow-y-auto"> {/* Eliminamos el ml-64 */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Panel de bienvenida */}
          <section className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h1 className="text-3xl font-bold text-orange-400 mb-2">¡Hola {username} 👋!</h1>
            <p className="text-gray-400 text-sm">
              Bienvenido a tu centro de comando. Este es tu espacio para mejorar, organizarte y alcanzar tu máximo potencial como trader.
            </p>
          </section>

          {/* KPI Cards */}
          <KpiStats />

          {/* Cards de resumen */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-orange-300 mb-2">📘 Resumen Técnico</h3>
              <p className="text-gray-400">Condiciones de tus setups más usados.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold text-orange-300 mb-2">🧠 Estado Emocional</h3>
              <p className="text-gray-400">Promedios de claridad, impulsividad y confianza.</p>
            </div>
          </section>

          {/* Frase motivacional */}
          <section className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <p className="italic text-center text-orange-400 text-md font-medium">
              “No operás por ganar, operás por operar bien.” – TraderPath
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
