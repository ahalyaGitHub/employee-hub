const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connectDb() {
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('mongodb connected....');
        })
        .catch(() => {
            console.log('Error in mongodb connection.');
        });
}

module.exports = connectDb;
