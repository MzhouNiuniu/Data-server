
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//基础数据
var BasicDataSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    province:String,
    city:String,
    district:String,
    year:String,
    directly:String,//辖区名称
    GDP:String,//GDP
    addFDP:String,//GDP增速
    income:String,//收入
    addIncome:String,//增长收入
    balance:String,//存续债卷余额
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
});
BasicDataSchema.plugin(mongoosePaginate);
var BasicData = mongoose.model("basicData", BasicDataSchema);


module.exports = BasicData;
