export default function TradeTable({ trades = [] }) {
    if (!trades.length) {
      return (
        <p className="text-sm text-gray-400">
          Aún no registraste operaciones.
        </p>
      );
    }
  
    return (
      <div className="overflow-x-auto rounded-lg border border-gray-800 mt-6">
        <table className="min-w-full text-sm text-left text-gray-300">
          <thead className="bg-gray-800 text-gray-400 text-xs uppercase tracking-wide">
            <tr>
              <th className="px-4 py-3">Par</th>
              <th className="px-4 py-3">Dirección</th>
              <th className="px-4 py-3">Resultado (R)</th>
              <th className="px-4 py-3">Setup</th>
              <th className="px-4 py-3">Reflexión</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {trades.map((trade, index) => (
              <tr key={index} className="border-t border-gray-800 hover:bg-gray-800 transition">
                <td className="px-4 py-2">{trade.pair}</td>
                <td className="px-4 py-2">{trade.direction}</td>
                <td className="px-4 py-2">{trade.result}</td>
                <td className="px-4 py-2">{trade.setup}</td>
                <td className="px-4 py-2">{trade.notes?.slice(0, 40)}...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  