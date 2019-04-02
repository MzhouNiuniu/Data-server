var express = require('express');
var router = express.Router();
const orderController = require('../controller/order-controller');
/**
 * @api {get} /order/getOrderList 获取订单或企业列表
 * @apiName getOrderList
 * @apiGroup order
 *
 * @apiParam {Number} pageSize 每页显示数量.
 * @apiParam {Number} pageNum 页数.
 * @apiParam {String} type 订单类型:awaitPreviewOrder待审核订单，awaitDealOrder待处理订单，endingOrder已结束订单，awaitPreviewCompany待审核企业.
 */
router.get('/getOrderList', orderController.getOrderList);

/**
 * @api {get} /order/getOrderDetail 获取订单获企业详情
 * @apiName getOrderDetail
 * @apiGroup order
 *
 * @apiParam {Number} id 订单或企业id.
 * @apiParam {String} type 类型：order订单，company企业.
 */
router.get('/getOrderDetail', orderController.getOrderDetail);

/**
 * @api {post} /order/checkOrder 审核订单或企业
 * @apiName checkOrder
 * @apiGroup order
 *
 * @apiParam {Number} checkResult 审核结果:1通过，0不通过.
 * @apiParam {Number} id 订单或企业id
 * @apiParam {String} type 类型:buyRequirementOrder求购订单，sellingProduct出售商品，company企业
 */
router.post('/checkOrder', orderController.checkOrder);
module.exports = router;
