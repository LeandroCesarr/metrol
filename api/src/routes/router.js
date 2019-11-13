const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController');
const repairShop = require('../controllers/repairShopController');
const service = require('../controllers/serviceController');
const user = require('../controllers/userController');
const brand = require('../controllers/brandController');
const vehicle = require('../controllers/vehicleController');
const client = require('../controllers/clientController');
const category = require('../controllers/categoryController');
const clientService = require('../controllers/clientServiceController');
const product = require('../controllers/productController');

router.get('/repair-shop/:id', repairShop.indexOf);
router.get('/repair-shop', repairShop.index);
router.put('/repair-shop', repairShop.update);
router.post('/repair-shop', repairShop.create);
router.delete('/repair-shop', repairShop.delete);

router.get('/product/:id', product.indexOf);
router.get('/product', product.index);
router.put('/product', product.update);
router.post('/product', product.create);
router.delete('/product', product.delete);

router.get('/user/:id', user.indexOf);
router.get('/user', auth, user.index);
router.put('/user', user.update);
router.post('/user', user.create);
router.delete('/user', user.delete);

router.get('/service/:id', service.indexOf);
router.get('/service', service.index);
router.put('/service', service.update);
router.post('/service', service.create);
router.delete('/service', service.delete);

router.get('/category/:id', category.indexOf);
router.get('/category', category.index);
router.put('/category', category.update);
router.post('/category', category.create);
router.delete('/category', category.delete);

router.get('/client-service/:id', clientService.indexOf);
router.get('/client-service', clientService.index);
router.put('/client-service', clientService.update);
router.post('/client-service', clientService.create);
router.delete('/client-service', clientService.delete);

router.get('/brand/:id', brand.indexOf);
router.get('/brand', brand.index);
router.put('/brand', brand.update);
router.post('/brand', brand.create);
router.delete('/brand', brand.delete);

router.get('/vehicle/:id', vehicle.indexOf);
router.get('/vehicle', vehicle.index);
router.put('/vehicle', vehicle.update);
router.post('/vehicle', vehicle.create);
router.delete('/vehicle', vehicle.delete);

router.get('/client/:id', client.indexOf);
router.get('/client', client.index);
router.put('/client', client.update);
router.post('/client', client.create);
router.delete('/client', client.delete);

module.exports = router;
