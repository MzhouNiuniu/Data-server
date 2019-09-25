
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('../../utils/mongoose-paginate');
//专家
var ExpertSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: String,
    sex: String,
    current:String,//现状
    photos:String,//头像
    experience:String,//经历
    direction:String,//研究方向
    achievement:String,//科研成果
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
ExpertSchema.plugin(mongoosePaginate);
var Expert = mongoose.model("Expert", ExpertSchema);


module.exports = Expert;
