const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },

})

const users = mongoose.model("users",schema);


module.exports= users;