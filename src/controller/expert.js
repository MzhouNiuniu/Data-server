const Model = require("../model").Expert;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');

var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'

class Expert {
    constructor() {
        // super()
    }

    /**
     * @apiGroup Expert
     * @publish 发布
     * @api {post} /expert/publish 发布
     * @apiParam {string} name  姓名
     * @apiParam {string} sex  性别
     * @apiParam {string} education  学历
     * @apiParam {string} degree  学位
     * @apiParam {string} education  工作单位
     * @apiParam {string} mailbox  邮箱
     * @apiParam {string} experType  专家类型
     * @apiParam {string} speciality  擅长领域
     * @apiParam {string} photos  头像
     * @apiParam {array} languages  语言能力
     * @apiParam {array} professional  专家技术职称
     * @apiParam {Array} registered  注册职业资格
     * @apiParam {array} achievement  科研成果
     * @apiSampleRequest  /expert/publish
     *
     */
    async publish(req, res, next) {
        try {
            req.body.author = req.session.adminUserInfo
            let model = new Model(req.body)
            model.save()
            res.send(siteFunc.renderApiData(res, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Expert
     * @getList 获取列表
     * @api {get} /expert/getList 获取列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiSampleRequest  /expert/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)

        try {
            let model = await Model.paginate({name: {$regex: keyWords, $options: 'i'}}, {limit: limit, page: page})
            console.log(model)
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Expert
     * @getList 获取详情
     * @api {get} /expert/getDetails 获取详情
     * @apiParam {string} id  id
     * @apiSampleRequest  /expert/getDetails
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
     * @apiGroup Expert
     * @delById 删除
     * @api {post} /expert/delById 删除
     * @apiSampleRequest  /expert/delById
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
     * @apiGroup Expert
     * @updateById 更新某条
     * @apiParam {string} id  id
     * @api {post} /expert/updateById 更新某条
     * @apiParam {string} name  姓名
     * @apiParam {string} sex  性别
     * @apiParam {string} education  学历
     * @apiParam {string} degree  学位
     * @apiParam {string} education  工作单位
     * @apiParam {string} mailbox  邮箱
     * @apiParam {string} experType  专家类型
     * @apiParam {string} speciality  擅长领域
     * @apiParam {string} photos  头像
     * @apiParam {array} languages  语言能力
     * @apiParam {array} professional  专家技术职称
     * @apiParam {string} registered  注册职业资格
     * @apiParam {array} achievement  科研成果
     * @apiSampleRequest  /expert/updateById
     */
    async updateById(req, res, next) {
        try {
            let model = await Model.findByIdAndUpdate(req.body.id, req.body)
            console.log(model)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Expert
     * @updateStatusById 更新某条的状态（审核）
     * @apiParam {string} id  id
     * @api {post} /expert/updateStatusById 更新某条的状态（审核）
     * @apiParam {string} status  状态  （0未审核   1通过  2未通过 ）
     * @apiSampleRequest  /expert/updateStatusById
     */
    async updateStatusById(req, res, next) {
        try {
            let model = await Model.findByIdAndUpdate(req.body.id, {'status': req.body.status})
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    // /**
    //  * @apiGroup News
    //  * @importExcel 更新某条的状态（审核）
    //  * @apiParam {string} file  form-data  key为file  value excel
    //  * @api {post} /news/importExcel 导入新闻
    //  */
    // async importExcel(req, res, next) {
    //     try {
    //         var form = new formidable.IncomingForm();
    //         form.encoding = 'utf-8';
    //         // form.uploadDir = path.join(__dirname, '../../public/upload/stuUpload/');
    //         form.keepExtensions = true;//保留后缀
    //         form.maxFieldsSize = 2 * 1024 * 1024;  //大小限制
    //         form.parse(req, function (err, fields, files) {
    //             if (err) {
    //                 res.send(siteFunc.renderApiErr(req, res, 500, err))
    //                 return;
    //             }
    //             var obj = node_xlsx.parse(files['file'].path);
    //             obj[0].data.map((item,index)=>{
    //                 if(index!=0){
    //                     let params={}
    //                     obj[0].data[0].map((key,indexs)=>{
    //                         params[key]=item[indexs]
    //                     })
    //                     console.log(params)
    //                     let model = new NewModel(params)
    //                     model.save()
    //
    //                 }
    //             })
    //             res.send(siteFunc.renderApiData(req, 200, 'ok'))
    //         })
    //     }
    //     catch (err) {
    //         res.send(siteFunc.renderApiErr(req, res, 500, err))
    //     }
    // }


}

module.exports = new Expert();
