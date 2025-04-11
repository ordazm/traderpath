const express = require("express");
const router = express.Router();

const {
  createTrade,
  getAllTrades,
  getTradesByUser,
} = require("../controllers/tradeController");

const verifyToken = require("../middleware/verifyToken");

// Rutas protegidas
router.post("/", verifyToken, createTrade);              // Guardar operación
router.get("/", verifyToken, getAllTrades);              // (Opcional) Ver todas las operaciones
router.get("/mis-trades", verifyToken, getTradesByUser); // ✅ Ver solo las del usuario autenticado

module.exports = router;
