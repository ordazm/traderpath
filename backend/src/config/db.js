// backend/src/config/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "sqlite",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("📦 Base de datos conectada"))
  .catch((err) => console.error("❌ Error al conectar la base de datos:", err));

module.exports = sequelize;
