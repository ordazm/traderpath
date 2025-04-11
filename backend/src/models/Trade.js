const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Trade = sequelize.define("Trade", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pair: DataTypes.STRING,
  direction: DataTypes.STRING,
  timeframe: DataTypes.STRING,
  entryType: DataTypes.STRING,
  setup: DataTypes.STRING,
  result: DataTypes.FLOAT,
  entryTime: DataTypes.STRING,
  exitTime: DataTypes.STRING,
  emotion: DataTypes.STRING,
  clarity: DataTypes.INTEGER,
  confidence: DataTypes.INTEGER,
  impulsive: DataTypes.STRING,
  planFollowed: DataTypes.STRING,
  classification: DataTypes.STRING,
  notes: DataTypes.TEXT,
});

module.exports = Trade;
