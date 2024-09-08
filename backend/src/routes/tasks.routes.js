const express = require('express');

const { tasksControllers } = require('../controllers');

const router = express.Router();

router.get(
    '/:userId',
    tasksControllers.getTasks,
);

router.post(
    '/',
    tasksControllers.createNewTask,
);

router.put(
    '/:taskId',
    tasksControllers.updateTask,
);

router.delete(
    '/:taskId',
    tasksControllers.deleteTask,
);

module.exports = router;