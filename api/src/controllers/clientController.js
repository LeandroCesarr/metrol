const Client = require('../models/Client');

module.exports = {
  async index(req, res) {
    const { repairShop } = req;

    try {
      const response = await Client.find({ repairShop }).populate('repairShop').populate('vehicle');
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  async indexOf(req, res) {
    try {
      const response = await Client.findById(req.params.id).populate('repairShop').populate('vehicle');

      if (response) res.send(response);
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async indexOfnoPopulate(req, res) {
    try {
      const response = await Client.findById(req.params.id);

      if (response) res.send(response);
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async update(req, res) {
    const payload = req.body;

    try {
      const response = await Client.findByIdAndUpdate(payload._id, payload);
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async create(req, res) {
    req.body.repairShop = req.repairShop;

    try {
      const response = await Client.create(req.body);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  async delete(req, res) {
    const id = req.body._id;

    try {
      const response = await Client.findByIdAndRemove(id);
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  }
}