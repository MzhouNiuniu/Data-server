var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment')
// moment.locale((settings.lang).toLowerCase());
var shortid = require('shortid');
var ContentSchema = new Schema({
    title: String,
    stitle: String,
});
