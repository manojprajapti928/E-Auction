import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Auction = sequelize.define("Auction", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  startingBid: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Auction;
