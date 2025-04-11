import { useNavigate, useLocation } from "react-router-dom";
import { LogOut, LayoutDashboard, ClipboardList, Brain, FlaskConical, BarChart2, BookOpen, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/home", icon: <LayoutDashboard size={20} /> },
  { label: "Registro de Trade", path: "/registro", icon: <ClipboardList size={20} /> },
  { label: "Evaluación Emocional", path: "/emocional", icon: <Brain size={20} /> },
  { label: "Laboratorio", path: "/tecnica", icon: <FlaskConical size={20} /> },
  { label: "Desempeño", path: "/desempeno", icon: <BarChart2 size={20} /> },
  { label: "Journal", path: "/journal", icon: <BookOpen size={20} /> },
  { label: "Configuración", path: "/config", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen w-64 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-between py-8 px-4 shadow-xl border-r border-gray-700">
      <div>
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-10 tracking-wide">TraderPath</h1>

        <nav className="space-y-3">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all 
                  ${isActive
                    ? "bg-orange-500 text-white shadow-md"
                    : "hover:bg-gray-800 hover:text-orange-400 text-gray-300"
                  }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="mt-10 px-4">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-2 rounded-lg"
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
