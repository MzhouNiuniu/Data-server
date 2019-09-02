
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//首页配置
var IndexSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    banner:Array,//banner
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
});
IndexSchema.plugin(mongoosePaginate);
var IndexConfig = mongoose.model("IndexConfig", IndexSchema);


module.exports = IndexConfig;
