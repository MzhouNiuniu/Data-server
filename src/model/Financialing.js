

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//财务收入
var FinancialingSchema = new Schema({
    year:String,//年份
    //此处由于前端表单不好判断 为方便前端处理列多个字段管理
    record:[
        {
            abbreviation:String,//简称
            makeTime:String,//成交时间
            makeMoney:String,//成交金额
            remainingTime:String,//剩余时间
            makeRate:String,//成交利率
            BP:String,//偏离
            aboutFile:String,//相关文件
            other:String,//相关文件
        }
    ],
    DataId:String,
    province:String,
    code:String,
    abbreviation:String,//简称
    issuer:String,//发行人
    fullName:String,//发行人
    type:String,
    scale:String,//发行规模
    issueWay:String,//发行方式
    startTime:String,//开始时间
    endTime:String,//结束时间
    repaymentWay:String,//还本方式
    interestWay:String,//付息方式
    deadlineBond:String,//债券期限
    payValue:String,//票面利率
    rateBond:String,//债券评级
    mainType:String,//主体评级
    principalUnderwriter:String,//主承销商
    addEnhancementWay:String,//增信措施
    aboutFile:String,//相关文件
    specification:String,//相关文件
    specification:String,//募集说明书.
    report:String,//评级报告.
});
FinancialingSchema.plugin(mongoosePaginate);
var Financialing = mongoose.model("Financialing", FinancialingSchema);


module.exports = Financialing;
