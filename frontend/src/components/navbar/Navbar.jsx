import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";  // Importamos los íconos de sol y luna

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState("");

  // Actualiza la hora local cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cambiar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", darkMode ? "false" : "true");
  };

  return (
    <nav className=" z-10 bg-black bg-opacity-50 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        <h1 className="text-xl">Welcome, User</h1> {/* Aquí puedes poner el nombre del usuario dinámicamente */}
        <span>{time}</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300">
          Language {/* Aquí podemos agregar funcionalidad para cambiar el idioma */}
        </button>
      </div>
    </nav>
  );
}
