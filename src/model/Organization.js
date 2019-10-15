var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('../../utils/mongoose-paginate');
//机构
var OrganizationSchema = new Schema({
    // _id: {
    //     type: String,
    //     'default': shortid.generate
    // },
    name: String,
    province: String,
    city: String,
    address: String,
    district: String,
    website: String,
    scope: String,//经营范围
    speciality: String,//专业领域
    service: String,//服务
    experience: Array,//经验
    // experience:[{
    //     name:String,//名称
    //     type:String,//类型
    //     companyName:String,//合作机构名字
    // }],
    intro: String,
    stick: {
        type: Number,
        enum: [0, 1],//枚举
        default: 0
        //0不置顶  1置顶
    },
    auditList: Array,
    // auditList:[{
//     "message" : "1111",//拒绝信息
//     "releaseTime" : "2019-08-28 09:48:09"//拒绝时间
// },


    status: {
        type: Number,
        default: 0
        //0待审核  1审核通过  2审核未通过
    },
    releaseTime: {
        type: String,
        default: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
    stickTime: {
        type: String,
        default:''
    },
    author: {
        type: Object,
    },

});
OrganizationSchema.plugin(mongoosePaginate);
var Organization = mongoose.model("Organization", OrganizationSchema);


module.exports = Organization;
