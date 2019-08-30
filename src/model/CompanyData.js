
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var moment = require('moment')
var mongoosePaginate = require('mongoose-paginate');
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
var CompanyDataSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
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
    financial:[{ //财务
        year:String,//年限
        totalAsset:String,//总资产
        netAsset:String,//净资产
        liabilities:String,//负债率
        mainBusiness:String,//主营业务
        business:String,//营业务
        netProfit:String,//净利润
        totalProfit:String,//利润总额
    }],
    rate:[{
        year:String,//年份
        main:{//评级
            enum : ['AAA','AA+','AA','其他'],
            type:String
        },
        wish:{//展望评级
            enum : ['AAA','AA+','AA','其他'],
            type:String
        },
        organization:String,//机构
        report:String,//机构
    },
    ],
    //
    financing:[
        {
            year:String,//年份
            //此处由于前端表单不好判断 为方便前端处理列多个字段管理
            enterpriseBond:bond,//企业
            companyBond:bond,//公司
            middleBond:bond,//中小
            unpublicBond:bond,//非公开
            enterpriseAssetBond:bond,//企业资产
            credit:bond,//信贷
            SCP:bond,//超短期融资券（SCP）
            CP:bond,//短期融资券（CP）
            MTN:bond,//中期票据（MTN）
            PPN:bond,//定向工具（PPN）
            ABN:bond,//资产支持票据（ABN）
            PRN:bond,//项目收益票据（PRN）
            DFI:bond,//债务融资工具（DFI）
            GN:bond,//绿色债务融资工具（GN）
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
