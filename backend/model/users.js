const mongoose = require("mongoose");

const UserModal = mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    occupation:{
        type:String
    },
    phonenumber: {
        type:Number,
        unique:true
    }
});

const User = mongoose.model("Users",UserModal);

module.exports = User;