
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
import User from './User'
//新闻
var NewsSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    title: String,
    content:  String,
    source:String,
    type:Number, //0  行业动态  1 智库新闻  2 智库动态 3 项目动态
    cover:String,
    stick:{
        type:Number,
        enum : [0,1],//枚举
        default:0
        //0不置顶  1置顶
    },
    auditList:Array, //审核记录
    status:{
        type:Number,
        default:0
        //0待审核  1审核通过  2审核未通过
    },
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
    author: {
        type: Object,
    },

});
NewsSchema.plugin(mongoosePaginate);
var News = mongoose.model("News", NewsSchema);


module.exports = News;
