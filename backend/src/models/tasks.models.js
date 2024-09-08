const connection = require('../config/connection');

const findAllTasksByUserId = async (userId) => {
    const [tasks] = await connection.execute(
        `SELECT * FROM TaskManager.user_tasks WHERE user_id = ${userId}`
    );
    return (tasks);
};

const insertNewTask = async (userId, task) => {
    const [insertTask] = await connection.execute(
        'INSERT INTO TaskManager.user_tasks (user_id, tasks) VALUES (?, ?)',
        [userId, task]
    );

    return (insertTask);
};

const updateTask = async (id, task) => {
    await connection.execute(
        'UPDATE INTO TaskManager.user_tasks SET tasks = ? WHERE user_id = ?',
        [task, id]
    );

    return (id, task);
};

module.exports = {
    findAllTasksByUserId,
    insertNewTask,
    updateTask,
};