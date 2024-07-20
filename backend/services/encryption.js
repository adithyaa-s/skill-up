const bcrypt = require("bcrypt");
const saltRounds = 10;

async function hashPassword (plainpassword)  {
    try{
        const hashedPassword = await bcrypt.hash(plainpassword,saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log("Error in Hashing Password");
    }
}

async function checkPassword (plainpassword, hashedPassword) {
    try{
        const match = await bcrypt.compare(plainpassword,hashedPassword);
        return match;
    } catch(error){
        console.log("Error in Comparing Password",error);
    }
}

module.exports = {
    hashPassword,
    checkPassword
}