var express = require('express');
var router = express.Router();
import {goodList, goodsDetail} from '../controller/goods-controller'


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
 * @api {get} /goodsDetail 优质好货详情
 * @apiParam {string} goodsId 订单id.
 */
router.get('/goodsDetail', goodsDetail);

module.exports = router;
