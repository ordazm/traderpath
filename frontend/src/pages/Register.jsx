import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });

      setSuccess("¡Usuario registrado con éxito!");
      setTimeout(() => navigate("/"), 1500); // Redirigir al login
    } catch (err) {
      setError(err.response?.data?.msg || "Error al registrar.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">Crear cuenta</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-400 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-orange-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-orange-500 hover:bg-orange-600 transition font-semibold text-white"
          >
            Registrarme
          </button>
        </form>

        <p className="text-sm text-center text-gray-400 mt-4">
          ¿Ya tenés cuenta?{" "}
          <span
            className="text-orange-400 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Iniciar sesión
          </span>
        </p>
      </div>
    </div>
  );
}
