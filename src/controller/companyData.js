const Model = require("../model").CompanyData;
const FModel = require("../model").FinancialData;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
var shortid = require('shortid');
import config from '../../config/settings'

//专家
class CompanyData {
    constructor() {
        // super()
    }

    /**
     * @apiGroup CompanyData
     * @publish 发布
     * @api {post} /companyData/publish 发布
     * @apiSampleRequest  /companyData/publish
     *
     */
    async publish(req, res, next) {
        try {
            const id=shortid.generate()
            req.body._id=id
            let model = new Model(req.body)
            //取最大年份的总资产数据
            let year=0
            if(req.body.financial){
                req.body.financial.map((item)=>{
                    if(year<item.year){
                        year=item.year
                        model.totalAsset=item.totalAsset
                        model.business=item.business
                    }
                    // let fModel = new FModel(item)
                    // fModel.DataId=id
                    // fModel.save()
                })
                // model.financial=[]
            }
            //取最大年份的评级数据
            let years=0
            if(req.body.rate){
                req.body.rate.map((item)=>{
                    if(years<item.year){
                        years=item.year
                        model.rateMain=item.main
                    }
                })
            }

            model.save()
            res.send(siteFunc.renderApiData(res, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup CompanyData
     * @getList 获取列表
     * @api {get} /companyData/getList 获取列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiSampleRequest  /companyData/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)

        try {
            let model = await Model.paginate({name: {$regex: keyWords, $options: 'i'}}, {
                limit: limit,
                page: page,
                sort: {stick: -1}
            })
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup CompanyData
     * @getList 获取详情
     * @api {get} /companyData/getDetails 获取详情
     * @apiParam {string} id  id
     * @apiSampleRequest  /companyData/getDetails
     */
    async getDetails(req, res, next) {
        try {
            // let fModel = await FModel.find({'DataId': req.query.id})
            let model = await Model.find({'_id': req.query.id})
             // model[0].financial=fModel
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup CompanyData
     * @delById 删除
     * @api {post} /companyData/delById 删除
     * @apiSampleRequest  /companyData/delById
     */
    async delById(req, res, next) {
        try {
            let model = await Model.remove({'_id': req.body.id})
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup CompanyData
     * @updateById 更新某条
     * @apiParam {string} id  id
     * @api {post} /companyData/updateById 更新某条

     * @apiSampleRequest  /companyData/updateById
     */
    async updateById(req, res, next) {
        try {
            req.body.releaseTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            // await FModel.remove({'DataId': req.body.id})
            let year=0
            if(req.body.financial){
                req.body.financial.map((item)=>{
                    if(year<item.year){
                        year=item.year
                        req.body.totalAsset=item.totalAsset
                        req.body.business=item.business
                    }
                    // let fModel = new FModel(item)
                    // fModel.DataId=id
                    // fModel.save()
                })
                // model.financial=[]
            }
            //取最大年份的评级数据
            let years=0
            if(req.body.rate){
                req.body.rate.map((item)=>{
                    if(years<item.year){
                        years=item.year
                        req.body.rateMain=item.main
                    }
                })
            }
            // req.body.financial=[]

            let model = await Model.findByIdAndUpdate(req.body.id, req.body)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup CompanyData
     * @updateStatusById 更新某条的状态（审核）
     * @apiParam {string} id  id
     * @api {post} /companyData/updateStatusById 更新某条的状态（审核）
     * @apiParam {string} message 拒绝信息
     * @apiParam {string} status  状态  （0未审核   1通过  2未通过 ）
     * @apiSampleRequest  /companyData/updateStatusById
     */
    async updateStatusById(req, res, next) {
        try {

            if (req.body.status == 2) {
                let model = await Model.findById(req.body.id)
                model.status = req.body.status
                model.auditList.push({
                    author: req.session.adminUserInfo,
                    message: req.body.message,
                    releaseTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                })
                let models = await Model.findByIdAndUpdate(req.body.id, model)
            }
            else {
                let model = await Model.findByIdAndUpdate(req.body.id, {'status': req.body.status})
            }

            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup CompanyData
     * @getListBySearch 条件查询
     * @api {get} /companyData/getListBySearch 条件查询
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiParam {string} province  省
     * @apiParam {string} mainType  主体类型
     * @apiParam {string} rateMain  评级
     * @apiParam {string} totalAsset  总资产  实例    如果  0-100 那么传参   0,100
     * @apiParam {string} business  营业收入  实例    如果  0-100 那么传参   0,100
     * @apiSampleRequest  /companyData/getListBySearch
     */
    async getListBySearch(req, res, next) {
        var keyWords = req.query.keyWords||''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)
        var province = req.query.province||''
        var mainType= req.query.mainType||''
        var totalAsset= req.query.totalAsset?req.query.totalAsset.split(","):[0,99999999999999999999999]
        var business = req.query.business?req.query.business.split(","):[0,99999999999999999999999]
        var rateMain = req.query.rateMain?req.query.rateMain:null
        try {
            let model = await Model.paginate({totalAsset:{$lte:totalAsset[1],$gte:totalAsset[0]},business:{$lte:business[1],$gte:business[0]},name: {$regex: keyWords, $options: 'i'},province:{$regex: province},mainType:{$regex: mainType},rateMain}, {
                limit: limit,
                page: page,
                sort: {stick: -1}
            })
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

}

module.exports = new CompanyData();
