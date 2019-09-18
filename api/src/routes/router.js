const express = require('express');
const router = express.Router();

const repairShop = require('../controllers/repairShopController');
const service = require('../controllers/serviceController');
const user = require('../controllers/userController');

router.get('/repair-shop', repairShop.indexOf);
router.get('/repair-shop', repairShop.index);
router.put('/repair-shop', repairShop.update);
router.post('/repair-shop', repairShop.create);
router.delete('/repair-shop', repairShop.delete);


router.get('/service/:id', service.indexOf);
router.get('/service', service.index);
router.put('/service', service.update);
router.post('/service', service.create);
router.delete('/service', service.delete);

router.get('/user/:id', user.indexOf);
router.get('/user', user.index);
router.put('/user', user.update);
router.post('/user', user.create);
router.delete('/user', user.delete);

module.exports = router;
