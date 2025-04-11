const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.use("/api/auth", authRoutes);
app.use("/api/trades", tradeRoutes);

// Ruta raíz (test)
app.get("/", (req, res) => res.send("🚀 Backend funcionando correctamente"));

// Sincronización con la base de datos y arranque del servidor
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }) // podés usar { force: false } en producción
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al sincronizar la base de datos:", err);
  });
