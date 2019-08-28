
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
var IndexSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    banner:Array,//平台介绍
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
});
IndexSchema.plugin(mongoosePaginate);
var IndexConfig = mongoose.model("IndexConfig", IndexSchema);


module.exports = IndexConfig;
