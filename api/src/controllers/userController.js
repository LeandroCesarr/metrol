const User = require('../models/User');

module.exports = {
    async create(req, res) {
        try {
            await User.create(req.body);
            res.sendStatus(201).end();
        } catch (error) {
            res.send(error);
        }
    },

    async index(req, res) {
        try {
            const response = await User.find();
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    },

    async obtainOne(req, res) {
        const id = req.params.id;
        try {
            const user = User.findById(id);
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404).end();
            }
        } catch (error) {
            res.send(error);
        }
    },

    async update(req, res) {
        const payload = req.body;
        try {
            const user = await User.findByIdAndUpdate(payload._id, req.body);
            if (user) {
                // res.send(user);
                res.sendStatus(202).end();
            } else {
                res.sendStatus(404).end();
            }
        } catch (error) {
            res.send(error);
        }
    },

    async delete(req, res) {
        const id = req.body._id;
        try {
            const user = await User.findByIdAndDelete(id, req.body);
            if (user) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        } catch (error) {
            res.send(error);
        }
    }
}