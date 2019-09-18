const express = require('express');
const router = express.Router();

const repairShop = require('../controllers/repairShopController');
const user = require('../controllers/userController');

router.get('/repair-shop', repairShop.index);
router.post('/repair-shop', repairShop.create);

router.get('/user', user.index);
router.post('/user', user.create);

module.exports = router;