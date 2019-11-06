var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//财务收入
var FinancialDataSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    DataId: {
        type: Schema.Types.ObjectId,
        index: true
    },
    year: String,//年限
    totalAsset: Number,//总资产
    netAsset: Number,//净资产
    liabilities: Number,//负债率
    mainBusiness: Number,//主营业务
    business: Number,//营业务
    netProfit: Number,//净利润
    totalProfit: Number,//利润总额
});
FinancialDataSchema.plugin(mongoosePaginate);
var FinancialData = mongoose.model("FinancialData", FinancialDataSchema);


module.exports = FinancialData;
