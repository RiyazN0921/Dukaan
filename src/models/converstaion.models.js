const mongoose = require('mongoose');

const coversationSchema = new mongoose.Schema({
    chatbot:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chatbot",
        required:true
    },
    enduser:{
        name:String,
        email:String,
    }
})

const Converstaion = mongoose.model("Converstaion", coversationSchema);
module.exports = Converstaion;