const mongoose = require('mongoose');
const db_url = "mongodb+srv://riyazn886:kz0FricU8SnA14ez@riyaz.aatdsty.mongodb.net/";

const db_connection = async ( req,res)=>{
    await mongoose.connect(db_url);
    console.log("database connection established")
}

module.exports = db_connection;