export default function FormTechnical({ data, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Par operado */}
      <div>
        <label className="text-sm text-gray-300">Par operado</label>
        <select
          value={data.pair}
          onChange={(e) => onChange("pair", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        >
          <option value="">Seleccionar</option>
          <option>EURUSD</option>
          <option>BTCUSD</option>
          <option>GBPJPY</option>
          <option>SPX500</option>
          <option>Oro</option>
        </select>
      </div>

      {/* Dirección */}
      <div>
        <label className="text-sm text-gray-300">Dirección</label>
        <select
          value={data.direction}
          onChange={(e) => onChange("direction", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        >
          <option value="">Seleccionar</option>
          <option>Long</option>
          <option>Short</option>
        </select>
      </div>

      {/* Timeframe */}
      <div>
        <label className="text-sm text-gray-300">Timeframe</label>
        <select
          value={data.timeframe}
          onChange={(e) => onChange("timeframe", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        >
          <option value="">Seleccionar</option>
          <option>15m</option>
          <option>1h</option>
          <option>4h</option>
          <option>1D</option>
        </select>
      </div>

      {/* Tipo de entrada */}
      <div>
        <label className="text-sm text-gray-300">Tipo de entrada</label>
        <select
          value={data.entryType}
          onChange={(e) => onChange("entryType", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        >
          <option value="">Seleccionar</option>
          <option>Breakout</option>
          <option>Pullback</option>
          <option>Reversión</option>
          <option>Continuación</option>
        </select>
      </div>

      {/* Setup */}
      <div>
        <label className="text-sm text-gray-300">Setup utilizado</label>
        <input
          type="text"
          value={data.setup}
          onChange={(e) => onChange("setup", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
          placeholder="Ej: Liquidez + OB + BOS"
        />
      </div>

      {/* Resultado */}
      <div>
        <label className="text-sm text-gray-300">Resultado (R)</label>
        <input
          type="number"
          step="0.1"
          value={data.result}
          onChange={(e) => onChange("result", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
          placeholder="+2.0 / -1.0"
        />
      </div>

      {/* Hora de entrada */}
      <div>
        <label className="text-sm text-gray-300">Hora de entrada</label>
        <input
          type="time"
          value={data.entryTime}
          onChange={(e) => onChange("entryTime", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        />
      </div>

      {/* Hora de salida */}
      <div>
        <label className="text-sm text-gray-300">Hora de salida</label>
        <input
          type="time"
          value={data.exitTime}
          onChange={(e) => onChange("exitTime", e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 mt-1"
        />
      </div>
    </div>
  );
}
