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

const insertNewTask = async (userId, title, task, completed) => {
    const [insertTask] = await connection.execute(
        'INSERT INTO TaskManager.user_tasks (user_id, title, tasks, completed) VALUES (?, ?, ?, ?)',
        [userId, title, task, completed]
    );

    return (insertTask);
};

const updateTask = async (id, title, task, completed) => {
    await connection.execute(
        'UPDATE user_tasks SET title = ?, tasks = ?, completed = ? WHERE id = ?',
        [title, task, completed, id]
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