const mongoose = require("mongoose");
require("dotenv").config();
const db_url= process.env.DB_URL;

const connect = async () => {
    mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    })
};

module.exports = connect;