import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Bid = sequelize.define("Bid", {
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Bid;
