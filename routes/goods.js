var express = require('express');
var router = express.Router();
import {goodList,goodsDetail} from '../controller/goods-controller'

/**
 * @api {get} /sendMessage 获取登陆验证码
 * @apiName sendMessage
 * @apiGroup login
 *
 * @apiParam {Number} phone 手机号.
 */
router.get('/goodList', goodList);
router.get('/goodDetail', goodsDetail);

module.exports = router;
