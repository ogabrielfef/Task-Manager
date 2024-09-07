const { userModel } = require('../models');

const findUserById = async (userId) => {
    const user = await userModel.findById(parseInt(userId, 10));
    if (user) return { type: null, message: user };
    return { type: 'NOT_FOUND', message: NOT_FOUND_USER };
};

// const createNewUser = async (email, password) => {
//     const newUser = await userModel.insertNewUser(email, password);
//     const userAdded = awa
// };

module.exports = {
    findUserById,
}