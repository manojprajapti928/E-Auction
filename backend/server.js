import express from 'express';
import sequelize from './config/db.js';
import cors from 'cors';



const app = express();
// app.use(bodyParser.json());
app.use(cors());




sequelize.sync().then(() => {
    console.log('Database connected!');
    app.listen(3002, () => {
      console.log('Server running on http://localhost:3001');
    });
  });