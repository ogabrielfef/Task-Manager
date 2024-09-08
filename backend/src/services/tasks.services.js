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

const updateTask = async (id, task) => {
    const taskById = await tasksModel.findTaskById(parseInt(id, 10));
    if (taskById) {
        const updatedTask = await tasksModel.updateTask(parseInt(id, 10), task);
        return { type: null, message: updatedTask };
    }
    return { type: 'NOT_FOUND', message: TASK_NOT_FOUND };
};

module.exports = {
    findUserTasks,
    addNewTask,
    updateTask,
};