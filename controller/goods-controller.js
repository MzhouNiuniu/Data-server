/*
* 登陆模块controller
* */
import API from '../config/zyApi'
const {goodsList,goodsDetail,releaseSellProductInsteadCustomer,buyInsteadCustomer,addDeliveryAddr,getDefaultAddress,getDeliveryAddrs} = API.goods
const httpUtils = require('../utils/httpUtils');
var errResponse = {code: 500, msg: '缺少必要参数'};
import customer from '../model/releaseSellProductInsteadCustomer'
class goods {
    constructor() {
    }

    /**
     * @apiName goodList
     *
     * @apiParam {string} cityCode 城市code.
     * @apiParam {string} content 模糊关键字查询
     * @apiParam {Number} isSpotGoods 分类
     * @apiParam {Number} pageNum 当前页面
     * @apiParam {Number} pageSize 页面尺寸
     * @apiParam {Number} type 类型
     */
    async goodList(req, res, next) {
        let {pageNum,pageSize,cityCode,content,isSpotGoods,type} = req.query;
        if (!pageNum||!pageSize||!cityCode||!isSpotGoods||!type) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpPostJson(goodsList,JSON.stringify(req.query), req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }
    /**
     * @apiName goodList
     *
     * @apiParam {string} goodsId 订单id.

     */
    async goodsDetail(req, res, next) {
        let {goodsId} = req.query;
        if (!goodsId) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpGet(goodsDetail,goodsId, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }


    async releaseSellProductInsteadCustomer(req, res, next) {
        console.log(req.body)
        try {
            const result = await httpUtils.httpPostJson(releaseSellProductInsteadCustomer,JSON.stringify(req.body), req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
        // test()
        //
        // res.send(test())
        // v.validate(req.query, schema)
        // const  verify=customer(req)
        // // console.log(verify.error)
        // if(verify.status){
        //     res.send('1231')
        // }
        // else{
        //     console.log(verify.error)
        //     res.send('312')
        // }


    }
    async buyInsteadCustomer(req, res, next) {
        try {
            const result = await httpUtils.httpPostJson(buyInsteadCustomer,JSON.stringify(req.body), req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }

    }

    async addDeliveryAddr(req, res, next) {
        try {
            const result = await httpUtils.httpPostJson(addDeliveryAddr,JSON.stringify(req.query), req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }

    }

    async getDefaultAddress(req, res, next) {
        let {mobile} = req.query;
        if (!mobile) {
            res.send(errResponse);
            return false
        }
        console.log({mobile})
        try {
            const result = await httpUtils.httpGet(getDefaultAddress,{mobile}, req);
            console.log(result)
            res.send(result)
        } catch (e) {
            console.log(e)
        }

    }

    async getDeliveryAddrs(req, res, next) {
        let {mobile, pageNum,pageSize} = req.query;
        if (!mobile) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpGet(getDeliveryAddrs,{mobile, pageNum,pageSize}, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }

    }
}

module.exports = new goods();
