import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from './Route.js'

const PORT=3333
dotenv.config(); // Corrected the typo

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api", route); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
