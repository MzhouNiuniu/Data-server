var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var mongoosePaginate = require('mongoose-paginate');
import config from '../../config/settings'

var OssSchema = new Schema({
    _id: String,
    data: Buffer,
    name:String,
    pathName:String
});

OssSchema.plugin(mongoosePaginate);
var Oss = mongoose.model("Oss", OssSchema);

module.exports = Oss;
