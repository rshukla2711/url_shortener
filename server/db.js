const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = 'mongodb://localhost:27017/urlshortener';

const connect = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

module.exports = connect;