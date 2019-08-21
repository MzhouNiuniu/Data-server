/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
var ExpertSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: String,
    sex: String,
    education:String, //学历
    degree:String,//学位
    organization:String,//工作单位
    mailbox:String,//邮箱
    experType:String,//专家类型
    speciality:String,//擅长领域
    photos:String,//头像
    languages:Array, //语言能力
    professional:Array, //专家技术职称
    registered:String,//注册职业资格
    achievement:Array,//科研成果
    status:{
        type:String,
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
