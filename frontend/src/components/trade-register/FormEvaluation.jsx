export default function FormEvaluation({ data, onChange }) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {/* ¿Seguiste tu plan? */}
        <div>
          <label className="text-sm text-gray-300">¿Seguiste tu plan?</label>
          <select
            value={data.planFollowed}
            onChange={(e) => onChange("planFollowed", e.target.value)}
            className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
          >
            <option value="">Seleccionar</option>
            <option>Sí, completamente</option>
            <option>Parcialmente</option>
            <option>No, improvisé</option>
          </select>
        </div>
  
        {/* Clasificación de la operación */}
        <div>
          <label className="text-sm text-gray-300">Clasificación de la operación</label>
          <select
            value={data.classification}
            onChange={(e) => onChange("classification", e.target.value)}
            className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
          >
            <option value="">Seleccionar</option>
            <option>A (ejecución impecable)</option>
            <option>B (pequeños detalles por mejorar)</option>
            <option>C (fuera del plan, emotional)</option>
          </select>
        </div>
  
        {/* Reflexión o comentario */}
        <div>
          <label className="text-sm text-gray-300">Reflexión / Aprendizaje</label>
          <textarea
            rows={4}
            value={data.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1 resize-none"
            placeholder="¿Qué aprendiste de esta operación? ¿Qué repetirías o evitarías?"
          />
        </div>
      </div>
    );
  }
  