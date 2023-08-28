const EndUser = require('../models/enduser.models')

const createEndUser = async (req, res) => {
    try {
        const enduser = await EndUser.create(req.body);
        res.json({
            message:enduser
        })
    } catch (error) {
        res.json({
            message:"internal error"
        })
    }
}

const getEnduser = async (req, res) => {
    try {
        const findUser = await EndUser.find()
        res.json({
            message:findUser
        })
    } catch (error) {
        res.json({
            message:"internal error"
        })
    }
}

const getUserbyid = async (req, res) => {
    try {
        const getuser = await EndUser.findById(req.params.endUserid);
        if(!getuser) {
            res.json({
                message:"couldn't find user"
            })
        }
        res.json({
            message:getuser
        })
    } catch (error) {
        res.json({
            message:"internal error"
        })
    }
}

const updateEndUser = async (req,res)=>{
    try {
        const updateEndUser = await EndUser.findByIdAndUpdate(req.params.endUserid , ...req.body, {new:true});
        if(!updateEndUser){
            res.json({
                message:"couldn't find user"
            })
        }

        res.json({
            message:updateEndUser
        })
    } catch (error) {
        res.json({
            message:"error updating"
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleteEndUser = await EndUser.findByIdAndDelete(req.params.endUserId)
        if(!deleteEndUser) {
            res.json({
                message: "User not found"
            })
        }
        res.json({
            message: deleteEndUser
        })
    } catch (error) {
        res.json({
            message: "Error while deleting"
        })
    }
}

module.exports ={
    createEndUser,
    getEnduser,
    getUserbyid,
    updateEndUser,
    deleteUser
}