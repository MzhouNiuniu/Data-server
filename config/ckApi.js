const baseURL = require('./baseUrl')
module.exports = {
    //ck
    home: {
        home: `${baseURL.baseUrl}/generalize/index`,//首页数据
    },
    selectApi: {
        getCityData: `${baseURL.baseUrl}/generalize/selectBox/getCityData`,//获取城市
        getCustoms: `${baseURL.baseUrl}/generalize/selectBox/getCustoms`,//获取客户列表（不带企业名称）
        getCustomsAndName: `${baseURL.baseUrl}/generalize/selectBox/getCustomsAndName`,//获取客户列表（带企业名称）
        provinceList: `${baseURL.baseUrl}/generalize/selectBox/provinceList`,//获取省份列表
    },
    order: {
        getBuyRequirementInfo: `${baseURL.baseUrl}/generalize/order/getBuyRequirementInfo`,//获取求购待审核订单详情
        getSellProductInfo: `${baseURL.baseUrl}/generalize/order/getSellProductInfo`,//获取出售待审核商品信息
        orderDetail: `${baseURL.baseUrl}/generalize/order/orderDetail`,//订单详情
        goodsDetail: `${baseURL.baseUrl}/generalize/order/goodsDetail`,//商品详情
        getSellOrderTrading: `${baseURL.baseUrl}/generalize/order/getSellOrderTrading`,//出售交易中订单信息
        getSubBuyOrderInfo: `${baseURL.baseUrl}/generalize/order/getSubBuyOrderInfo`,//求购子订单信息
        orderList: `${baseURL.baseUrl}/generalize/order/orderList`,//订单列表
        getWaitAuditOrder: `${baseURL.baseUrl}/generalize/order/getWaitAuditOrder`,//待审核订单列表
        getFinishedOrder: `${baseURL.baseUrl}/generalize/order/getFinishedOrder`,//已结束订单列表
        getWaitDoneOrder: `${baseURL.baseUrl}/generalize/order/getWaitDoneOrder`,//待处理订单列表
        auditBuyRequirement: `${baseURL.baseUrl}/generalize/order/auditBuyRequirement`,//审核求购订单
        auditSellProduct: `${baseURL.baseUrl}/generalize/order/auditSellProduct`,//审核出售商品
        applyInsteadCustomer: `${baseURL.baseUrl}/generalize/order/applyInsteadCustomer`,//代客报名
        releaseRequirementInsteadCustomer: `${baseURL.baseUrl}/generalize/order/releaseRequirementInsteadCustomer`,//代客发布订单
    },
    company: {
        getWaitAuditCompany: `${baseURL.baseUrl}/generalize/company/getWaitAuditCompany`,//待审核企业列表
        getWaitAuditCompanyInfo: `${baseURL.baseUrl}/generalize/company/getWaitAuditCompanyInfo`,//待审核企业详情
        auditCompany: `${baseURL.baseUrl}/generalize/company/auditCompany`,//审核企业
    },
    userCenter: {
        getMyCustomer: `${baseURL.baseUrl}/generalize/member/getMyCustomer`,//我的客户
        getPerformance: `${baseURL.baseUrl}/generalize/member/getPerformance`,//我的业绩
        getCustomerInfoBuyList: `${baseURL.baseUrl}/generalize/member/getCustomerInfoBuyList`,//客户详情（求购列表）
        getCustomerInfoSellList: `${baseURL.baseUrl}/generalize/member/getCustomerInfoSellList`,//客户详情（出售列表）
        getCompanyByMemberAccount: `${baseURL.baseUrl}/generalize/member/getCompanyByMemberAccount`,//企业认证信息
        addCustomer: `${baseURL.baseUrl}/generalize/member/addCustomer`,//添加客户
    }
}
