const express = require('express');
const morgan = require('morgan');
const connectDb = require('./configs/db.config');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

connectDb();

module.exports = app;