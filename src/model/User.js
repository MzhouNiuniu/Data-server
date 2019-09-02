/**
 * Created by Administrator on 2017/5/19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
//用户
var UserSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    enable: { type: Boolean, default: true }, //用户是否有效
    name: String,
    userName: { type: String, required: [true, '必填']} ,
    password: { type: String, required: [true, '必填']},
    logo: { type: String, default: "/upload/images/defaultlogo.png" },
});


var User = mongoose.model("User", UserSchema);


module.exports = User;
