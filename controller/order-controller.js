/*
* 订单模块controller
* */
const API_URL = require('../config/ckApi');
const httpUtils = require('../utils/httpUtils');
var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UTXlNakkwTkRRek1EYzZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQyNzA1MDMsImp0aSI6ImYyM2E5OTRlLWQwODctNGRkZC1iOWRhLTY4ZDljODUzYTM1MiIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTMyMjI0NDQzMDcifQ.C4x0PZrg4alVJOX8FaucyfPC8SowjsyRDa1ikqApiy3Alk3ZRvuFerImsGyviMC2Gq5_xHmVDLcuf7Gc1G5glhZ13G3nq39mUCL0QVTZ2Xbue7Qml9HmH7DVaIY3WEFaZprouA022N5tz5fECB45vn3T5ejPs1Btd7F_eNmigR0AqST5MIdskefbd--XYrDR3ZLCpW7fMNbOrwldYdY0BHVr2KCXK7mrxek7MCt67KfodLGPql0QRMsY2rC-oZCn9wNkbCfzmMqsaYTFrOqS7y_xvdk4f4VSYjARF4S_qStVnk4ww7-M19PlDj45Gr7c9aJTGQXuP1phi0Em9N2HmQ'

class Order {
    constructor() {
    }

    /*
    * 获取订单列表
    * @apiParam {Number} pageSize 每页显示数量.
    * @apiParam {Number} pageNum 页数.
    * @apiParam {String} type 订单类型 'awaitPreviewOrder':待审核订单.
    * @apiParam {String} type 订单类型 'awaitDealOrder':待处理订单.
    * @apiParam {String} type 订单类型 'endingOrder':已结束订单.
    * */
    async getOrderList(req, res, next) {
        let {pageSize, pageNum, type} = req.query;
        let url;
        switch (type) {
            case 'awaitPreviewOrder':
                url = API_URL.order.getWaitAuditOrder;
                break;
            case 'awaitDealOrder':
                url = API_URL.order.getWaitDoneOrder;
                break;
            case 'endingOrder':
                url = API_URL.order.getFinishedOrder;
                break
        }
        try {
            const result = await httpUtils.httpGet(url, {pageNum: pageNum, pageSize: pageSize}, token);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

    /*
    * 获取订单详情
    * @apiParam {Number} orderId 订单id.
    * */
    async getOrderDetail(req, res, next) {
        let {orderId} = req.query;
        if (!orderId) {
            res.send({code: 500, msg: '缺少必要参数'});
            return false
        }
        try {
            const result = await httpUtils.httpGet(API_URL.order.orderDetail, {orderId: orderId}, req);
            res.send(result)
        }catch (e) {
            console.log(e)
        }
    }

    /*
    * 审核订单
    * @apiParam {Number} checkResult 审核结果 1通过0不通过.
    * @apiParam {Number} id 订单id
    * @apiParam {String} type 订单类型 buyRequirementOrder 求购订单
    * @apiParam {String} type 订单类型 sellingProduct 出售商品
    * */
    async checkOrder(req, res, next) {
        let {checkResult, id, type} = req.body;
        if (!checkResult || !id || !type) {
            res.send({code: 500, msg: '缺少必要参数'})
            return false
        }
        let url;
        switch (type) {
            case 'buyRequirementOrder':
                url = API_URL.order.auditBuyRequirement;
                break;
            case 'sellingProduct':
                url = API_URL.order.auditSellProduct;
                break;
        }
        const result = await httpUtils.httpPost(url, {checkResult: checkResult, id: id}, token);
        res.send(result)
    }
}

module.exports = new Order()
