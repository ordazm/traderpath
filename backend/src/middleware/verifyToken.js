const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ msg: "Acceso denegado. Token no proporcionado." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Ahora podés usar req.user.id
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido o expirado." });
  }
};
