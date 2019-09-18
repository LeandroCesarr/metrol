const express = require('express');
const router = express.Router();

const repairShop = require('../controllers/repairShopController');
const service = require('../controllers/serviceController');

router.get('/repair-shop', repairShop.index);
router.post('/repair-shop', repairShop.create);

router.get('/service/:id', service.indexOf);
router.get('/service', service.index);
router.put('/service', service.update);
router.post('/service', service.create);
router.delete('/service', service.delete);

module.exports = router;
