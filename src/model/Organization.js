
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//机构
var OrganizationSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: String,
    province:String,
    city:String,
    address:String,
    district:String,
    website:String,
    speciality:String,
    service:String,
    experience:Array,
    stick:{
        type:Number,
        enum : [0,1],//枚举
        default:0
        //0不置顶  1置顶
    },
    auditList:[{
        name:String,//名称
        type:String,//类型
        companyName:String,//合作机构名字
    }], //审核记录
    intro:String,
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
OrganizationSchema.plugin(mongoosePaginate);
var Organization = mongoose.model("Organization", OrganizationSchema);


module.exports = Organization;
