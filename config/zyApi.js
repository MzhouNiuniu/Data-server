import baseURL from './baseUrl'
export default {
    login:{
        sendMessage: `${baseURL.baseUrl}/generalize/sendMessage`,//获取短信
        loginByCode:`${baseURL.baseUrl}/generalize/loginByCode`,//手机号验证码登录
        getMemberInfo:`${baseURL.baseUrl}/generalize/getMemberInfo`,//获取用户信息
    },
    goods:{
        goodsList:`${baseURL.baseUrl}/generalize/order/goodsList`,//货源列表
        goodsDetail:`${baseURL.baseUrl}/generalize/order/goodsDetail`,//货源详情
        releaseSellProductInsteadCustomer:`${baseURL.baseUrl}/generalize/order/releaseSellProductInsteadCustomer`,//货源详情
        buyInsteadCustomer:`${baseURL.baseUrl}/generalize/order/buyInsteadCustomer`,//货源详情
        addDeliveryAddr:`${baseURL.baseUrl}/generalize/address/addDeliveryAddr`,//新增地址
        getDefaultAddress:`${baseURL.baseUrl}/generalize/address/getDefaultAddress`,//获取默认地址
        getDeliveryAddrs:`${baseURL.baseUrl}/generalize/address/getDeliveryAddrs`,//获取地址列表
    },
}
