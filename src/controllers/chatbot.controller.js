const Chatbot = require('../models/chatbot.models');
const User = require('../models/user.model');

const createChatbot = async (req,res)=>{
    try {
        const user = await User.findById(req.params.userId);
        if(!user){
            res.json({
                message:"User not found"
            })
        }

        const chatbot = await Chatbot.create({user:user._id, ...req.body});
        res.json({
            message:chatbot
        })
    } catch (error) {
        res.json({
            message:"internal error"
        })
    }
}

const getChatbot = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if(!user){
            res.json({
                message:"User not found"
            })
        }

        const chatbot = await Chatbot.find({user : user._id});
        res.json({
            message:chatbot
        })
} catch (error) {
    res.json({
        message: "internal error"
    })
}
}

const getchatbotbyid = async (req, res) => {
    try {
        const chatbot = await Chatbot.findById(req.params.chatbotId).populate("User");
        if(!chatbot) {
            res.json({
                message : "no chatbot found"
            })
        }
        res.json({
            chatbot
        })
    } catch (error) {
        res.json({
            message: "internal error"
        })
    }
}

const updateChatbot = async (req, res) => {
    try {
        const chatbot = await Chatbot.findByIdAndUpdate(req.params.chatbotId , req.body , {new: true});

        if(!chatbot) {
            res.json({
                message : "no chatbot found"
            })
        }
        res.json({
            chatbot
        })
    } catch (error) {
        res.json({
            message: "internal error"
        })
    }
}

const deleteChatbot = async (req, res) => {
    try {
        const chatbot = await Chatbot.findByIdAndDelete(req.params.chatbotId);
        if(!chatbot) {
            res.json({
                message : "no chatbot found"
            })
        }
        res.json({
            chatbot
        })
    } catch (error) {
        res.json({
            message: "internal error"
        })
    }
}

module.exports = {
    createChatbot,
    getChatbot,
    getchatbotbyid,
    updateChatbot,
    deleteChatbot
}


