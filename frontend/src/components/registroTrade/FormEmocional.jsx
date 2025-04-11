export default function FormEmocional({ data, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Emoción dominante */}
      <div>
        <label className="text-sm text-gray-300">Emoción dominante</label>
        <select
          value={data.emotion}
          onChange={(e) => onChange("emotion", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        >
          <option value="">Seleccionar</option>
          <option>Calma</option>
          <option>Ansiedad</option>
          <option>Impulsividad</option>
          <option>Euforia</option>
          <option>Miedo</option>
          <option>Confianza</option>
        </select>
      </div>

      {/* Claridad mental */}
      <div>
        <label className="text-sm text-gray-300">Claridad mental (1-5)</label>
        <input
          type="range"
          min="1"
          max="5"
          value={data.clarity}
          onChange={(e) => onChange("clarity", parseInt(e.target.value))}
          className="w-full mt-2"
        />
        <p className="text-xs text-gray-400 mt-1">Valor: {data.clarity}</p>
      </div>

      {/* Nivel de confianza */}
      <div>
        <label className="text-sm text-gray-300">Nivel de confianza (1-5)</label>
        <input
          type="range"
          min="1"
          max="5"
          value={data.confidence}
          onChange={(e) => onChange("confidence", parseInt(e.target.value))}
          className="w-full mt-2"
        />
        <p className="text-xs text-gray-400 mt-1">Valor: {data.confidence}</p>
      </div>

      {/* Impulsividad */}
      <div>
        <label className="text-sm text-gray-300">¿Hubo impulso en la entrada?</label>
        <select
          value={data.impulsive}
          onChange={(e) => onChange("impulsive", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        >
          <option value="">Seleccionar</option>
          <option>No</option>
          <option>Sí, me apuré</option>
          <option>Dudé pero seguí el plan</option>
        </select>
      </div>
    </div>
  );
}
