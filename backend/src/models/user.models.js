const connection = require('../config/connection');

const findById = async (userId) => {
    const [user] = await connection.execute(
        `SELECT * FROM TaskManager.users WHERE id = ${userId}`
    );
    console.log(user[0].id);
    return (user);
};

const insertNewUser = async (email, password) => {
    const [{ insertUser }] = await connection.execute(
        'INSERT INTO TaskManager.users (email, passwd) VALUES (?, ?)', [email, password],
    );
    return (insertUser);
}

module.exports = {
    insertNewUser,
    findById,
};