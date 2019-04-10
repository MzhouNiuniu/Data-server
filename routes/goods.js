var express = require('express');
var router = express.Router();
import {goodList, goodsDetail,releaseSellProductInsteadCustomer,buyInsteadCustomer} from '../controller/goods-controller'


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
 * @apiName goodsDetail
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



router.post('/buyInsteadCustomer',buyInsteadCustomer)
module.exports = router;
