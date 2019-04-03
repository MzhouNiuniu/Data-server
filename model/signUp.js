/*
* 代客报名
* */
const SchemaObject = require('node-schema-object');

let signUpModel = new SchemaObject({
    contactMan: String,//联系人
    contactPhone: String,//联系电话
    isSpot: Number,//是否现货0否1是
    productAddr: String,//产地详细地址
    productCity: String,//产地市
    productDescription: String,//产品描述
    productPrice: Number,//商品单价
    productPriceUnit: String,//商品单价单位
    productProvince: String,//产地省
    supplierAccount: String,//供应商账号
    supplyQuantity: Number,//供货量
    supplyQuantityUnit: String,//供货量单位
}, {
    methods: {
        //验证必填项
        validatorRequired: function () {
            if (!this.contactMan || !this.contactPhone || !this.supplyQuantity || !this.supplyQuantityUnit || !this.isSpot || !this.productPrice || !this.supplierAccount) {
                return false
            } else {
                return true
            }
        }
    }
})

module.exports = signUpModel;
