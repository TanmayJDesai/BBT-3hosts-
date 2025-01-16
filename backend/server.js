import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'

dotenv.config();

const app = express();

app.get("/", (req,res) => {
    res.send("I love u!!!");
});

console.log(process.env.MONGO_URI);

app.listen(5001, () => {
    connectDB();
    console.log("server started at http://localhost:5001");
});
