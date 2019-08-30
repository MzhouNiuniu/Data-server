var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var mongoosePaginate = require('mongoose-paginate');
import config from '../../config/settings'
var FileSchema = new Schema({
    _id: Schema.Types.ObjectId,
    filename: String,
    contentType: String,
    length:Number,
    chunkSize:Number,
    uploadDate:Date,
    aliase:String,
    metadata:String,
    md5:String,
    chunks:{
        type:Schema.Types.ObjectId,
        ref:'fs.chunk'
    }
});

FileSchema.plugin(mongoosePaginate);
var Oss = mongoose.model("getFiles", FileSchema);

module.exports = Oss;