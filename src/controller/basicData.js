const Model = require("../model").BasicData;
const cModel = require("../model").CompanyData;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'

//考虑到资质文件图片很多 单独用一个表存放 提高读写效率
class BasicData {
    constructor() {
        // super()
    }

    /**
     * @apiGroup BasicData
     * @publish 发布
     * @api {post} /basicData/publish 发布
     * @apiParam {string} province  省
     * @apiParam {string} city  市
     * @apiParam {string} district  区
     * @apiParam {string} year  年
     * @apiParam {string} experience  辖区名称
     * @apiParam {string} GDP  GDP
     * @apiParam {string} addFDP  GDP增速
     * @apiParam {string} income  收入
     * @apiParam {string} addIncome  增长收入
     * @apiParam {string} balance  存续债卷余额
     * @apiSampleRequest  /basicData/publish
     *
     */
    async publish(req, res, next) {
        try {
            req.body.releaseTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            req.body.author = req.session.adminUserInfo
            let model = new Model(req.body)
            model.save()
            console.log(model)
            res.send(siteFunc.renderApiData(res, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup BasicData
     * @getList 获取列表
     * @api {get} /basicData/getList 获取列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiSampleRequest  /basicData/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)

        try {
            let model = await Model.paginate({year: {$regex: keyWords, $options: 'i'}}, {limit: limit, page: page})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup BasicData
     * @getList 获取列表
     * @api {get} /basicData/getListByWeb 获取列表
     * @apiParam {string} directly   不传默认省级  枚举 只能是 省级 市级 区级三种
     * @apiParam {string} province   如果你选到省级一下了 比如江苏省  这个字段你就传江苏省
     * @apiParam {string} city   如果你选到省级一下了 比如江苏省 南京市  这个字段你就传南京市  其实江苏省也可以不传传最好 保证唯一性
     */
    async getListByWeb(req, res, next) {

        try {
            let model
            let models = []

            //判断默认首页查出北京返回
            if (!req.query.directly) {
                let pam
                if (req.query.year) {
                    pam = {'province': '北京市', 'directly': '省级', year: req.query.year}
                }
                console.log('321')
                console.log(req.query.directly)
                let count = await cModel.aggregate([{
                        $match: {
                            province: '北京市', //匹配number>=100的记录m
                        }
                    }, {
                        $group: {
                            _id: 'id',
                            count: {$sum: 1},
                        }
                    }]
                )
                models = await Model.find(pam)
                console.log('count')
                console.log(count)
                if (count.length > 0) {
                    console.log(models)
                    models[0].count = count[0].count

                    console.log(models[0].count)
                }
                else {
                    console.log('coun11t')
                    models[0].count = 0
                }
                model = await Model.find({year: req.query.year, 'directly': '省级'})
                for (let index = 0; index < model.length; index++) {
                    let count = await cModel.aggregate([{
                            $match: {
                                province: model[index].province, //匹配number>=100的记录
                            }
                        }, {
                            $group: {
                                _id: 'id',
                                count: {$sum: 1},
                            }
                        }]
                    )
                    if (count.length > 0) {
                        model[index].count = count[0].count
                    }
                    else {
                        model[index].count = 0
                    }


                }


            }
            else if (req.query.directly == '省级') {
                let count = await cModel.aggregate([{
                        $match: {
                            province: req.query.province, //匹配number>=100的记录m
                        }
                    }, {
                        $group: {
                            _id: 'id',
                            count: {$sum: 1},
                        }
                    }]
                )
                models = await Model.find({directly: '省级', year: req.query.year, province: req.query.province})
                if (count.length > 0) {
                    models[0].count = count[0].count

                }
                else {
                    models[0].count = 0
                }
                model = await Model.find({year: req.query.year, 'directly': '市级', province: req.query.province})
                for (let index = 0; index < model.length; index++) {
                    let count = await cModel.aggregate([{
                            $match: {
                                city: model[index].city, //匹配number>=100的记录
                            }
                        }, {
                            $group: {
                                _id: 'id',
                                count: {$sum: 1},
                            }
                        }]
                    )
                    if (count.length > 0) {
                        model[index].count = count[0].count
                    }
                    else {
                        model[index].count = 0
                    }


                }
            }
            else if (req.query.directly == '市级') {
                let count = await cModel.aggregate([{
                        $match: {
                            city: req.query.city, //匹配number>=100的记录m
                        }
                    }, {
                        $group: {
                            _id: 'id',
                            count: {$sum: 1},
                        }
                    }]
                )
                models = await Model.find({directly: '市级', year: req.query.year, city: req.query.city})
                if (count.length > 0) {
                    models[0].count = count[0].count

                }
                else {
                    models[0].count = 0
                }
                model = await Model.find({year: req.query.year, 'directly': '区级', city: req.query.city})
                for (let index = 0; index < model.length; index++) {
                    let count = await cModel.aggregate([{
                            $match: {
                                district: model[index].district, //匹配number>=100的记录
                            }
                        }, {
                            $group: {
                                _id: 'id',
                                count: {$sum: 1},
                            }
                        }]
                    )
                    if (count.length > 0) {
                        model[index].count = count[0].count
                    }
                    else {
                        model[index].count = 0
                    }


                }
            }
            let data = {
                list: model,
                base: models[0]
            }
            res.send(siteFunc.renderApiData(req, 200, 'ok', data))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup BasicData
     * @getList 获取详情
     * @api {get} /basicData/getDetails 获取详情
     * @apiParam {string} id  id
     * @apiSampleRequest  /basicData/getDetails
     */
    async getDetails(req, res, next) {
        try {
            let model = await Model.find({'_id': req.query.id})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup BasicData
     * @delById 删除
     * @api {post} /basicData/delById 删除
     * @apiSampleRequest  /basicData/delById
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
     * @apiGroup BasicData
     * @updateById 更新某条
     * @apiParam {string} id  id
     * @api {post} /basicData/updateById 更新某条

     * @apiSampleRequest  /basicData/updateById
     */
    async updateById(req, res, next) {
        try {
            req.body.releaseTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            let model = await Model.findByIdAndUpdate(req.body.id, req.body)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    async getBaseListByCity(req, res, next) {
        try {
            let model = await Model.find(req.query)
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
        }
    }


}

module.exports = new BasicData();
