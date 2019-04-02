/*
* 登陆模块controller
* */
import API from '../config/zyApi'
const {sendMessage,loginByCode} =API.login
const API_URL = require('../config/zyApi');
const httpUtils = require('../utils/httpUtils');
var errResponse = {code: 500, msg: '缺少必要参数'};
class Login {
    constructor() {
    }
    /*
    * 获取登陆验证码
    * @apiParam {Number} phone 手机号.

    * */
    async sendMessage(req, res, next) {
        let {phone} = req.query;
        if (!phone) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpGet(sendMessage,{phone}, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

    /*
    * 验证码登陆
    * @apiParam {Number} code 手机验证码.
    * @apiParam {Number} phone 手机号.
    * */
    async loginByCode(req, res, next) {
        let {code , phone} = req.query;
        if (!code || !phone) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpPost(loginByCode,{code,mobile:phone}, req);
            console.log(result)
            res.send(result)
        }catch (e) {
            console.log(e)
        }
    }

}

module.exports = new Login();
