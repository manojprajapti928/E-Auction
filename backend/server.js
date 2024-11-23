const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');



const app = express();
// app.use(bodyParser.json());
app.use(cors());




sequelize.sync().then(() => {
    console.log('Database connected!');
    app.listen(3002, () => {
      console.log('Server running on http://localhost:3001');
    });
  });