import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"; // 👈 IMPORTANTE
import Home from "./pages/Home";
import Technical from "./pages/Technical";
import TradeRegister from "./pages/TradeRegister";  {/* Cambiado */}
import Emotional from "./pages/Emotional";
import Performance from "./pages/Performance";
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
        <Route path="/technical" element={<ProtectedRoute><Technical /></ProtectedRoute>} />
        <Route path="/trade-register" element={<ProtectedRoute><TradeRegister /></ProtectedRoute>} /> {/* Cambiado */}
        <Route path="/emotional" element={<ProtectedRoute><Emotional /></ProtectedRoute>} />
        <Route path="/performance" element={<ProtectedRoute><Performance /></ProtectedRoute>} />
        <Route path="/journal" element={<ProtectedRoute><Journal /></ProtectedRoute>} />
        <Route path="/config" element={<ProtectedRoute><Config /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
