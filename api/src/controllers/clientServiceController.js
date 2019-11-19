const ClientService = require('../models/ClientService');

module.exports = {
  async index(req, res) {
    const { repairShop } = req;

    try {
      const response = await ClientService.find({ repairShop })
      .populate('service')
      .populate({
        path: 'client',
        populate: {
          path: 'vehicle'
        }
      })
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  async indexOf(req, res) {
    try {
      const response = await ClientService.findById(req.params.id).populate('client');

      if (response) res.send(response);
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async update(req, res) {
    const payload = req.body;

    try {
      const response = await ClientService.findByIdAndUpdate(payload._id, payload);
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  },

  async create(req, res) {
    req.body.repairShop = req.repairShop;

    try {
      const response = await ClientService.create(req.body);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  },

  async delete(req, res) {
    const id = req.body._id;

    try {
      const response = await ClientService.findByIdAndRemove(id);
      if (response) res.sendStatus(204).end();
      else res.sendStatus(404).end();
    } catch (error) {
      res.send(error);
    }
  }
}