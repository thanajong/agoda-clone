import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import authRoutes from './routes/auth.routes.js'

// Config the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());    // allows to parse incoming requests : req.body
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// for testing purposes
app.get('/api/test', async (req, res) => {
    try {
        res.json({ message: "Hello from express endpoint" });
    }catch(error){
        res.status(500).send('Server Error');
    }
});

// Main
app.use('/api/auth', authRoutes);
app.listen(PORT,() => {
    connectDB();
    console.log(`Server is running on port: ${PORT}`);
});
