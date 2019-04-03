/*
* 代客发布订单
* */
const SchemaObject = require('node-schema-object');

let signUpModel = new SchemaObject({
    businessAccount: String,//业务员账号
    buyAmount: Number,//购买数量
    buyAmountUnit: String,//购买数量单位
    buyDeadline: String,//采购截止时间
    companyName: String,//公司名称
    contactMan: String,//联系人
    contactPhone: String,//联系人电话
    deliveryAddr: String,//交货详细地址
    deliveryCity: String,//交货地址市
    deliveryDeadline: String,//交货截止时间
    deliveryDistrict: String,//交货地址区
    deliveryProvince: String,//交货地址省
    expectPrice: Number,//期望单价
    expectPriceUnit: String,//期望单价单位
    generalizeAccount: String,//居间人账号
    memberAccount: String,//会员账号
    predictAmount: Number,//预计供货量
    productClass: Number,//商品分类
    productName: String,//商品名称
    productStandard: String,//产品标准
    productionPlace: [
        {
            city: String,//产地市
            id: Number,
            province: String,//产地省
            regionCode: String,//产地省编码
            requirementNumber: String,//买货需求单编号
        }
    ],
    regionCode: String,//交货地区编码
}, {
    methods: {
        //验证必填项
        validatorRequired: function () {
            if (!this.productName || !this.productClass || !this.buyAmount || !this.buyAmountUnit || !this.memberAccount) {
                return false
            } else {
                return true
            }
        }
    }
})

module.exports = signUpModel;
