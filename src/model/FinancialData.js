var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//基础数据
var FinancialDataSchema = new Schema({
    year: String,//年限
    totalAsset: String,//总资产
    netAsset: String,//净资产
    liabilities: String,//负债率
    mainBusiness: String,//主营业务
    business: String,//营业务
    netProfit: String,//净利润
    totalProfit: String,//利润总额
});
FinancialDataSchema.plugin(mongoosePaginate);
var FinancialData = mongoose.model("FinancialData", FinancialDataSchema);


module.exports = FinancialData;
