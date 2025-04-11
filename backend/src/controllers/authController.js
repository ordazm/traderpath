const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ where: { username } });
    if (userExists) {
      return res.status(400).json({ msg: "El usuario ya existe." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ msg: "Usuario registrado con éxito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error en el servidor." });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ msg: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" });

    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

    res.json({ username: user.username });
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener usuario." });
  }
};
