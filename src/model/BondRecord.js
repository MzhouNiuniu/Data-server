var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//债券发型信息
var BondRecordSchema = new Schema({
    abbreviation: String,//简称
    makeTime: String,//成交时间
    makeMoney: String,//成交金额
    remainingTime: String,//剩余时间
    makeRate: String,//成交利率
    BP: String,//偏离
    aboutFile: Array,//相关文件
    other: Array,//相关文件
    code:String,//债券代码
    abbreviation:String,//债券简称
});
BondRecordSchema.plugin(mongoosePaginate);
var BondRecord = mongoose.model("BondRecord", BondRecordSchema);


module.exports = BondRecord;
