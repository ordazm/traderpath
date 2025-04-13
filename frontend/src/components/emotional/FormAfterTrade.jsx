import React from 'react';

export default function FormAfterTrade({ evaluation, handleChange }) {
  return (
    <section className="space-y-4 max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-orange-400">Después del Trade</h2>
      <div>
        <label className="text-sm">Emoción final</label>
        <select
          value={evaluation.emotionAfter}
          onChange={(e) => handleChange("emotionAfter", e.target.value)}
          className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
        >
          <option value="">Seleccionar</option>
          <option value="satisfecho">Satisfecho</option>
          <option value="neutral">Neutral</option>
          <option value="frustrado">Frustrado</option>
        </select>
      </div>
      <div>
        <label className="text-sm">Reflexión</label>
        <textarea
          value={evaluation.reflection}
          onChange={(e) => handleChange("reflection", e.target.value)}
          className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
          placeholder="¿Qué aprendiste de esta operación?"
        />
      </div>

      {/* El botón ahora se encuentra debajo de la reflexión */}
      <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg mt-6 hover:bg-orange-600 transition-all">
        Guardar Evaluación
      </button>
    </section>
  );
}
