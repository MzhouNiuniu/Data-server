
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
var StatuteSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: String,
    content:String,
    reference:String,
    type:Number, //0  政策法规  1 指南标准  2 国家性规范文件 3 地方规范文件 4 部门规范文件
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
    }
});
StatuteSchema.plugin(mongoosePaginate);
var Statute = mongoose.model("Statute", StatuteSchema);


module.exports = Statute;
