const Conversation = require('../models/converstaion.models')
const Chatbot = require('../models/chatbot.models')

const startConversation = async (req,res) => {
    try {
        const chatbot = await Chatbot.findById(req.params.chatbotId);
        if(!chatbot) {
            res.json({
                message:"Couldn't find chatbot"
            })
        }
        const conversation = await Conversation.create({chatbot:chatbot._id, ...req.body});
        res.json({
            message:conversation
        })
    } catch (error) {
        res.json({
            message:"invalid conversation"
        })
    }
}

const allConversations = async (req, res) => {
    try {
        const chatbot = await Chatbot.findById(req.params.chatbotId);
        if(!chatbot) {
            res.json({
                message:"Couldn't find chatbot"
            })
        }
        const conversation = await Conversation.find({chatbot:chatbot._id});
        res.json({
            message:conversation
        })
    } catch (error) {
        res.json({
            message:"invalid conversation"
        })
    }
}

const getConversationById = async (req, res) => {
    try {
        const conversation = await Conversation.findById(req.params.ConversationId).populate(Chatbot);
        if(!conversation) {
            res.json({
                message:"Couldn't find chatbot"
            })
        }
        res.json({
            message:conversation
        })
    } catch (error) {
        res.json({
            message:"invalid conversation"
        })
    }
}

const updateConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findByIdAndUpdate(req.params.ConversationId, req.body , {new:true});
        if(!conversation) {
            res.json({
                message:"Couldn't find chatbot"
            })
        }
        
        res.json({
            message:conversation
        })
    } catch (error) {
        res.json({
            message:"invalid conversation"
        })
    }
}

const deleteConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findByIdAndDelete(req.params.conversationId);
        if(!conversation) {
            res.json({
                message:"Couldn't find chatbot"
            })
        }
        res.json({
            message:conversation
        })
    } catch (error) {
        res.json({
            message:"invalid conversation"
        })
    }
}

module.exports = {
    startConversation,
    allConversations,
    getConversationById,
    updateConversation,
    deleteConversation
}