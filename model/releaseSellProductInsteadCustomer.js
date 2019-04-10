// // var Validator = require('jsonschema').Validator;
// // var v = new Validator();
// // // Person
// // var schema = {
// //     "id": "/fbiSellProduct",
// //     "type": "object",
// //     "properties": {
// //         "businessAccount": {"type": "string"},
// //         "companyName": {"type": "string"},
// //         "productPics": {"type": "array"},
// //         "productName": {"type": "string"},
// //         "supplyNum": {"type": "integer"},
// //         "supplyUnit": {"type": "string"},
// //         "productClass": {"type": "integer"},
// //         "productPrice": {"type": "number"},
// //         "productPriceUnit": {"type": "string"},
// //         "isSpotGoods": {"type": "integer"},
// //         "contactMan": {"type": "string"},
// //         "contactPhone": {"type": "string"},
// //         "predictDeliveryTime": {"type": "integer"},
// //         "originPlacePrince": {"type": "string"},
// //         "originPlaceCity": {"type": "string"},
// //         "originPlaceAddr": {"type": "string"},
// //         "minBranch": {"type": "integer"},
// //         "minBranchUnit": {"type": "string"},
// //         "orderBranchs": {"type": "array"},
// //     },
// //     "required": ["businessAccount", "companyName" , "productPics", "productName", "supplyNum", "supplyUnit", "productClass", "productPrice", "productPriceUnit", "isSpotGoods", "contactMan", "contactPhone", "predictDeliveryTime"]
// // };
// //
// // v.addSchema(schema, '/fbiSellProduct');
// // export default function (data) {
// //     return {
// //         error:v.validate(data, schema),
// //         status:v.validate(data, schema).valid
// //     }
// // }
// //
//
//
// /*
// * 代客发布订单
// * */
// const SchemaObject = require('node-schema-object');
//
// let signUpModel = new SchemaObject({
//     businessAccount: String,//业务员账号
//     companyName: String,//公司名称
//     productPics: String,//商品名称
//     supplyNum: Number,//供货量
//     supplyUnit: String,//供货单位
//     productClass: String,//商品分类
//     productPrice: Number,//商品单价
//     productPriceUnit: String,//商品单位
//     isSpotGoods: Number,//是否现货
//     contactMan: String,//联系人
//     contactPhone: String,//联系电话
//     predictDeliveryTime: Number,//预计交货时间
//     //
//     originPlacePrince: String,//产地省
//     originPlaceCity: String,//产地市
//     originPlaceAddr: String,//详细地址
//     minBranch: String,//最少起批量
//     minBranchUnit: String,//最小起批量单位
//     orderBranchs: Array,//分批次定价
//     // "isSpotGoods": {"type": "integer"},
// //         "contactMan": {"type": "string"},
// //         "contactPhone": {"type": "string"},
// //         "predictDeliveryTime": {"type": "integer"},
// //         "originPlacePrince": {"type": "string"},
// //         "originPlaceCity": {"type": "string"},
// //         "originPlaceAddr": {"type": "string"},
// //         "minBranch": {"type": "integer"},
// //         "minBranchUnit": {"type": "string"},
// //         "orderBranchs": {"type": "array"},
//     deliveryAddr: String,//交货详细地址
//     deliveryCity: String,//交货地址市
//     deliveryDeadline: String,//交货截止时间
//     deliveryDistrict: String,//交货地址区
//     deliveryProvince: String,//交货地址省
//     expectPrice: Number,//期望单价
//     expectPriceUnit: String,//期望单价单位
//     generalizeAccount: String,//居间人账号
//     memberAccount: String,//会员账号
//     predictAmount: Number,//预计供货量
//     productClass: Number,//商品分类
//     productName: String,//商品名称
//     productStandard: String,//产品标准
//     productionPlace: [
//         {
//             city: String,//产地市
//             id: Number,
//             province: String,//产地省
//             regionCode: String,//产地省编码
//             requirementNumber: String,//买货需求单编号
//         }
//     ],
//     regionCode: String,//交货地区编码
// }, {
//     methods: {
//         //验证必填项
//         validatorRequired: function () {
//             if (!this.productName || !this.productClass || !this.buyAmount || !this.buyAmountUnit || !this.memberAccount) {
//                 return false
//             } else {
//                 return true
//             }
//         }
//     }
// })
//
// module.exports = signUpModel;
