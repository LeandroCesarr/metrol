const RepairShop = require('../models/RepairShop');

module.exports = {
  async create(req, res) {
    try {
      await RepairShop.create(req.body);
      res.sendStatus(201).end();
    } catch (error) {
      res.send(error);
    }
  },

  async index(req, res) {
    try {
      const response = await RepairShop.find();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  }
}