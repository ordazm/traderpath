export default function KpiCard({ title, value, unit = "", icon = "📊", color = "orange" }) {
    const textColor = {
      orange: "text-orange-400",
      green: "text-green-400",
      red: "text-red-400",
      blue: "text-blue-400",
      gray: "text-gray-300",
    }[color];
  
    return (
      <div className="bg-gray-850 border border-gray-800 rounded-lg px-4 py-3 flex flex-col justify-center items-start text-left space-y-2 hover:bg-gray-800 hover:border-gray-700 transition-all duration-200 cursor-pointer">
        <div className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-orange-400 transition">
          <span>{icon}</span>
          <span>{title}</span>
        </div>
  
        <div className={`text-xl font-bold ${textColor}`}>
          {value}
          {unit && <span className="ml-1 text-sm text-gray-400">{unit}</span>}
        </div>
      </div>
    );
  }
  