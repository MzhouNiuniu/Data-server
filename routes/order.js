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
 * @apiParam {String} type 订单类型:awaitPreviewOrder待审核订单，awaitDealOrder待处理订单，endingOrder已结束订单，awaitPreviewCompany待审核企业，order求购订单.
 * @apiParam {Number} productClass 产品分类（type为order时用到）.
 * @apiParam {String} productionArea 产品地区编码（type为order时用到）.
 * @apiParam {String} searchContent 搜索条件（type为order时用到）.
 */
router.get('/getOrderList', orderController.getOrderList);

/**
 * @api {get} /order/getOrderDetail 获取订单获企业详情
 * @apiName getOrderDetail
 * @apiGroup order
 *
 * @apiParam {Number} id 订单或企业id.
 * @apiParam {String} type 类型：order订单，goods商品，company企业，childOrder求购子订单，sellingOrder出售交易中订单.
 * @apiParam {String} roleType 身份信息:采购商buyer，供应商supplier（type为childOrder和sellingOrder时用到）
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

/**
 * @api {post} /order/applyInsteadCustomer 代客报名
 * @apiName applyInsteadCustomer
 * @apiGroup order
 *
 * @apiParam {String} contactMan 联系人（必填）
 * @apiParam {String} contactPhone 联系电话（必填）
 * @apiParam {Number} isSpot 是否现货0否1是（必填）
 * @apiParam {String} productAddr 产地详细地址
 * @apiParam {String} productCity 产地市
 * @apiParam {String} productDescription 产品描述
 * @apiParam {Number} productPrice 商品单价（必填）
 * @apiParam {String} productPriceUnit 商品单价单位
 * @apiParam {String} productProvince 产地省
 * @apiParam {String} supplierAccount 供应商账号（必填）
 * @apiParam {Number} supplyQuantity 供货量（必填）
 * @apiParam {String} supplyQuantityUnit 供货量单位（必填）
 */
router.post('/applyInsteadCustomer', orderController.applyInsteadCustomer);

/**
 * @api {post} /order/releaseRequirementInsteadCustomer 代客发布订单
 * @apiName releaseRequirementInsteadCustomer
 * @apiGroup order
 *
 * @apiParam {String} businessAccount 业务员账号
 * @apiParam {Number} buyAmount 购买数量（必填）
 * @apiParam {String} buyAmountUnit 购买数量单位（必填）
 * @apiParam {String} buyDeadline 采购截止时间
 * @apiParam {String} companyName 公司名称
 * @apiParam {String} contactMan 联系人
 * @apiParam {String} contactPhone 联系人电话
 * @apiParam {String} deliveryAddr 交货详细地址
 * @apiParam {String} deliveryCity 交货地址市
 * @apiParam {String} deliveryDeadline 交货截止时间
 * @apiParam {String} deliveryDistrict 交货地址区
 * @apiParam {String} deliveryProvince 交货地址省
 * @apiParam {Number} expectPrice 期望单价
 * @apiParam {String} expectPriceUnit 期望单价单位
 * @apiParam {String} generalizeAccount 居间人账号
 * @apiParam {String} memberAccount 会员账号（必填）
 * @apiParam {Number} predictAmount 预计供货量
 * @apiParam {Number} productClass 商品分类（必填）
 * @apiParam {String} productName 商品名称（必填）
 * @apiParam {String} productStandard 产品标准
 * @apiParam {Array} productionPlace 产地 [
 {
            city: String,//产地市
            province: String,//产地省
            regionCode: String,//产地省编码
            requirementNumber: String,//买货需求单编号
        }
 ],
 * @apiParam {String} regionCode 交货地区编码
 */
router.post('/releaseRequirementInsteadCustomer', orderController.releaseRequirementInsteadCustomer);

/**
 * @api {post} /order/auditInsteadCustomer 代客认证
 * @apiName auditInsteadCustomer
 * @apiGroup order
 *
 * @apiParam {String} custAccount 客户.
 * @apiParam {String} name 公司名称.
 * @apiParam {String} businessLicense 营业执照.
 * @apiParam {String} legalPerson 法人.
 * @apiParam {String} province 省.
 * @apiParam {String} city 市.
 * @apiParam {String} district 区.
 * @apiParam {String} detailAddr 详细地址.
 * @apiParam {String} businessScope 经营范围.
 *
 */

router.post('/auditInsteadCustomer',orderController.auditInsteadCustomer)

/**
 * @api {post} /order/buyInsteadCustomer 代客购买
 * @apiName buyInsteadCustomer
 * @apiGroup order
 *
 */
router.post('/buyInsteadCustomer',orderController.buyInsteadCustomer)

/**
 * @api {post} /order/finalDeal 最终成交
 * @apiName finalDeal
 * @apiGroup order
 *
 * @apiParam {String} actualAmount 实际成交数量.
 * @apiParam {String} actualPrice 实际成交单价.
 * @apiParam {String} actualTotalPrice 实际成交总额.
 * @apiParam {String} id 订单id.
 */
router.post('/finalDeal',orderController.finalDeal)
module.exports = router;
