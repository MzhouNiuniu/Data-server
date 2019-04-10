/*
* 个人中心
* */
const API_URL = require('../config/ckApi');

const httpUtils = require('../utils/httpUtils');
var errResponse = {code: 500, msg: '缺少必要参数'};

class UserCenter {
    constructor() {
    }

    /*
    * 获取我的业绩，我的客户列表
    * @apiParam {String} type 类型:performance我的业绩，customer我的顾客
    * @apiParam {Number} pageSize 每页显示条数
    * @apiParam {Number} pageNum 页码
    * @apiParam {String} date 日期
    * */
    async getCustomOrPerformanceList(req, res, next) {
        let {type} = req.query;
        if (!type) {
            res.send(errResponse);
            return false
        }
        let url, params;
        switch (type) {
            case 'performance':
                let {date} = req.query;
                if (!date) {
                    res.send(errResponse);
                    return false
                }
                params = {date: date};
                url = API_URL.userCenter.getPerformance;
                break;
            case 'customer':
                let {pageNum, pageSize} = req.query;
                if (!pageSize || !pageNum) {
                    res.send(errResponse);
                    return false
                }
                params = {pageNum: pageNum, pageSize: pageSize};
                url = API_URL.userCenter.getMyCustomer;
                break;
        }
        try {
            const result = await httpUtils.httpGet(url, params, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

    /*
    * 获取客户详情
    * @apiParam {String} type 类型:customerInfoBuyList客户详情（求购列表），customerInfoSellList客户详情（出售列表）
    * @apiParam {Number} pageSize 每页显示条数
    * @apiParam {Number} pageNum 页码
    * @apiParam {String} memberAccount 客户账户
    * */
    async getCustomerList(req, res, next) {
        let {memberAccount, pageNum, pageSize, type} = req.query;
        if (!memberAccount || !pageNum || !pageSize || !type) {
            res.send(errResponse);
            return false
        }
        let url;
        switch (type) {
            case 'customerInfoBuyList':
                url = API_URL.userCenter.getCustomerInfoBuyList;
                break;
            case 'customerInfoSellList':
                url = API_URL.userCenter.getCustomerInfoSellList;
                break;
        }
        try {
            const result = await httpUtils.httpGet(url, {
                memberAccount: memberAccount,
                pageNum: pageNum,
                pageSize: pageSize
            }, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

    /*
    * 企业认证信息
    * @apiParam {String} memberAccount 客户账户
    * */
    async getCompanyInfo(req, res, next) {
        let {memberAccount} = req.query;
        if (!memberAccount) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpGet(API_URL.userCenter.getCompanyByMemberAccount, {memberAccount: memberAccount}, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

    /*
    * 添加客户
    * @apiParam {String} mobile 手机号
    * */
    async addCustomer(req, res, next) {
        console.log(req.body)
        let {mobile, code} = req.body;
        if (!mobile || !code) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpPut(API_URL.userCenter.addCustomer, {mobile, code}, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }
    /*
  * 带客注册
  * @apiParam {String} mobile 手机号
  * @apiParam {String} code 验证码
  * */
    async registerInsteadCustomer(req, res, next) {
        let {mobile} = req.body;
        if (!mobile) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpPost(API_URL.userCenter.registerInsteadCustomer, req.body, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new UserCenter();
