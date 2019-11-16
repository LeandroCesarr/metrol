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

router.get('/product/:id', auth, product.indexOf);
router.get('/product', auth, product.index);
router.put('/product', auth, product.update);
router.post('/product', auth, product.create);
router.delete('/product', auth, product.delete);

router.get('/user/:id', auth, user.indexOf);
router.get('/user', auth, user.index);
router.put('/user', auth, user.update);
router.post('/user', auth, user.create);
router.post('/user/login', user.access);
router.delete('/user', auth, user.delete);

router.get('/service/:id', auth, service.indexOf);
router.get('/service', auth, service.index);
router.put('/service', auth, service.update);
router.post('/service', auth, service.create);
router.delete('/service', auth, service.delete);

router.get('/category/:id', auth, category.indexOf);
router.get('/category', auth, category.index);
router.put('/category', auth, category.update);
router.post('/category', auth, category.create);
router.delete('/category', auth, category.delete);

router.get('/client-service/:id', auth, clientService.indexOf);
router.get('/client-service', auth, clientService.index);
router.put('/client-service', auth, clientService.update);
router.post('/client-service', auth, clientService.create);
router.delete('/client-service', auth, clientService.delete);

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

router.get('/client/:id', auth, client.indexOf);
router.get('/client', auth, client.index);
router.put('/client', auth, client.update);
router.post('/client', auth, client.create);
router.delete('/client', auth, client.delete);

module.exports = router;
