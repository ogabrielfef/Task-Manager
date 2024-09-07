const express = require('express');

const { useControllers, userControllers } = require('../controllers');

const router = express.Router();

router.get(
    '/:id',
    userControllers.getUser,
);

module.exports = router;