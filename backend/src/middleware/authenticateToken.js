const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader;

    if (token == null) return res.status(401).json({ message: 'Token not provided' });

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;