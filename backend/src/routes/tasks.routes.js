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

module.exports = router;