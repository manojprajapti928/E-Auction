import { Sequelize } from "sequelize";

const sequelize = new Sequelize('EAuction', 'root', 'Piyush@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});
export default sequelize
