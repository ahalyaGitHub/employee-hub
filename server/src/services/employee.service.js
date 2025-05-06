const Employee = require('../models/employee.model');
const bcrypt = require('bcryptjs');
class UserService{
    async registerUser(name,email,password){
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password,salt);
        const obj = {
            name:{
                firstName:name.firstName,
                lastName:name.lastName,
            },
            email,
            password:hashedPassword,
            role:"employee",
        }
        const newUser = await Employee.create(obj);
        return newUser;
    }
    async getAllUsers(){
        const users = await Employee.find();
        return users;
    }
    async getUserById(id){
        const userby = await Employee.findById(id);
        return userby;
    }
    async updateUser(obj){
        const id = obj.id;
        const existingUser = await Employee.findById(id);
        if(!existingUser){
            throw new Error("User not found");
        }
        if (obj.name) {
            if (obj.name.firstName) existingUser.name.firstName = obj.name.firstName;
            if (obj.name.lastName) existingUser.name.lastName = obj.name.lastName;
        }
        if (obj.email) existingUser.email = obj.email;
        if (obj.password) existingUser.password = obj.password;
        if (obj.phone) existingUser.phone = obj.phone;
        if (obj.address) {
            if (obj.address.city) existingUser.address.city = obj.address.city;
            if (obj.address.state) existingUser.address.state = obj.address.state;
            if (obj.address.country) existingUser.address.country = obj.address.country;
            if (obj.address.pincode) existingUser.address.pincode = obj.address.pincode;
        }
        if (obj.role) existingUser.role = obj.role;
        await existingUser.save();
        return existingUser;
    }
    async deleteUser(id){
        const deleteEmployee = await Employee.findByIdAndDelete(id);
        return deleteEmployee;
    }
    
}
const userService = new UserService();
module.exports = userService;