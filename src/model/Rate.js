var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
//基础数据
var RateSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    DataId: {
        type: Schema.Types.ObjectId,
        index: true
    },
    year: String,//年份
    main: {//评级
        enum: ['AAA', 'AA+', 'AA', '其他'],
        type: String
    },
    wish: {//展望评级
        type: String
    },

    organization: String,//机构
    report: String,//机构

});
RateSchema.plugin(mongoosePaginate);
var RateSchema = mongoose.model("Rate", RateSchema);


module.exports = RateSchema;










