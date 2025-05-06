const express = require('express');
const employeeRouter = express.Router();
const employeeController = require('../controllers/employee.controller');

employeeRouter.get('/getAllEmployees',employeeController.getAllUsers);
employeeRouter.get('/getEmployeeById/:id',employeeController.getUserById);
employeeRouter.post('/addEmployee',employeeController.registerUser);
employeeRouter.put('/updateEmployee/:id',employeeController.updateUser);
employeeRouter.delete('/deleteEmployee/:id',employeeController.deleteUser); 

module.exports = employeeRouter;