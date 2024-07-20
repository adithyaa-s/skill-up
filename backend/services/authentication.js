const jwt = require("jsonwebtoken");

async function generateToken (user) {
    return jwt.sign({id:user._id, username: user.username}, 'your_key',{expiresIn: '1h'});
}

async function checkToken (token) {
    try {
      const decoded = jwt.verify(token, 'your_key');
      const currentTimestamp = Math.floor(Date.now() / 1000);
  
      if (decoded.exp < currentTimestamp) {
        return 'Logged Out';
      } else {
        return 'Signed In';
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      return 'Logged Out';
    }
  };

module.exports = {
    generateToken,
    checkToken
}