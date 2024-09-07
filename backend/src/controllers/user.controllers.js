const { userServices } = require('../services');
const generateToken = require('../../utils/jwt');
const bcrypt = require('bcryptjs');

const getUser = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userServices.findUserById(id);

    if (type) return res.status(message);

    res.status(200).json(message);
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { type, message } = await userServices.findUserByEmail(JSON.stringify(email));

        if (type) {
            return res.status(type).json({ message: message }); 
        }

        if (password !== message.passwd) {
            return res.status(403).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(message);

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
 
const createUser = async (req, res) => {
    const { email, password } = req.body;

    const { type, message } = await userServices.createNewUser(email, password);

    if (type) return res.status(message);
    
    return res.status(200).json(message);
};

module.exports = {
    getUser,
    createUser,
    login,
};