const { tasksModel } = require('../models');

const findUserTasks = async (userId) => {
    const tasks = await tasksModel.findAllTasksByUserId(parseInt(userId, 10));
    if (tasks) return { type: null, message: tasks };
    return { type: 'NOT_FOUND', message: NOT_FOUND_TASKS };
};

const addNewTask = async (userId, task) => {
    const newTask = await tasksModel.insertNewTask(userId, task);
    if (newTask) return { type: null, message: newTask }
    return { type: 'NOT_ADDED', message: NOT_ADDED_TASK };
};

module.exports = {
    findUserTasks,
    addNewTask,
};