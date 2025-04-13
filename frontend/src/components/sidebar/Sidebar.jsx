import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LogOut, LayoutDashboard, ClipboardList, Brain, FlaskConical,
  BarChart2, BookOpen, Settings, Sun, Moon, Globe, ChevronLeft
} from "lucide-react";
import Logo from "../../assets/Logo.jsx";

const navItems = [
  { label: "Dashboard", path: "/home", icon: <LayoutDashboard size={20} /> },
  { label: "Trade Register", path: "/trade-register", icon: <ClipboardList size={20} /> },
  { label: "Emotional", path: "/emotional", icon: <Brain size={20} /> },
  { label: "Lab", path: "/technical", icon: <FlaskConical size={20} /> },
  { label: "Performance", path: "/performance", icon: <BarChart2 size={20} /> },
  { label: "Journal", path: "/journal", icon: <BookOpen size={20} /> },
  { label: "Configuration", path: "/config", icon: <Settings size={20} /> },
];

export default function Sidebar({ collapsed = false, toggleCollapse = () => {} }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={`h-screen w-full ${collapsed ? "w-20" : "w-64"} 
      transition-all duration-300 bg-gradient-to-b from-black to-orange-300 
      text-white px-4 shadow-xl border-r border-gray-700 flex flex-col relative`}>

      {/* Botón colapsar */}
      <div
        className="hidden xl:flex items-center justify-center absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2
                   w-7 h-7 bg-gray-700 hover:bg-orange-400 text-white rounded-full shadow-lg 
                   transition-all duration-300 cursor-pointer z-50"
        onClick={toggleCollapse}
        title="Colapsar Sidebar"
      >
        <div className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}>
          <ChevronLeft size={16} />
        </div>
      </div>

      {/* Logo y nombre de la app */}
      <div className={`flex flex-col items-center mt-6 transition-all duration-300 ${collapsed ? "mb-2" : "mb-6"}`}>
        <div className="bg-gray-900 text-white rounded-full p-2 hover:bg-orange-100 transition-all flex items-center justify-center w-[56px] h-[56px]">
          <Logo className="w-10 h-10" />
        </div>
        {!collapsed && (
          <span
            className="mt-2 text-xl tracking-widest text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Vela
          </span>
        )}
      </div>

      {/* Navegación */}
      <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden space-y-2">
        <nav>
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all
                  ${isActive ? "bg-orange-400 text-white shadow-md" : "hover:bg-gray-800 hover:text-orange-300 text-gray-300"}`}
              >
                {item.icon}
                {!collapsed && (
                  <span className="text-sm font-medium truncate whitespace-nowrap overflow-hidden">
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Controles inferiores */}
      <div className="space-y-3 py-4">
        {/* Modo claro/oscuro */}
        <div
          onClick={() => document.body.classList.toggle("dark")}
          className="flex items-center gap-3 px-4 py-2 bg-gray-800 hover:bg-orange-400 transition-all rounded-xl cursor-pointer text-sm font-medium text-white shadow-md"
        >
          {document.body.classList.contains("dark") ? <Sun size={18} /> : <Moon size={18} />}
          {!collapsed && <span className="whitespace-nowrap truncate">Modo {document.body.classList.contains("dark") ? "Claro" : "Oscuro"}</span>}
        </div>

        {/* Idioma */}
        <div
          onClick={() => alert("Funcionalidad de cambio de idioma aquí.")}
          className="flex items-center gap-3 px-4 py-2 bg-gray-800 hover:bg-orange-400 transition-all rounded-xl cursor-pointer text-sm font-medium text-white shadow-md"
        >
          <Globe size={18} />
          {!collapsed && <span className="whitespace-nowrap truncate">Idioma</span>}
        </div>

        {/* Logout */}
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 bg-orange-400 hover:bg-red-500 transition-all rounded-xl cursor-pointer text-sm font-medium text-white shadow-md"
        >
          <LogOut size={18} />
          {!collapsed && <span className="whitespace-nowrap truncate">Salir</span>}
        </div>
      </div>
    </div>
  );
}
