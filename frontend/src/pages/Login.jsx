import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.msg || "Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">TraderPath</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Tu nombre de usuario"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="••••••••"
              required
            />
          </div>

          <p className="text-sm text-center text-gray-400 mt-4">
            ¿No tenés cuenta?{" "}
            <span
              className="text-orange-400 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Registrate
            </span>
          </p>


          <button
            type="submit"
            className="w-full py-2 rounded bg-orange-500 hover:bg-orange-600 transition font-semibold text-white"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
