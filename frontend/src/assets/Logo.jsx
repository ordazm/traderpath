import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 400 400" className={`w-12 h-12 ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradiente cálido para la vela */}
        <linearGradient id="candleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCC80" />
          <stop offset="100%" stopColor="#FF9800" />
        </linearGradient>

        {/* Línea de tendencia sutil */}
        <linearGradient id="trendLine" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>

        {/* Fondo general suave */}
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>

        {/* Sombra sutil */}
        <filter id="softShadow" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Círculo de fondo con gradiente visible */}
      <circle cx="200" cy="200" r="190" fill="url(#grad1)" opacity="0.15" />

      {/* Línea de tendencia detrás */}
      <polyline
        points="50,300 110,250 170,270 230,220 290,200 350,160"
        stroke="url(#trendLine)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.25"
      />

      {/* Cuerpo de la vela japonesa */}
      <g filter="url(#softShadow)">
        {/* Mecha superior */}
        <rect x="195" y="70" width="10" height="40" rx="3" fill="#fff" />
        {/* Cuerpo */}
        <rect x="175" y="110" width="50" height="180" rx="10" fill="url(#candleGradient)" />
        {/* Mecha inferior */}
        <rect x="195" y="290" width="10" height="40" rx="3" fill="#fff" />
      </g>
    </svg>
  );
};

export default Logo;
