/*
* 首页
* */
const API_URL = require('../config/ckApi');
const httpUtils = require('../utils/httpUtils');
var errResponse = {code: 500, msg: '缺少必要参数'};

class Home {
    constructor() {
    }

    /*
    * 获取首页数据
    * @apiParam {Number} goodsNum 优质好货数量
    * @apiParam {Number} orderNum 订单推荐数量
    * */
    async getHomeData(req, res, next) {
        let {goodsNum, orderNum} = req.query;
        if (!goodsNum || !orderNum) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpGet(API_URL.home.home, {goodsNum: goodsNum, orderNum: orderNum}, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new Home()
