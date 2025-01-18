import express from 'express';
import dotenv from 'dotenv'; 
import { connectDB } from './config/db.js'
import Restaurant from './models/restaurant.model.js';

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/restaurants", async (req, res) => {
    const restaurant = req.body;

    // validation for missing fields, we want complete object to be sent
    if (!restaurant.id || !restaurant.name || !restaurant.location || !restaurant.waitlistCount || !restaurant.occupancyPercentage || !restaurant.phoneNumber) {
        return res.status(400).json({ success: false, message: "Please provide all required fields." });
    }

    // creates a new restaurant object
    const newRest = new Restaurant(restaurant);

    try {
        // the part that will actually save the restaurant object to the database
        await newRest.save(); 
        res.status(201).json({ success: true, data: newRest });
    } catch (error) {
        console.error("ERROR: Unable to create Restaurant:", error.message);
        res.status(500).json({ success: false, message: "Server Error." });
    }
});

app.get("/", (req,res) => {
    res.send("hello world");
});

console.log(process.env.MONGO_URI);

app.listen(5001, () => {
    connectDB();
    console.log("server started at http://localhost:5001");
});
