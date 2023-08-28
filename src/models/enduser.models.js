const mongoose = require('mongoose');

const enduserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email : {
        type:String,
        required: true,
        unique: true
    }
})

const Enduser = mongoose.model('Enduser' , enduserSchema);
module.exports = Enduser;