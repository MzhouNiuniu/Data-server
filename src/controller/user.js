const UserModel = require("../model").User;
const db = require("../model").db;
const formidable = require('formidable');
const {server,siteFunc } = require('../../utils');
const re=require('./index.js');
const _ = require('lodash')
var fs = require('fs');
var Grid = require('gridfs-stream');
import  config from '../../config/settings'
class User {
    constructor() {
        // super()
    }
    async up(req,res){
        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        // form.uploadDir = path.join(__dirname, '../../public/upload/stuUpload/');
        form.keepExtensions = true;//保留后缀
        form.maxFieldsSize = 2 * 1024 * 1024;  //大小限制
        form.parse(req, function (err, fields, files) {
            // console.log(fields)
            // console.log(files.flie)
            // db.once('open', () => {
                var gfs = Grid(db.db);
            //     var writestream = gfs.createWriteStream({
            //         filename: 'mongo_file1.txt'
            //     });
            // fs.createReadStream(files.flie.path).pipe(writestream);
            // writestream.on('close', function (file) {
            //     console.log(file.filename + ' Written To DB');
            // });
            //     console.log(files.flie.size)
            // // })
            //
            // gfs.files.find({ filename: 'mongo_file1.txt' }).toArray(function (err, filess) {
            //     if (err) {
            //         throw (err);
            //     }
                // console.log(files);
                var readstream = gfs.createReadStream({
                    filename: 'mongo_file.txt'
                });
                    readstream.pipe((val)=>{
                        console.log(val)
                    });
                // var readstream =gfs.createReadStream(options)
                // console.log()
                // // var fs_write_stream = fs.createWriteStream(filess);
                // fs.createReadStream().pipe(readstream);
                // .on('close', function () {
                //     console.log('file has been written fully!');
                // });
            // });

            // fs_write_stream.on('close', function () {
            //     console.log('file has been written fully!');
            // });
            // console.log(writestream)
            // var readstream = gfs.createReadStream({
            //     filename: 'mongo_file.txt'
            // });
            // var fs_write_stream = fs.createWriteStream(files.flie.path);
            // console.log(fs_write_stream)
            // gfs.findOne({filename: 'mongo_file.txt'}, function (err, file) {
            //     console.log(file);
            // });
            // gfs.findOne({ _id:'54da7b013706c1e7ab25f9fa'}, function (err, file) {
            //     console.log(file);
            // });
            // gfs.files.find({ filename:'123.txt' }).toArray(function (err, files) {
            //   console.log(files);
            //   // res.send()
            // })
          // res.send( readstream.pipe(fs_write_stream));
            // fs_write_stream.on('close', function () {
            //     console.log('file has been written fully!');
            // });


        })

    }
    /**
     * @apiGroup User
     * @apiName 登陆
     * @api {get} /user/login 用户登陆
     * @apiParam {string} userName  用户名
     * @apiParam {string} password  密码
     * @apiSampleRequest  /user/login
     */

    async login(req, res, next) {
        const  newPsd= server.encrypt(req.query.password, config.encrypt_key);
        req.query.password=newPsd
        let user = await UserModel.findOne(req.query);
        if (!_.isEmpty(user)) {
            let auth_token = user._id
            req.session.adminlogined = true;
            req.session.adminUserInfo = user;
            res.cookie(config.auth_cookie_name, auth_token, { path: '/', maxAge: 1000 * 60 * 60 * 24 * 30,sign:true,  httpOnly: true }); //cookie 有效期30天
            res.send(siteFunc.renderApiData(res, 200,'ok',user ))
        }
        else{
            res.send(siteFunc.renderApiData(res, 500, '用户名或密码错误'))
        }

    }

    /**
     * @apiGroup User
     * @apiName 新增用户
     * @api {post} /user/reg 新增用户
     * @apiParam {string} userName  用户名
     * @apiParam {string} password  密码
     * @apiSampleRequest /user/reg
     */
    async reg(req, res, next) {
            try {
                const  newPsd= server.encrypt(req.body.password,  config.encrypt_key);
                req.body.password=newPsd
                const Vuser=new UserModel(req.body)
                Vuser.validate((err)=>{
                    if(err){
                        const msg = siteFunc.renderApiErr(req, res, 500, err, 'vi')
                        res.send(msg)
                    }
                })
                let  user = await UserModel.find({'userName': req.body.userName})
                if (_.isEmpty(user)) {
                    Vuser.save()
                    res.send(siteFunc.renderApiData(res, 200, '插入成功'))
                }
                else{
                    res.send(siteFunc.renderApiData(res, 500, '数据已经有了'))
                }


            }
            catch (err) {
                res.send(siteFunc.renderApiErr(req, res, 500, err))
            }
    }

    /**
     * @apiGroup User
     * @updateUser 修改密码
     * @api {post} /user/updateUser 新增用户
     * @apiParam {string} password  密码
     * @apiSampleRequest /user/updateUser
     */
    async updateUser(req, res, next) {
        try {
            const  newPsd= server.encrypt(req.body.password,  config.encrypt_key);
            req.body.password=newPsd
            UserModel.updateOne({'password': req.session.adminUserInfo.password},{'password':req.body.password})
            let  user = await UserModel.find({'password':req.body.password})
            req.session.adminUserInfo=user
            res.send(siteFunc.renderApiData(res, 200,'ok',user ))

        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

}

module.exports = new User();
