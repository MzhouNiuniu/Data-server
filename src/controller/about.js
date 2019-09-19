const Model = require("../model").About;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'
//考虑到资质文件图片很多 单独用一个表存放 提高读写效率
class About {
    constructor() {
        // super()
    }

    /**
     *
     * @apiGroup About
     * @publish 发布  修改同个接口
     * @api {post} /about/publish 发布  修改同个接口
     * @apiParam {Array} info  平台介绍  [{company:公司名,content：详细信息}] 可以多条按照这个格式来提交
     * @apiParam {Array} aptitude  资质文件  [图片1，图片2]
     * @apiSampleRequest  /about/publish
     *
     */
    async publish(req, res, next) {
        try {
            let model = await Model.findOne()
            if(model==null){
                let models = new Model(req.body)
                models.save()
            }
            else{
                let model = await Model.findOneAndUpdate(req.body)
            }
            res.send(siteFunc.renderApiData(req, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }



    /**
     * @apiGroup About
     * @getList 获取详情
     * @api {get} /about/getDetails 获取详情
     * @apiSampleRequest  /about/getDetails
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
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }




}

module.exports = new About();
