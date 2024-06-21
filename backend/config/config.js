const { bgRed } = require('colors');
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
require('colors')

const connectDB = async()=>{
    try{
        const url = process.env.MONGO_URI
        const conn = await mongoose.connect(url)
        console.log(`mongoDB Database Connected! ${conn.connection.host}`.bgCyan.white)
    }
    catch(error){
        console.log(`error: ${error.message}`.bgRed.white)
    }
};

module.exports = connectDB;