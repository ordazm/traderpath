// backend/src/createUser.js
const bcrypt = require("bcryptjs");
const sequelize = require("./config/db");
const User = require("./models/User");

(async () => {
  await sequelize.sync();
  const hashed = await bcrypt.hash("123456", 10);
  const user = await User.create({ username: "mich", password: hashed });
  console.log("✅ Usuario creado:", user.username);
})();
