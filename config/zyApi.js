import baseURL from './baseURL'
export default {
    user:{
        sendMessage: `${baseURL.baseUrl}/generalize/sendMessage`,//获取短信
        loginByCode:`${baseURL.baseUrl}/generalize/loginByCode`,//手机号验证码登录
    }

}