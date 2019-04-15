var express = require('express');
var router = express.Router();
import {goodList, goodsDetail,releaseSellProductInsteadCustomer,buyInsteadCustomer,addDeliveryAddr,getDefaultAddress,getDeliveryAddrs} from '../controller/goods-controller'


/**
 * @apiGroup goods
 * @apiName goodList
 * @api {get} /goods/goodsList 优质好货列表
 * @apiParam {string} cityCode 城市code.
 * @apiParam {string} content 模糊关键字查询
 * @apiParam {Number} isSpotGoods 分类
 * @apiParam {Number} pageNum 当前页面
 * @apiParam {Number} pageSize 页面尺寸
 * @apiParam {Number} type 类型
 */
router.get('/goodsList', goodList);


/**
 * @apiGroup goods
 * @apiName goodsDetail
 * @api {get} /goods/goodsDetail 优质好货详情
 * @apiParam {string} goodsId 订单id.
 */
router.get('/goodsDetail', goodsDetail);

/**
 * @apiGroup goods
 * @apiName releaseSellProductInsteadCustomer
 * @api {post} /goods/releaseSellProductInsteadCustomer 代客发布商品
 * @apiParam {string} businessAccount 业务员账号
 * @apiParam {string} companyName 公司名称
 * @apiParam {string} productPics 商品名称
 * @apiParam {Number}    supplyNum 供货量
 * @apiParam {string}    supplyUnit 供货单位
 * @apiParam {string}   productClass 商品分类
 * @apiParam {Number}     productPrice 商品单价
 * @apiParam {string}    productPriceUnit 商品单位
 * @apiParam {Number}   isSpotGoods 是否现货
 * @apiParam {string}   contactMan 联系人
 * @apiParam {string}     contactPhone 联系电话
 * @apiParam {Number}     predictDeliveryTime 预计交货时间
 * @apiParam {string}    originPlacePrince 产地省
 * @apiParam {string}     originPlaceCity 产地市
 * @apiParam {string}   originPlaceAddr 详细地址
 * @apiParam {string}   minBranch 最少起批量
 * @apiParam {string}  minBranchUnit 最小起批量单位
 * @apiParam {string}   orderBranchs 分批次定价
 */

router.post('/releaseSellProductInsteadCustomer', releaseSellProductInsteadCustomer)

/**
 * @apiGroup goods
 * @apiName buyInsteadCustomer
 * @api {post} /goods/buyInsteadCustomer 代客购买
 * @apiParam {string} buyerAccount  客户账号
 * @apiParam {string} addressId  收货地址id
 * @apiParam {string} realPrice 商品单价
 * @apiParam {string} realPriceUnit 商品单位
 * @apiParam {Number} realAmount 采购量
 * @apiParam {string} realPriceUnit 采购单位
 * @apiParam {string} realPrice 采购总价
 * @apiParam {Number} buyerMessage 买家留言
 * @apiParam {string} totalPrice 商品单位
 * @apiParam {string} totalPriceUnit 商品总价单位
 */

router.post('/buyInsteadCustomer',buyInsteadCustomer)

/**
 * @apiGroup goods
 * @apiName addDeliveryAddr
 * @api {post} /goods/addDeliveryAddr 增加地址
 * @apiParam {string} address  地址
 * @apiParam {string} city  城市
 * @apiParam {string} contactName 联系人
 * @apiParam {string} contactPhone 联系电话
 * @apiParam {string} counties 区
 * @apiParam {string} province 省
 */
router.post('/addDeliveryAddr',addDeliveryAddr)

/**
 * @apiGroup goods
 * @apiName getDefaultAddress
 * @api {get} /goods/getDefaultAddress 获取该用户默认地址
 * @apiParam {string} mobile  客户电话
 */
router.get('/getDefaultAddress',getDefaultAddress)

/**
 * @apiGroup goods
 * @apiName getDeliveryAddrs
 * @api {get} /goods/getDeliveryAddrs 获取该用户地址列表
 * @apiParam {string} mobile  客户电话
 * @apiParam {string} pageNum  页码
 * @apiParam {string} pageSize 一页几条
 */
router.get('/getDeliveryAddrs',getDeliveryAddrs)

module.exports = router;
