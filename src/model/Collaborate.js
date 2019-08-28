
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
var CollaborateSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: String,
    content:String,
    company:String,
    accessory:Array,
    Tcompany:String,
    Tcontact:String,
    Tphotos:String,
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
CollaborateSchema.plugin(mongoosePaginate);
var Collaborate = mongoose.model("Collaborate", CollaborateSchema);


module.exports = Collaborate;
