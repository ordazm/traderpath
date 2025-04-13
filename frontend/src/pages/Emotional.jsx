import React, { useState } from 'react';
import Sidebar from "../components/sidebar/Sidebar"; // Importamos Sidebar
import FormBeforeTrade from "../components/emotional/FormBeforeTrade";
import FormDuringTrade from "../components/emotional/FormDuringTrade";
import FormAfterTrade from "../components/emotional/FormAfterTrade";

export default function Emotional() {
  const [evaluation, setEvaluation] = useState({
    clarityBefore: 3,
    emotionBefore: "",
    clarityDuring: 3,
    impulseDuring: false,
    emotionAfter: "",
    reflection: ""
  });

  const handleChange = (field, value) => {
    setEvaluation(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Evaluación enviada:", evaluation);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar envuelto en un contenedor con sticky */}
      <div className="sticky top-0 z-10">
        <Sidebar />  {/* Sidebar a la izquierda */}
      </div>

      <main className="flex-1 bg-gray-950 text-white p-8 overflow-y-auto "> 
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">Evaluación Emotional</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Formulario para antes del trade */}
            <FormBeforeTrade evaluation={evaluation} handleChange={handleChange} />

            {/* Formulario para durante el trade */}
            <FormDuringTrade evaluation={evaluation} handleChange={handleChange} />

            {/* Formulario para después del trade */}
            <FormAfterTrade evaluation={evaluation} handleChange={handleChange} />           
            
          </form>
        </div>
      </main>
    </div>
  );
}
