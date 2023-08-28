const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
})

const Chatbot = mongoose.model('Chatbot', chatSchema);

module.exports = Chatbot;