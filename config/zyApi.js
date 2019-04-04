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
    }
}
