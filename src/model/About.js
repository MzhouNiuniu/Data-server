
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//关于我们
var AboutSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    info:Array,//平台介绍
    aptitude:Array,//资质文件
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
});
AboutSchema.plugin(mongoosePaginate);
var About = mongoose.model("About", AboutSchema);


module.exports = About;
