const { userServices } = require('../services');

const getUser = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userServices.findUserById(id);

    if (type) return res.status(message);

    res.status(200).json(message);
};

module.exports = {
    getUser,
};