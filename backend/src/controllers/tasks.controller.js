const { tasksServices } = require('../services');

const getTasks = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await tasksServices.findUserTasks(id);

    if (type) return res.status(message);

    res.status(200).json(message);
};

const createNewTask = async (req, res) => {
    const { userId, task } = req.body;

    const { type, message } = await tasksServices.addNewTask(userId, task);

    if (type) return res.status(message);

    return res.status(200).json(message);
};

const updateTask = async (req, res) => {
    const { taskId, task } = req.body;

    const { type, message } = await tasksServices.updateTask(taskId, task);

    if (type) return res.stauts(message);

    return res.status(200).json(message);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    const { type, message } = await tasksServices.deleteTask(id);

    if (type) return res.status(message);

    return res.status(200).json(message);
};

module.exports = {
    getTasks,
    createNewTask,
    updateTask,
    deleteTask,
};