const Model = require("../model").CompanyData;
const FModel = require("../model").FinancialData;
const RModel = require("../model").Rate;
const NModel = require("../model").News;
const FiModel = require("../model").Financialing
const BrModel = require("../model").BrModel
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
var shortid = require('shortid');
import config from '../../config/settings'

var mongoose = require('mongoose');

//城投公司
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
            let fmodel = await Model.find({name: req.body.name})
            if (fmodel.length > 0) {
                res.send(siteFunc.renderApiErr(req, res, 500, '公司名称重复'))
                return
            }
            const id = mongoose.Types.ObjectId()
            req.body._id = id
            req.body.releaseTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            let model = new Model(req.body)
            //取最大年份的总资产数据
            let year = 0
            if (req.body.financial) {
                req.body.financial.map((item) => {
                    if (year < item.year) {
                        year = item.year
                        model.totalAsset = item.totalAsset
                        model.businessCount = item.mainBusiness //主营收入
                        model.operatingReceipt = item.business //营业收入
                    }
                    let fModel = new FModel(item)
                    fModel.DataId = id

                    fModel.save()
                })
                model.financial = []
            }
            //取最大年份的评级数据
            let years = 0

            if (req.body.rate) {
                req.body.rate.map((item) => {
                    if (years < item.year) {
                        years = item.year
                        model.rateMain = item.main
                    }
                    let rModel = new RModel(item)
                    rModel.DataId = id
                    rModel.save()
                })
                model.rate = []

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
            console.log(req.query.id)

            let rModel = await RModel.find({'DataId': req.query.id})
            let model = await Model.find({'_id': req.query.id})
            let fModel = await FModel.find({'DataId': req.query.id})
            let fiModel = await FiModel.aggregate([{
                    $match: {
                        status: 1, //匹配number>=100的记录
                        DataName: model[0].name
                    }
                }, {
                    $group: {
                        _id: {
                            year: '$year'
                        },
                        details: {
                            $push: {
                                financingType: '$financingType',
                                abbreviation: '$abbreviation',
                                id: '$_id'
                            }
                        }
                    }

                }
                ]
            )

            let nmodel = await NModel.find({
                    'source': model[0].name
                }
            )// source

            model[0].financial = fModel
            model[0].financing = fiModel
            model[0].rate = rModel
            model[0].news = nmodel
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch
            (err) {
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
            let model = await
                Model.remove({'_id': req.body.id})
            let models = await
                FiModel.remove({'DataId': req.body.id})
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
            await
                FModel.remove({'DataId': req.body.id})
            await
                FiModel.remove({'DataId': req.body.id})
            await
                RModel.remove({'DataId': req.body.id})
            let year = 0
            if (req.body.financial) {
                req.body.financial.map((item) => {
                    if (year < item.year) {
                        year = item.year
                        req.body.totalAsset = item.totalAsset
                        req.body.businessCount = item.mainBusiness
                        req.body.operatingReceipt=item.business //营业收入
                    }
                    let fModel = new FModel(item)
                    fModel.DataId = req.body.id
                    fModel.save()
                })
            }

            //取最大年份的评级数据
            let years = 0
            if (req.body.rate) {
                req.body.rate.map((item) => {
                    if (years < item.year) {
                        years = item.year
                        req.body.rateMain = item.main
                    }
                    let rModel = new RModel(item)
                    rModel.DataId = req.body.id
                    rModel.save()
                })
            }
            req.body.financial = []
            req.body.rate = []
            let model = await
                Model.findByIdAndUpdate(req.body.id, req.body)
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
                let model = await
                    Model.findById(req.body.id)
                model.status = req.body.status
                model.auditList.push({
                    author: req.session.adminUserInfo,
                    message: req.body.message,
                    releaseTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                })
                let models = await
                    Model.findByIdAndUpdate(req.body.id, model)
            }
            else {
                let model = await
                    Model.findByIdAndUpdate(req.body.id, {'status': req.body.status, 'companyStatus': 1})
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
     * @apiParam {string} province  省级
     * @apiParam {string} mainType  主体类型
     * @apiParam {string} rateMain  评级
     * @apiParam {string} totalAsset  总资产  实例    如果  0-100 那么传参   0,100
     * @apiParam {string} business  营业收入  实例    如果  0-100 那么传参   0,100
     * @apiSampleRequest  /companyData/getListBySearch
     */
    async getListBySearch(req, res, next) {
        var sorts = JSON.parse(req.query.sort)
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 9)
        var page = Number(req.query.page || 1)
        var province = req.query.province || ''
        var mainType = req.query.mainType || ''
        var totalAsset = req.query.totalAsset ? req.query.totalAsset.split(",") : [0, 99999999999999999999999]
        var business = req.query.business ? req.query.business.split(",") : [0, 99999999999999999999999]
        var rateMain = req.query.rateMain ? req.query.rateMain : null
        let params
        if (keyWords == '') {
            params = {
                province: {$regex: province},
                mainType: {$regex: mainType},
            }
        }
        else {
            params = {
                name: {$regex: keyWords},
                province: {$regex: province},
                mainType: {$regex: mainType},
                status: 1
            }
        }
        // totalAsset: {$lte: totalAsset[1], $gte: totalAsset[0]},
        // business: {$lte: business[1], $gte: business[0]},            rateMain
        switch (req.query.income) {
            case '1':
                business = [0, 10]
                break;

            case '2':
                business = [10, 50]
                break;
            case '3':
                business = [50, 100]
                break;
            case '4':
                business = [100, 200]
                break;
            case '5':
                business = [200, 99999999999999999999999]
                break;
            default:
                business = [0, 99999999999999999999999]

        }
        switch (req.query.scale) {
            case '1':
                totalAsset = [0, 100]
                break;
            case '2':
                totalAsset = [100, 500]
                break;
            case '3':
                totalAsset = [500, 1000]
                break;
            case '4':
                totalAsset = [1000, 2000]
                break;
            case '5':
                totalAsset = [2000, 99999999999999999999999]
                break;
            default:
                totalAsset = [0, 99999999999999999999999]

        }
        if (req.query.income) {
            params.business = {$lte: business[1], $gte: business[0]}
        }
        if (req.query.province) {
            params.province = req.query.province
        }
        if (req.query.mainType) {
            params.mainType = req.query.mainType
        }
        if (req.query.totalAsset) {
            params.totalAsset = req.query.totalAsset
        }
        if (req.query.rateMain) {
            params.rateMain = req.query.rateMain
        }
        if (req.query.scale) {
            params.totalAsset = {$lte: totalAsset[1], $gte: totalAsset[0]}
        }

        if (req.query.startCreateTime && req.query.endCreateTime) {
            params.creationTime = {$lte: req.query.endCreateTime, $gte: new Date(req.query.startCreateTime)}
        }
        if (req.query.min && req.query.max) {
            params.totalAsset = {$lte: req.query.max, $gte: req.query.min}
        }


        try {
            console.log(params)
            let model = await
                Model.paginate(params, {
                    limit: limit,
                    page: page,
                    sort: sorts
                })

            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch
            (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    async getListByYear(req, res, next) {
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)
        var keyWords = req.query.keyWords || ""
        let model
        if (!req.query.directly) {
            model = await
                Model.paginate({
                    name: {$regex: keyWords, $options: 'i'},

                }, {
                    limit: limit,
                    page: page,
                    sort: {stick: -1}
                })


        }

        else if (req.query.directly == '省级') {
            model = await
                Model.paginate({
                    name: {$regex: keyWords, $options: 'i'},
                    province: {$regex: req.query.province}
                }, {
                    limit: limit,
                    page: page,
                    sort: {stick: -1}
                })
        }
        else if (req.query.directly == '地市级') {
            model = await
                Model.paginate({
                    name: {$regex: keyWords, $options: 'i'},
                    city: {$regex: req.query.city}
                }, {
                    limit: limit,
                    page: page,
                    sort: {stick: -1}
                })
        }
        else if (req.query.directly == '区县级') {
            model = await
                Model.paginate({
                    name: {$regex: keyWords, $options: 'i'},
                    district: {$regex: req.query.district}
                }, {
                    limit: limit,
                    page: page,
                    sort: {stick: -1}
                })
        }
        // let model = await Model.paginate(params, {
        //     limit: limit,
        //     page: page,
        //     sort: {stick: -1}
        // })
        for (let index = 0; index < model.docs.length; index++) {
            let fModel = await
                FModel.find({
                    year: req.query.year,
                    DataId: model.docs[index]._id
                })
            let rModel = await
                RModel.find({
                    year: req.query.year,
                    DataId: model.docs[index]._id
                })
            model.docs[index].financial = fModel
            model.docs[index].rate = rModel
        }

        res.send(siteFunc.renderApiData(req, 200, 'ok', model))

    }

    async getMapSearch(req, res) {
        let model = await
            Model.paginate({
                name: {$regex: req.query.keyWords, $options: 'i'}
            }, {
                limit: 5,
                page: 1,
            })
        res.send(siteFunc.renderApiData(req, 200, 'ok', model))
    }

}

module.exports = new CompanyData();
