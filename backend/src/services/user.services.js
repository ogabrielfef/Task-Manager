const { userModel } = require('../models');

const findUserById = async (userId) => {
    const user = await userModel.findById(parseInt(userId, 10));
    if (user) return { type: null, message: user };
    return { type: 'NOT_FOUND', message: NOT_FOUND_USER };
};

const findUserByEmail = async (email) => {
    const user = await userModel.findByEmail(email);
    if (user) return { type: null, message: user[0] };
    return { type: 'NOT_FOUND', message: NOT_FOUND_USER };
}

const createNewUser = async (email, password) => {
    const newUser = await userModel.insertNewUser(email, password);
    const userAdded = await userModel.findById(newUser.insertId);
    if (userAdded) return { type: null, message: userAdded};
    return { type: 'NOT_FOUND', message: NOT_FOUND_USER };
};

module.exports = {
    findUserById,
    createNewUser,
    findUserByEmail,
}