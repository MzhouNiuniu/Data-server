/*
* 个人资料模型
* */
const SchemaObject = require('node-schema-object');

let personalInformation = new SchemaObject({
    businessAccount: String,//关联的业务员
    generalizerAccount: String,//关联的居间人
    isBusinessUser: Number,//是否是业务员，0否1是
    isGeneralizeUser: Number,//是否是居间人，0否1是
    isPlatUser: Number,//是否是平台用户，0否1是
    mobile: String,//账号
    nickName: String,//微信昵称
    personIcon: String,//个人头像
    unionId: String,//微信unionid
},{
    methods:{
        //验证必填项
        validatorRequired:function(){
            if(!this.businessAccount){
                return false
            }else{
                return true
            }
        }
    }
})

module.exports = personalInformation
