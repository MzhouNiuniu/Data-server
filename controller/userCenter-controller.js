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
        let url,params;
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
}

module.exports = new UserCenter();
