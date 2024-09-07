const express = require('express');

const { userControllers } = require('../controllers');

const router = express.Router();

router.get(
    '/:id',
    userControllers.getUser,
);

router.post(
    '/login',
    userControllers.login,
);

router.post(
    '/register',
    userControllers.createUser,
);

module.exports = router;