const express = require('express');
const cors = require('cors');
const { userRoutes, tasksRoutes } = require('./routes');
const authenticateToken = require('./middleware/authenticateToken');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Hello, world!');
});

app.use('/user', userRoutes);

app.use('/tasks',authenticateToken,  tasksRoutes);

module.exports = app;