
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//杂志
var MagazineSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name:String,//杂志名字
    url:String,//链接
    photos:String,//头像
    stick:{
        type:Number,
        enum : [0,1],//枚举
        default:0
        //0不置顶  1置顶
    },
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    }
});
MagazineSchema.plugin(mongoosePaginate);
var Magazine = mongoose.model("Magazine", MagazineSchema);


module.exports = Magazine;
