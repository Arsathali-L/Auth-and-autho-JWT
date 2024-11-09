
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://arsathali:ali@cluster0.ilqgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
