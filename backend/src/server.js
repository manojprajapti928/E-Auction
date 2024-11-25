import express from "express";
import dotenv from "dotenv";
import sequelize from "../config/database.js";
import userRoutes from "../routes/userRoutes.js";
import cors from "cors"

dotenv.config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Test database connection and sync models
(async () => {
  try {
    await sequelize.sync({ force: false }); // Remove "force: true" in production
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error.message);
  }
})();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
