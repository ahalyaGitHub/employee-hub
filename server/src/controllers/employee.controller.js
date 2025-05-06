const mongoose = require('mongoose');
const userService = require('../services/employee.service');
exports.registerUser = async function(req,res){
    try{
        const payload = req.body;
        //const {email,password} = payload;
        const newUser = await userService.registerUser(payload.name,payload.email,payload.password);
        res.status(201).json({
            status:true,
            message:"Employee registered successfully",
            data:{},
            //token:token,
        });

    }
    catch(err){
        res.status(400).json({
            status:false,
            message:"Error in registering employee",
            error:err.message,
        });
    }
}
exports.getAllUsers = async function(req,res){
    try{
        const users = await userService.getAllUsers();
        res.status(201).json({
            status:true,
            message:"All employees fetched successfully",
            data:{users},
            //token:token,
        });
    }
    catch(err){
        res.status(400).json({
            status:false,
            message:"Error in fetching employees",
        });
    }
}
exports.getUserById = async function(req,res){
    try{
        const id = req.params.id;
        const userby = await userService.getUserById(id);
        res.status(201).json({
            status:true,
            message:"Employee fetched successfully",
            data:{userby},
            //token:token,
        });
    }
    catch(err){
        res.status(400).json({
            status:false,
            message:"Error in fetching employee",
            error:err.message,      
        });
    }

}
exports.updateUser = async function(req,res){
    try{
        const id = req.params.id;
        const payload = { ...req.body, id };
        const updateduser = await userService.updateUser(payload);
        res.status(201).json({
            status:true,
            message:"Employee updated successfully",
            data:{updateduser},
            //token:token,
        });
    }
    catch(err){
        res.status(400).json({
            status:false,
            message:"Error in updating employee",
            error:err.message,
        });
    }
}
exports.deleteUser = async function(req,res){
    try{
        const payload = req.params.id;
        const deleteEmployee = await userService.deleteUser(payload);
        res.status(201).json({
            status:true,
            message:"Employee deleted successfully",
            data:{},
            //token:token,
        });
    }
    catch(err){
        res.status(400).json({
            status:false,
            message:"Error in deleting employee",
        });
    }
}
