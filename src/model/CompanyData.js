
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
import FinancialData from './FinancialData'
//由于报错 暂时不限制死
// FinancialDataSchema

//城投数据
var CompanyDataSchema = new Schema({
    // _id: {
    //     type: String,
    //     'default': shortid.generate
    // },
    auditList:Array, //审核记录
    status:{
        type:Number,
        default:0
        //0待审核  1审核通过  2审核未通过
    },
    name:String,//公司名称
    province:String,//省
    city:String,//市
    district:String,//区
    mainType:{
        enum : ['城投','新区城投','交投','水投','文旅投','工投','农投','地铁','其他'],
        type:String
    },//主体类型
    controllerMan:String,//控制人
    creationTime:{
        type: Date
    },//创建时间
    level:String,//行政级别
    info:String,//企业概况
    registerCapital:String,//注册资本
    photos:String,//企业图片
    financial:[],//
    belongGovernment:String,//所属政府
    businessScope:String,//企业经营范围
    incomeInfo:[],//新增业务数据
    totalAsset:Number,
    news:Array,
    businessCount:Number,
    rateMain:{//评级
        enum : ['AAA','AA+','AA','其他'],
        type:String
    },
    rate:[
    ],
    //
    financing:[
        {
            year:String,//年份
            //此处由于前端表单不好判断 为方便前端处理列多个字段管理
            enterpriseBond:Object,//企业
            companyBond:Object,//公司
            middleBond:Object,//中小
            unpublicBond:Object,//非公开
            enterpriseAssetBond:Object,//企业资产
            credit:Object,//信贷
            SCP:Object,//超短期融资券（SCP）
            CP:Object,//短期融资券（CP）
            MTN:Object,//中期票据（MTN）
            PPN:Object,//定向工具（PPN）
            ABN:Object,//资产支持票据（ABN）
            PRN:Object,//项目收益票据（PRN）
            DFI:Object,//债务融资工具（DFI）
            GN:Object,//绿色债务融资工具（GN）
        }
    ],
    other:[],
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
});
CompanyDataSchema.plugin(mongoosePaginate);
var CompanyData = mongoose.model("CompanyData", CompanyDataSchema);


module.exports = CompanyData;
