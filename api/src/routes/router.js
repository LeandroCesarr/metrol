const express = require('express');
const router = express.Router();

const repairShop = require('../controllers/repairShopController');

router.get('/repair-shop', repairShop.index);
router.post('/repair-shop', repairShop.create);

module.exports = router;
