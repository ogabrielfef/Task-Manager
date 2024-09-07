const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email}, secret)
};

module.exports = generateToken;