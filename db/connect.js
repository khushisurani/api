const mongoose = require("mongoose");

uri = "mongodb://localhost:27017/Api"


const connectDB = (uri)=>{
    // console.log("connect db");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
module.exports = connectDB;
