const mongoose = require('mongoose');
require('dotenv').config();

// const DB_URL = process.env.DB_URL;
const port = 3000;

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://shagormta0:Fc8zbem7Q7LIgjL9@cluster0.pb5ucuy.mongodb.net/todo");
        console.log('Database Connected Successfully');
    }catch(error){
        console.log(error.message);
    }
}
module.exports = { connectDB,port };