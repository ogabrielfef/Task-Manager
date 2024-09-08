const { tasksModel } = require('../models');

const findUserTasks = async (userId) => {
    const tasks = await tasksModel.findAllTasksByUserId(parseInt(userId, 10));
    if (tasks) return { type: null, message: tasks };
    return { type: 'NOT_FOUND', message: NOT_FOUND_TASKS };
};

const addNewTask = async (userId, title, task, completed) => {
    const newTask = await tasksModel.insertNewTask(userId, title, task, completed);
    if (newTask) return { type: null, message: newTask }
    return { type: 'NOT_ADDED', message: NOT_ADDED_TASK };
};

const updateTask = async (id, title, task, completed) => {
    const taskById = await tasksModel.findTaskById(parseInt(id, 10));
    if (taskById) {
        const updatedTask = await tasksModel.updateTask(parseInt(id, 10), title, task, completed);
        return { type: null, message: updatedTask };
    }
    return { type: 'NOT_FOUND', message: TASK_NOT_FOUND };
};

const deleteTask = async (id) => {
    const taskById = await tasksModel.findTaskById(parseInt(id, 10));
    if (taskById) {
        const deletedTask = await tasksModel.deleteTask(parseInt(id, 10));
        return { type: null, message: taskById };
    }
    return { type: 'NOT_FOUND', message: TASK_NOT_FOUND };
};

module.exports = {
    findUserTasks,
    addNewTask,
    updateTask,
    deleteTask,
};