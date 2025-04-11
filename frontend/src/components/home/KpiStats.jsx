import KpiCard from "./KpiCard";

const kpis = [
  { title: "Trades", value: 12, icon: "📈", color: "blue" },
  { title: "Win Rate", value: 66.7, unit: "%", icon: "🏆", color: "green" },
  { title: "Prom. R:R", value: 2.1, unit: "R", icon: "⚖️", color: "orange" },
  { title: "Balance", value: "+3.5", unit: "R", icon: "💰", color: "green" },
];

export default function KpiStats() {
  return (
    <section className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-white mb-4">Estadísticas Semanales</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <KpiCard key={index} {...kpi} />
        ))}
      </div>
    </section>
  );
}
