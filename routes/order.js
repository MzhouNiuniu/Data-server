var express = require('express');
var router = express.Router();
const orderController = require('../controller/order-controller')
router.get('/getOrderList', orderController.getOrderList);
router.get('/getOrderDetail', orderController.getOrderDetail);
router.post('/checkOrder', orderController.checkOrder);
module.exports = router;
