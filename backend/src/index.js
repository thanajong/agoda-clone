const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const mongoConnectionString = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(mongoConnectionString)

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', async (req, res) => {
    try {
        res.json({ message: "Hello from express endpoint" });
    }catch(error){
        res.status(500).send('Server Error');
    }
});

// Start server
app.listen(3000,() => {
    console.log('Server is running on port 3000');
});
