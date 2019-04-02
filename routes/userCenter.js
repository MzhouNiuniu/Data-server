var express = require('express');
var router = express.Router();
const userCenterController = require('../controller/userCenter-controller');
/**
 * @api {get} /userCenter/getCustomOrPerformanceList 获取我的顾客和我的业绩列表
 * @apiName getCustomOrPerformanceList
 * @apiGroup userCenter
 *
 * @apiParam {String} type 类型:performance我的业绩，customer我的顾客.
 * @apiParam {Number} pageSize 每页显示数量（顾客列表用到）.
 * @apiParam {Number} pageNum 页码（顾客列表用到）.
 * @apiParam {String} date 日期（业绩列表用到）.
 */
router.get('/getCustomOrPerformanceList', userCenterController.getCustomOrPerformanceList);
module.exports = router;
