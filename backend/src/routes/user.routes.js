const express = require('express');

const { userControllers } = require('../controllers');

const router = express.Router();

router.get(
    '/:id',
    userControllers.getUser,
);

router.post(
    '/',
    userControllers.createUser,
);

module.exports = router;