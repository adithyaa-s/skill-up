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
    college:{
        type:String
    }
});

const User = mongoose.model("Users",UserModal);

module.exports = User;