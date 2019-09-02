
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//研究报告
var ResearchReportSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: String,
    content:String,
    type:Number,//0 专题报告  1定期报告
    brief:String,//简介
    human:String,//研究人
    organization:String,//机构
    accessory:String,//附件
    cover:String,//封面
    stick:{
        type:Number,
        enum : [0,1],//枚举
        default:0
        //0待审核  1置顶
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
ResearchReportSchema.plugin(mongoosePaginate);
var ResearchReport = mongoose.model("ResearchReport", ResearchReportSchema);


module.exports = ResearchReport;
