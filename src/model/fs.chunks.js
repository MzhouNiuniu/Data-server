var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var mongoosePaginate = require('mongoose-paginate');
import config from '../../config/settings'
var ChunkSchema = new Schema({
    _id: Schema.Types.ObjectId,
    files_id: Schema.Types.ObjectId,
    data: Buffer,
    n:Number
});

ChunkSchema.plugin(mongoosePaginate);
var Oss = mongoose.model("fs.chunk", ChunkSchema);

module.exports = Oss;