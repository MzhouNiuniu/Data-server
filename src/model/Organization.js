/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
var OrganizationSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    name: String,
    province:String,
    city:String,
    adress:String,
    district:String,
    website:String,
    speciality:String,
    service:String,
    experience:Array,
    intro:String,
    status:{
        type:String,
        default:0
        //0待审核  1审核通过  2审核未通过
    },
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
    author: {
        type: Object,
    },

});
OrganizationSchema.plugin(mongoosePaginate);
var Organization = mongoose.model("Organization", OrganizationSchema);


module.exports = Organization;
