const Vehicle = require('../models/Vehicle');

module.exports = {
  async index(req, res) {
    try {
      const response = await Vehicle.find();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  async indexOf(req, res) {
    try {
      const response = await Vehicle.findById(req.params.id)

      if (response) res.send(response);
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async update(req, res) {
    const payload = req.body;

    try {
      const response = await Vehicle.findByIdAndUpdate(payload._id, payload);
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async create(req, res) {
    try {
      const response = await Vehicle.create(req.body);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  async delete(req, res) {
    const id = req.body._id;

    try {
      const response = await Vehicle.findByIdAndUpdate(id);
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  }
}