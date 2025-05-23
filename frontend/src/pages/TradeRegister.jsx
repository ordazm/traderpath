import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar"; // Importamos Sidebar
import FormTechnical from "../components/trade-register/FormTechnical";
import FormEmotional from "../components/trade-register/FormEmotional";
import FormEvaluation from "../components/trade-register/FormEvaluation";
import SaveButton from "../components/trade-register/SaveButton";
import TradeList from "../components/trade-register/TradeList";
import axios from "axios";

export default function TradeRegister() {
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
      {/* Sidebar envuelto en sticky */}
      <div className="sticky top-0 z-10">
        <Sidebar /> {/* Sidebar a la izquierda */}
      </div>

      <main className="flex-1 bg-gray-950 text-white p-8 overflow-y-auto"> 
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-md p-6 space-y-6">
          <h1 className="text-2xl font-bold text-orange-400 mb-4">Registrar Operación</h1>

          <section className="space-y-4">
            <h2 className="text-lg text-white font-semibold">Datos Técnicos</h2>
            <FormTechnical data={formData} onChange={handleChange} />
          </section>

          <section className="space-y-4">
            <h2 className="text-lg text-white font-semibold">Estado Emotional</h2>
            <FormEmotional data={formData} onChange={handleChange} />
          </section>

          <section className="space-y-4">
            <h2 className="text-lg text-white font-semibold">Reflexión y Resultado</h2>
            <FormEvaluation data={formData} onChange={handleChange} />
          </section>

          <div className="text-right mt-6">
            <SaveButton onClick={handleSubmit} />
          </div>
        </div>

        {/* Bloque de historial */}
        <section className="max-w-4xl mx-auto mt-10 space-y-4">
          <h2 className="text-lg font-semibold text-white">Tus operaciones registradas</h2>
          <TradeList trades={userTrades} />
        </section>
      </main>
    </div>
  );
}
