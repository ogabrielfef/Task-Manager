const { tasksServices } = require('../services');

const getTasks = async (req, res) => {
    const { userId } = req.params;
    const { type, message } = await tasksServices.findUserTasks(parseInt(userId, 10));

    if (type) return res.status(message);

    res.status(200).json(message);
};

const createNewTask = async (req, res) => {
    const { userId, title, task, completed } = req.body;

    const { type, message } = await tasksServices.addNewTask(userId, title, task, completed);

    if (type) return res.status(message);

    return res.status(200).json(message);
};

const updateTask = async (req, res) => {
    const { taskId } = req.params
    const { title, task, completed } = req.body;

    const { type, message } = await tasksServices.updateTask(taskId, title, task, completed);

    if (type) return res.stauts(message);

    return res.status(200).json(message);
};

const deleteTask = async (req, res) => {
    const { taskId } = req.params;

    const { type, message } = await tasksServices.deleteTask(taskId);

    if (type) return res.status(message);

    return res.status(200).json(message);
};

module.exports = {
    getTasks,
    createNewTask,
    updateTask,
    deleteTask,
};