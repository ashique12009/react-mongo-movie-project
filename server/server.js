import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './dbconnection.js';
import router from './view/route.js';

const app = express();

// Use Route
app.use("/", router);

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB();

app.listen(8080, () => console.log(`Server listening on port ${PORT}`));