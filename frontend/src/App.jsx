
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tecnica from "./pages/Tecnica";
import RegistroTrade from "./pages/RegistroTrade";
import Emocional from "./pages/Emocional";
import Desempeno from "./pages/Desempeno";
import Journal from "./pages/Journal";
import Config from "./pages/Config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tecnica" element={<Tecnica />} />
        <Route path="/registro" element={<RegistroTrade />} />
        <Route path="/emocional" element={<Emocional />} />
        <Route path="/desempeno" element={<Desempeno />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
