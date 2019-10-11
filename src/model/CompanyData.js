
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
import FinancialData from './FinancialData'
//由于报错 暂时不限制死
// FinancialDataSchema
let bond={
    record:[
        {
            abbreviation:String,//简称
            makeTime:String,//成交时间
            makeMoney:String,//成交金额
            remainingTime:String,//剩余时间
            makeRate:String,//成交利率
            BP:String,//偏离
            aboutFile:String,//相关文件
            other:String,//相关文件
        }
    ],
    code:String,
    abbreviation:String,//简称
    issuer:String,//发行人
    fullName:String,//发行人
    type:String,
    scale:String,//发行规模
    issueWay:String,//发行方式
    startTime:String,//开始时间
    endTime:String,//结束时间
    repaymentWay:String,//还本方式
    interestWay:String,//付息方式
    deadlineBond:String,//债券期限
    payValue:String,//票面利率
    rateBond:String,//债券评级
    mainType:String,//主体评级
    principalUnderwriter:String,//主承销商
    addEnhancementWay:String,//增信措施
    aboutFile:String,//相关文件
    specification:String,//相关文件
    specification:String,//募集说明书.
    report:String,//评级报告.
}
//城投数据
var CompanyDataSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
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
    creationTime:String,//创建时间
    level:String,//行政级别
    info:String,//企业概况
    registerCapital:String,//注册资本
    photos:String,//企业图片
    financial:[],//
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
    other:[{
        name:String,//名字
        file:String//文件服务中关联的代号
    }],
    releaseTime:{
        type:String,
        default:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
});
CompanyDataSchema.plugin(mongoosePaginate);
var CompanyData = mongoose.model("CompanyData", CompanyDataSchema);


module.exports = CompanyData;
