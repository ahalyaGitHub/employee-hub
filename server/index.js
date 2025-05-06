const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');
const employeeRouter = require('./src/routes/employee.route');

const PORT = 3000;
app.use(express.json());
app.use('/employee', employeeRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
