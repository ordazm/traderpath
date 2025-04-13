import React from 'react';

export default function FormBeforeTrade({ evaluation, handleChange }) {
  return (
    <section className="space-y-4 max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-orange-400">Antes del Trade</h2>
      <div>
        <label className="text-sm">Nivel de confianza (1-5)</label>
        <input
          type="range"
          min="1"
          max="5"
          value={evaluation.clarityBefore}
          onChange={(e) => handleChange("clarityBefore", e.target.value)}
          className="w-full px-2 py-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
        />
      </div>

      <div>
        <label className="text-sm">Emoción dominante</label>
        <select
          value={evaluation.emotionBefore}
          onChange={(e) => handleChange("emotionBefore", e.target.value)}
          className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
        >
          <option value="">Seleccionar</option>
          <option value="ansiedad">Ansiedad</option>
          <option value="calma">Calma</option>
          <option value="miedo">Miedo</option>
          <option value="euforia">Euforia</option>
        </select>
      </div>

      <div>
        <label className="text-sm">Claridad mental (1-5)</label>
        <input
          type="range"
          min="1"
          max="5"
          value={evaluation.clarityBefore}
          onChange={(e) => handleChange("clarityBefore", e.target.value)}
          className="w-full px-2 py-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
        />
      </div>
    </section>
  );
}
