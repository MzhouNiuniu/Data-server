var express = require('express');
var router = express.Router();
const homeController = require('../controller/home-controller')
/**
 * @api {get} /home/getHomeData 获取首页数据
 * @apiName getHomeData
 * @apiGroup home
 *
 * @apiParam {Number} goodsNum 优质好货数量
 * @apiParam {Number} orderNum 订单推荐数量
 */
router.get('/getHomeData',homeController.getHomeData);
module.exports = router;
