/*
* 订单模块controller
* */
const API_URL = require('../config/ckApi');
const httpUtils = require('../utils/httpUtils');
var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UTTVNVE16TXpNME5qTTZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQxNzU0NzMsImp0aSI6IjBkZWFiNWJiLWNlZDgtNDFjNi1iMTcwLWM5MTVkNjM4NjMwNyIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTM5MTMzMzM0NjMifQ.AC7KXujtwHPGkLrbyTaDnAu0t98p8n2By5X2l4ZxjUAbcap_yvz58N47MlCCDPQxd3LBrfR-NbWEoth-4nTxvh0dJ4MRPpeVZS6bDVnzxbKmfrARRe_QyxN1IMJdA_pEDnc9E4jZaSTNR8_NkX3fKle-69xee2Cvnl54OIwu97HlLJRJ7UpKdVhm5Hzey_Jh4SCQ1sZShrTFtBR6J4dDh1_z4oDWfkd-kpiUPq8cCOF-8PeB2M6HSi1M5KGCBpSugsY_8RNZjndvAbSjw-rnipQBLj23MXO_ekien2GoYVJXXIt5bw2C9eXiozYcmzUrIT1G9Aw4mapEtxqjgqBhHQ'
var errResponse = {code: 500, msg: '缺少必要参数'};

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
    * @apiParam {String} type 订单类型 'awaitPreviewCompany':待审核企业.
    * */
    async getOrderList(req, res, next) {
        let {pageSize, pageNum, type} = req.query;
        if (!pageSize || !pageNum || !type) {
            res.send(errResponse);
            return false
        }
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
                break;
            case 'awaitPreviewCompany':
                url = API_URL.company.getWaitAuditCompany;
                break;
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
    * @apiParam {Number} id 订单或企业id.
    * @apiParam {String} type 类型：order订单，company企业.
    * */
    async getOrderDetail(req, res, next) {
        let {id, type} = req.query;
        if (!id || !type) {
            res.send(errResponse);
            return false
        }
        let url;
        let params = {};
        switch (type) {
            case 'order':
                url = API_URL.order.orderDetail;
                params.orderId = id;
                break;
            case 'company':
                url = API_URL.company.getWaitAuditCompanyInfo;
                params.memberAccount = id;
                break;
        }
        try {
            const result = await httpUtils.httpGet(API_URL.order.orderDetail, {orderId: orderId}, token);
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
    * @apiParam {String} type 订单类型 company 企业
    * */
    async checkOrder(req, res, next) {
        let {checkResult, id, type} = req.body;
        if (!checkResult || !id || !type) {
            res.send(errResponse)
            return false
        }
        let url;
        let form = type == 'company' ? {
            auditResult: checkResult,
            memberAccount: id
        } : {
            checkResult: checkResult,
            id: id
        };
        switch (type) {
            case 'buyRequirementOrder':
                url = API_URL.order.auditBuyRequirement;
                break;
            case 'sellingProduct':
                url = API_URL.order.auditSellProduct;
                break;
            case 'company':
                url = API_URL.company.auditCompany;
                break;
        }
        const result = await httpUtils.httpPost(url, form, token);
        res.send(result)
    }
}

module.exports = new Order();
