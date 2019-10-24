const Model = require("../model").IndexConfig;
const AModel = require("../model").About;
const NewModel = require("../model").News;
const CModel = require("../model").CompanyData;
const RModel = require("../model").Rate;
const FiModel=require("../model").Financialing
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'
//单独用一个表存放 提高读写效率
class IndexConfig {
    constructor() {
        // super()
    }

    /**
     *
     * @apiGroup IndexConfig
     * @publish 发布  修改同个接口
     * @api {post} /indexConfig/publish 发布  修改同个接口
     * @apiParam {Array} banner  平台介绍  [{url:xxxx,photos：xxx}] 可以多条按照这个格式来提交
     * @apiSampleRequest  /indexConfig/publish
     *
     */
    async publish(req, res, next) {
        try {
            let model = await Model.findOne()
            if (model == null) {
                let models = new Model(req.body)
                models.save()
            }
            else {
                let model = await Model.findOneAndUpdate(req.body)
            }
            res.send(siteFunc.renderApiData(req, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup IndexConfig
     * @getList 获取详情
     * @api {get} /indexConfig/getDetails 获取详情
     * @apiSampleRequest  /indexConfig/getDetails
     */
    async getDetails(req, res, next) {
        try {
            let model = await Model.findOne()
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    async getIndex(req, res, next) {
        try {
            let model = await Model.findOne()
            let amodel = await AModel.find({})
            let industryDynamic = await NewModel.find({type: 0, status: 1}).sort({stick: -1, releaseTime: -1}).limit(3)
            let ideaNew = await NewModel.find({type: 1, status: 1}).sort({stick: -1, releaseTime: -1}).limit(3)
            let ideaDynamic = await NewModel.find({type: 2, status: 1}).sort({stick: -1, releaseTime: -1}).limit(3)
            let projectDynamic = await NewModel.find({type: 3, status: 1}).sort({stick: -1, releaseTime: -1}).limit(3)
            let params = {
                industryDynamic,
                ideaNew,
                ideaDynamic,
                projectDynamic
            }
            let re = {
                about: amodel,
                banner: model.banner,
                news: params
            }
            res.send(siteFunc.renderApiData(req, 200, 'ok', re))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    async getBigData(req, res) {
        let p = await CModel.find({level: '省', status: 1}).count()
        let c = await CModel.find({level: '地市', status: 1}).count()
        let d = await CModel.find({level: '区县', status: 1}).count()

        let mainType = await CModel.aggregate([{
                $match: {
                    status: 1 //匹配number>=100的记录
                }
            }, {
                $group: {
                    _id: '$mainType',
                    count: {$sum: 1}
                }
            }]
        )
        let rate = await CModel.aggregate([{
                $match: {
                    status: 1 //匹配number>=100的记录
                }
            }, {
                $group: {
                    _id: '$rateMain',
                    rateMain: {$sum: 1}
                }
            }]
        )

        let allNum = await CModel.find({status: '1'}).count()

        let totalAsset = await CModel.aggregate([{
                $match: {
                    status: 1 //匹配number>=100的记录
                }
            }, {
                $group: {
                    _id: '_id',
                    totalAsset: {$sum: '$totalAsset'}
                }
            }]
        )
        let totalAssetS = await CModel.aggregate([{
                $match: {
                    status: 1 //匹配number>=100的记录
                }
            }, {
                $group: {
                    _id: '$mainType',
                    totalAsset: {$sum: '$totalAsset'}
                }
            }]
        )
        let pc = await CModel.aggregate([{
                $match: {
                    status: 1 //匹配number>=100的记录
                }
            }, {
                $group: {
                    _id: '$province',
                    mainType: {$push: '$mainType'}
                }
            }]
        )

        pc.map(item=>{
            let ct=0
            let xq=0
            let qt=0
            item.mainType.map(items=>{
                if(items=='城投'){
                    ct++
                }
                if(items=='新区城投'){
                    xq++
                }
                if(items=='其他'){
                    qt++
                }

            })
            item.ct=ct
            item.xq=xq
            item.qt=qt
        })
        let fi = await FiModel.find({status:1})
        let params = {
            level: {
                province: p,
                city: c,
                district: d
            },
            mainType,
            rate,
            title: {
                allNum,
                totalAsset,
            },
            totalAssetS,
            pc,
            fi
        }

        res.send(siteFunc.renderApiData(req, 200, 'ok', params))
    }

}

module.exports = new IndexConfig();
