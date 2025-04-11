import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import FormTecnico from "../components/registroTrade/FormTecnico";
import FormEmocional from "../components/registroTrade/FormEmocional";
import FormEvaluacion from "../components/registroTrade/FormEvaluacion";
import BotonGuardar from "../components/registroTrade/BotonGuardar";
import TradeTable from "../components/registroTrade/TradeTable";
import axios from "axios";

export default function RegistroTrade() {
  const [formData, setFormData] = useState({
    pair: "",
    direction: "",
    timeframe: "",
    entryType: "",
    setup: "",
    result: "",
    entryTime: "",
    exitTime: "",
    emotion: "",
    clarity: 3,
    confidence: 3,
    impulsive: "",
    planFollowed: "",
    classification: "",
    notes: ""
  });

  const [userTrades, setUserTrades] = useState([]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = token ? JSON.parse(atob(token.split('.')[1])).id : null;

      const payload = { ...formData, userId };

      await axios.post("http://localhost:5000/api/trades", payload, {
        headers: {
          Authorization: token,
        },
      });

      alert("✅ Operación guardada con éxito");
      setFormData({ ...formData, result: "", notes: "" });
      fetchUserTrades(); // actualiza lista
    } catch (err) {
      console.error(err);
      alert("❌ Error al guardar operación");
    }
  };

  const fetchUserTrades = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/trades/mis-trades", {
        headers: {
          Authorization: token,
        },
      });

      setUserTrades(res.data);
    } catch (err) {
      console.error("Error al obtener trades:", err);
    }
  };

  useEffect(() => {
    fetchUserTrades();
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-950 text-white p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-md p-6 space-y-6">
          <h1 className="text-2xl font-bold text-orange-400 mb-4">Registrar Operación</h1>

          <section className="space-y-4">
            <h2 className="text-lg text-white font-semibold">Datos Técnicos</h2>
            <FormTecnico data={formData} onChange={handleChange} />
          </section>

          <section className="space-y-4">
            <h2 className="text-lg text-white font-semibold">Estado Emocional</h2>
            <FormEmocional data={formData} onChange={handleChange} />
          </section>

          <section className="space-y-4">
            <h2 className="text-lg text-white font-semibold">Reflexión y Resultado</h2>
            <FormEvaluacion data={formData} onChange={handleChange} />
          </section>

          <div className="text-right mt-6">
            <BotonGuardar onClick={handleSubmit} />
          </div>
        </div>

        {/* Bloque de historial */}
        <section className="max-w-4xl mx-auto mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">Tus operaciones registradas</h2>
          <TradeTable trades={userTrades} />
        </section>
      </main>
    </div>
  );
}
