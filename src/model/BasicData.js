
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//基础数据
var BasicDataSchema = new Schema({
    province:String,
    city:String,
    district:String,
    count:String,//用于数据转化
    year:String,
    directly:String,//行政级别
    GDP:Number,//GDP
    addFDP:Number,//GDP增速
    income:Number,//收入
    addIncome:Number,//增长收入
    balance:Number,//存续债卷余额
    budget:Number,//预算
    man:Number,//人口
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
});
BasicDataSchema.plugin(mongoosePaginate);
var BasicData = mongoose.model("basicData", BasicDataSchema);


module.exports = BasicData;
