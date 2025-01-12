import express from "express";
import cors from "cors";
import env from "dotenv";
import mongoose from "mongoose";
import swaggerUI from "swagger-ui-express";
import routerUsuario from "./router/routerUsuario.js";
import { logger } from "./config/Winston.js";
import routerAuto from "./router/routerAuto.js"

env.config();

const PORT = process.env.PORT || 3000; 
const app = express();

// Middleware de json
app.use(express.json());

// Middleware de cors
app.use(cors({
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization", "x-refresh-token"],
}));

// Middleware de log
app.use((req, res, next) => {
  logger.error(`${req.method} ${req.url}`);
  next();
});

// Rutas

app.use("/blogs", routerAuto);
app.use("/auth", routerUsuario);



// Middleware de error 404
app.use((req, res) => {
  res.status(404).send("<h1>404<h1>");
});

// Conexión a la base de datos
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
