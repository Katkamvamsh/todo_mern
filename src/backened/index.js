import express from "express";
import dotenv from "dotenv";
import cors from "cors";


const PORT=3333
dotenv.config(); // Corrected the typo

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Example: Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
