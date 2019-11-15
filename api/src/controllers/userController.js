const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtSecret = require('../config/jwt');

module.exports = {
  async create(req, res) {
    const { email, password, repairShop } = req.body;
    const checkHasUser = await User.findOne({ email });
    const cryptKey = await bcrypt.hash(password, 10);
    const token = await jwtSecret.generateToken({ repairShop });

    if (checkHasUser) res.sendStatus(400);
    req.body.password = cryptKey;
    req.body.token = token;

    try {
      const response = await User.create(req.body);
      res.send({ response });
    } catch (error) {
      res.send(error);
    }
  },

  async access(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const cripty = await bcrypt.compare(password, user.password);
    const token = await jwtSecret.generateToken({ repairShop: user.repairShop });

    user.token = token;

    try {
      await User.updateOne({ email }, user);
    } catch (err) {
      res.sendStatus(500).end();
    }

    if (!user) res.sendStatus(404).end();
    if (!cripty) res.sendStatus(401).end();

    res.send(user);
  },

  async index(req, res) {
    try {
      const response = await User.find().populate('repairShop');
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  async indexOf(req, res) {
    const id = req.params.id;
    try {
      const user = User.findById(id).populate('repairShop');
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
      const user = await User.findByIdAndUpdate(payload._id, payload);
      if (user) {
        res.sendStatus(204).end();
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