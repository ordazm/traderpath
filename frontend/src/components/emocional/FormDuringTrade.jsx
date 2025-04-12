import React from 'react';

export default function FormDuringTrade({ evaluation, handleChange }) {
  return (
    <section className="space-y-4 max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-orange-400">Durante el Trade</h2>
      <div className="flex items-center space-x-3">
        <input
          id="impulseBefore"
          type="checkbox"
          checked={evaluation.impulseDuring}
          onChange={(e) => handleChange("impulseDuring", e.target.checked)}
          className="w-5 h-5 border-2 border-gray-600 rounded-lg text-orange-500 focus:ring-2 focus:ring-orange-400 cursor-pointer"
        />
        <label htmlFor="impulseBefore" className="text-sm text-gray-300">
          ¿Sentí impulso de cerrar antes de tiempo?
        </label>
      </div>

      <div className="flex items-center space-x-3">
        <input
          id="followPlan"
          type="checkbox"
          checked={evaluation.impulseDuring}
          onChange={(e) => handleChange("impulseDuring", e.target.checked)}
          className="w-5 h-5 border-2 border-gray-600 rounded-lg text-orange-500 focus:ring-2 focus:ring-orange-400 cursor-pointer"
        />
        <label htmlFor="followPlan" className="text-sm text-gray-300">
          ¿Seguí el plan a pesar de lo que sentía?
        </label>
      </div>
    </section>
  );
}
