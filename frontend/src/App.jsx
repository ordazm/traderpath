import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"; // 👈 IMPORTANTE
import Home from "./pages/Home";
import Tecnica from "./pages/Tecnica";
import RegistroTrade from "./pages/RegistroTrade";
import Emocional from "./pages/Emocional";
import Desempeno from "./pages/Desempeno";
import Journal from "./pages/Journal";
import Config from "./pages/Config";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* ✅ AÑADIDA */}

        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/tecnica" element={<ProtectedRoute><Tecnica /></ProtectedRoute>} />
        <Route path="/registro" element={<ProtectedRoute><RegistroTrade /></ProtectedRoute>} />
        <Route path="/emocional" element={<ProtectedRoute><Emocional /></ProtectedRoute>} />
        <Route path="/desempeno" element={<ProtectedRoute><Desempeno /></ProtectedRoute>} />
        <Route path="/journal" element={<ProtectedRoute><Journal /></ProtectedRoute>} />
        <Route path="/config" element={<ProtectedRoute><Config /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
