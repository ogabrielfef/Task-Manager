const express = require('express');

const { tasksControllers } = require('../controllers');

const router = express.Router();

router.get(
    '/:id',
    tasksControllers.getTasks,
);

router.post(
    '/',
    tasksControllers.createNewTask,
);

router.put(
    '/',
    tasksControllers.updateTask,
);

module.exports = router;