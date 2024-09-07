const connection = require('../config/connection');

const findById = async (userId) => {
    const [user] = await connection.execute(
        `SELECT * FROM TaskManager.users WHERE id = ${userId}`
    );
    return (user);
};

const findByEmail = async (email) => {
    const [user] = await connection.execute(
        `SELECT * FROM TaskManager.users WHERE email = ${email}`
    );
    return (user);
}

const insertNewUser = async (email, password) => {
    const [insertUser] = await connection.execute(
        'INSERT INTO TaskManager.users (email, passwd) VALUES (?, ?)', [email, password],
    );

    await connection.execute(
        'INSERT INTO TaskManager.user_tasks (user_id, tasks) VALUES (?, ?)',
        [insertUser.insertId, JSON.stringify([])],
    );

    return (insertUser);
}

module.exports = {
    insertNewUser,
    findById,
    findByEmail,
};