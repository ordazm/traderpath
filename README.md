# 📈 TraderPath

Plataforma interactiva para el crecimiento profesional de traders.

---

## 🚀 Descripción

**TraderPath** es una aplicación diseñada para acompañar a traders en su camino hacia la rentabilidad, integrando herramientas técnicas, estadísticas y emocionales dentro de un único ecosistema.

Este proyecto busca convertirse en un **centro de comando completo para traders**, donde puedan registrar, evaluar y mejorar sus operaciones desde todos los ángulos posibles.

---

## 📦 Estado actual: Versión Semana 3 ✅

✔️ Autenticación real, registro de operaciones, seguridad con token y tabla de historial personal.

### ✅ Funcionalidades implementadas:

- **Inicio de sesión y registro de usuarios**
  - Autenticación JWT
  - Rutas protegidas con token

- **Dashboard visual (`/home`)**
  - Bienvenida con nombre del usuario
  - KPI cards (trades, winrate, R:R, balance)
  - Resumen técnico y emocional

- **Registro de operaciones (`/registro`)**
  - Formulario dividido por secciones:
    - Datos técnicos
    - Estado emocional
    - Evaluación y reflexión
  - Guardado real en base de datos con `userId`
  - Seguridad con middleware `verifyToken`
  - Tabla visual del historial del usuario (`TradeTable`)

---

## 🧱 Tecnologías utilizadas

### 🔹 Frontend
- React + Vite
- Tailwind CSS
- React Router DOM
- Axios

### 🔹 Backend
- Node.js + Express
- Sequelize ORM
- SQLite (temporal, adaptable a PostgreSQL)
- JWT para autenticación
- Middleware personalizado

---

## 📁 Estructura del proyecto

```
traderpath/
├── frontend/
│   └── src/
│       ├── pages/
│       ├── components/home/
│       ├── components/registroTrade/
│       └── ...
├── backend/
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middleware/
│       └── config/db.js
```

---

## 🛣️ Próximos pasos (Semana 4)

- Estadísticas dinámicas (total trades, winrate, R promedio)
- Gráficos ilustrativos por clasificación y emociones
- Componente visual `Historial` independiente
- Panel semanal de desempeño y evolución
- Mejora UX en feedback visual al guardar

---

## 🙌 Contribuciones

Este es un proyecto personal de desarrollo profesional de **@ordazm**, enfocado en combinar tecnología + psicología + rendimiento en el trading.  
Toda sugerencia, mejora o colaboración es bienvenida.

---

## 🧠 Filosofía

*"No operás por ganar, operás por operar bien." – TraderPath*
