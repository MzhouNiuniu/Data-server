/*
* 订单模块controller
* */
const API_URL = require('../config/ckApi');
const httpUtils = require('../utils/httpUtils');
const signUpModel = require('../model/signUp');
const releaseRequirementInsteadCustomerModel = require('../model/releaseRequirementInsteadCustomer');
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
    * @apiParam {String} type 订单类型 'order':求购订单.
    * @apiParam {Number} productClass 产品分类（type为order时用到）.
    * @apiParam {String} productionArea 产品地区编码（type为order时用到）.
    * @apiParam {String} searchContent 搜索条件（type为order时用到）.
    * */
    async getOrderList(req, res, next) {
        let {pageSize, pageNum, type} = req.query;
        if (!pageSize || !pageNum || !type) {
            res.send(errResponse);
            return false
        }
        let url, params;
        switch (type) {
            case 'awaitPreviewOrder':
                params = {pageNum: pageNum, pageSize: pageSize};
                url = API_URL.order.getWaitAuditOrder;
                break;
            case 'awaitDealOrder':
                params = {pageNum: pageNum, pageSize: pageSize};
                url = API_URL.order.getWaitDoneOrder;
                break;
            case 'endingOrder':
                params = {pageNum: pageNum, pageSize: pageSize};
                url = API_URL.order.getFinishedOrder;
                break;
            case 'awaitPreviewCompany':
                params = {pageNum: pageNum, pageSize: pageSize};
                url = API_URL.company.getWaitAuditCompany;
                break;
            case 'order':
                let {productClass, productionArea, searchContent} = req.query;
                params = {
                    pageNum: pageNum,
                    pageSize: pageSize,
                    productClass: productClass,
                    productionArea: productionArea,
                    searchContent: searchContent
                };
                url = API_URL.order.orderList;
                break;
        }
        try {
            const result = await httpUtils[type == 'order' ? 'httpPostJson' : 'httpGet'](url, params, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

    /*
    * 获取订单详情
    * @apiParam {Number} id 订单或企业id.
    * @apiParam {String} type 类型：order求购订单，goods出售订单，company企业，childOrder求购子订单，sellingOrder出售交易中订单.
    * @apiParam {String} roleType 身份信息（采购商：buyer，供应商：supplier）
    * */
    async getOrderDetail(req, res, next) {
        let {id, type, roleType} = req.query;
        if (!id || !type) {
            res.send(errResponse);
            return false
        }
        let url, params;
        switch (type) {
            case 'order':
                url = API_URL.order.orderDetail;
                params = {orderId: id};
                break;
            case 'goods':
                url = API_URL.order.goodsDetail;
                params = {goodsId: id};
                break;
            case 'company':
                url = API_URL.company.getWaitAuditCompanyInfo;
                params = {memberAccount: id};
                break;
            case 'childOrder':
                url = API_URL.order.getSubBuyOrderInfo;
                params = {orderId: id, roleType: roleType};
                break;
            case 'sellingOrder':
                url = API_URL.order.getSellOrderTrading;
                params = {id: id, roleType: roleType};
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
            res.send(errResponse);
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
        const result = await httpUtils.httpPost(url, form, req);
        res.send(result)
    }

    /*
    * 代客报名
    * @apiParam {String} contactMan 联系人（必填）
    * @apiParam {String} contactPhone 联系电话（必填）
    * @apiParam {Number} isSpot 是否现货0否1是（必填）
    * @apiParam {String} productAddr 产地详细地址
    * @apiParam {String} productCity 产地市
    * @apiParam {String} productDescription 产品描述
    * @apiParam {Number} productPrice 商品单价（必填）
    * @apiParam {String} productPriceUnit 商品单价单位
    * @apiParam {String} productProvince 产地省
    * @apiParam {String} supplierAccount 供应商账号（必填）
    * @apiParam {Number} supplyQuantity 供货量（必填）
    * @apiParam {String} supplyQuantityUnit 供货量单位（必填）
    * */
    async applyInsteadCustomer(req, res, next) {
        let schema = new signUpModel(req.body)
        if (!schema.validatorRequired()) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpPostJson(API_URL.order.applyInsteadCustomer, req.body, req);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }

    /*
    * 代客发布订单
    * */
    async releaseRequirementInsteadCustomer(req, res, next) {
        let schema = new releaseRequirementInsteadCustomerModel(req.body);
        if (!schema.validatorRequired()) {
            res.send(errResponse);
            return false
        }
        try {
            const result = await httpUtils.httpPostJson(API_URL.order.releaseRequirementInsteadCustomer, req.body, req);
            res.send(result)
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new Order();
