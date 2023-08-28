const User = require('../models/user.model');

const createUser = async (req, res) =>{
    try {
        const {username , email, password} = req.body;
        const response = await User.create(req.body);
        res.json({
            message: response
        })
    } catch (error) {
        res.json({
            message:"internal error"
        })
    }
    
}

const getAllUsers = async (req, res) =>{
    try {
        const response = await User.find();
        res.json({
            message: response
        })
    } catch (error) {
        res.json({
            message: "internal error"
        })
    }
}

const getUser = async (req, res) =>{
    try {
        const response = await User.findById(req.params.id);
        res.json({
            message: response
        })
    } catch (error) {
        res.json({
            message: "internal error"
        })
    }
}

const updateUser = async (req, res) =>{
    try {
        const response = await User.findByIdAndUpdate(req.params.id , req.body , {new: true});
        if(!response){
            res.json({
                message:"Invalid user or Id"
            })
        }
        res.json({
            message: response
        })
    } catch (error) {
        res.json({
            message: "internal error"
        })
    }
}

const deleteUser =async (req, res) => {
    try {
        const response = await User.findByIdAndDelete(req.params.id)
        if(!response) {
            res.json({
                message: "User not found"
            })
        }
    } catch (error) {
        res.json({
            message: "internal error"
        })
    }
}


module.exports ={
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}