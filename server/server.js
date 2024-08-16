import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './dbconnection.js';
import router from './view/route.js';
import cors from 'cors';

const app = express();

// Middleware parse json
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Use Route
app.use("/", router);

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB();

app.listen(8080, () => console.log(`Server listening on port ${PORT}`));