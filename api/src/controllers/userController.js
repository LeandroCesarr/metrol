const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwt');

async function generateToken(params = {}) {
	return jwt.sign(params, jwtSecret.secret, {
		expiresIn: 86400,
	});
}

module.exports = {
  async create(req, res) {
    const { email, password, repairShop } = req.body;
    const checkHasUser = await User.findOne({ email });
    const cryptKey = await bcrypt.hash(password, 10);
    const token = await generateToken({ repairShop });

    console.log(token);
    
    

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
      const user = await User.findByIdAndUpdate(payload._id, req.body);
      if (user) {
        // res.send(user);
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