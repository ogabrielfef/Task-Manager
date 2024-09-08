const connection = require('../config/connection');

const findTaskById = async (taskId) => {
    const [task] = await connection.execute(
        `SELECT * FROM TaskManager.users WHERE id = ${taskId}`
    );
    return (task);
};

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
        'UPDATE user_tasks SET tasks = ? WHERE id = ?',
        [task, id]
    );

    return (id, task);
};

const deleteTask = async (id) => {
    await connection.execute(
        `DELETE FROM user_tasks WHERE id = ${id}`
    );
    return (id);
};

module.exports = {
    findAllTasksByUserId,
    insertNewTask,
    updateTask,
    findTaskById,
    deleteTask,
};