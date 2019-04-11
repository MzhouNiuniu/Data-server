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

/**
 * @api {get} /userCenter/getCustomerList 获取客户详情
 * @apiName getCustomerList
 * @apiGroup userCenter
 *
 * @apiParam {String} type 类型:customerInfoBuyList客户详情（求购列表），customerInfoSellList客户详情（出售列表）.
 * @apiParam {Number} pageSize 每页显示数量.
 * @apiParam {Number} pageNum 页码.
 * @apiParam {String} memberAccount 客户账户.
 */
router.get('/getCustomerList', userCenterController.getCustomerList);

/**
 * @api {get} /userCenter/getCompanyInfo 企业认证信息
 * @apiName getCompanyInfo
 * @apiGroup userCenter
 *
 * @apiParam {String} memberAccount 客户账户.
 */
router.get('/getCompanyInfo', userCenterController.getCompanyInfo);

/**
 * @api {post} /userCenter/addCustomer 添加客户
 * @apiName addCustomer
 * @apiGroup userCenter
 *
 * @apiParam {String} mobile 手机号.
 * @apiParam {String} code 验证码.
 */
router.post('/addCustomer', userCenterController.addCustomer);

/**
 * @api {post} /userCenter/registerInsteadCustomer 代客注册
 * @apiName registerInsteadCustomer
 * @apiGroup userCenter
 *
 * @apiParam {String} mobile 手机号.
 * @apiParam {String} code 手机号.
 */
router.post('/registerInsteadCustomer',userCenterController.registerInsteadCustomer)



/**
 * @api {post} /userCenter/updateUserInfo 修改个人资料
 * @apiName updateUserInfo
 * @apiGroup userCenter
 *
 * @apiParam {String} personIcon 头像.
 * @apiParam {String} nickname 昵称.
 *
 */
router.post('/updateUserInfo',userCenterController.updateUserInfo)



module.exports = router;
