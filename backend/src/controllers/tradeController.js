const Trade = require("../models/Trade");

exports.createTrade = async (req, res) => {
  try {
    const trade = await Trade.create(req.body);
    res.status(201).json(trade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error al guardar trade", error: err.message });
  }
};

// (Opcional para debug)
exports.getAllTrades = async (req, res) => {
  try {
    const trades = await Trade.findAll();
    res.json(trades);
  } catch (err) {
    res.status(500).json({ msg: "Error al obtener trades", error: err.message });
  }
};

exports.getTradesByUser = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const trades = await Trade.findAll({
        where: { userId },
        order: [["createdAt", "DESC"]],
      });
  
      res.json(trades);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Error al obtener trades del usuario", error: err.message });
    }
  };
  
