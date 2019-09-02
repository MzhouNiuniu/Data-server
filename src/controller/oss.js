import config from "../../config/settings";
const {server, siteFunc} = require('../../utils');
const fs = require('fs');
// const { createModel } = require('mongoose-gridfs');
const OssModel = require("../model").Oss;
const db = require("../model").db;
var shortid = require('shortid');
var mongoose = require('mongoose');
var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
class Oss {
    constructor() {
        // super()
    }

    /**
     * @apiGroup Oss
     * @upload 上传
     * @api {post} /Oss/upload 上传文件
     * @apiSampleRequest  /Oss/upload
     */
    async upload(req, res, next) {
        try {
            let _id = shortid.generate()
            let file = fs.createReadStream(`uploads/${req.files[0].filename}`,{encoding: 'utf-8'})
            let fileData = ''
            // const Attachment = createModel();
            // const readStream = createReadStream(`uploads/${req.files[0].filename}`);
            // const options = ({ filename: 'sample.txt', contentType: 'text/plain' });

            // const readStreams = Attachment.read({_id:'5d6658aa5a7a980b649e22dd'});
            // console.log(readStreams)
            // Attachment.write(options, readStream, (error, file) => {
            //     //=> {_id: ..., filename: ..., ...}
            //     console.log(file)
            //     res.send(file)
            // });

            //     var gfs = Grid(db.db);
            //     var writestream = gfs.createWriteStream({
            //         filename:req.files[0].originalname,
            //     });
            //     fs.createReadStream(`uploads/${req.files[0].filename}`).pipe(writestream);
            //     writestream.on('close', function (file) {
            //         console.log(file)
            //         res.send(siteFunc.renderApiData(res, 200, '插入成功',{_id:file._id}))
            //     });



                // gfs.files.find({ filename:'mongo_file.txt' }).toArray(function (err, files) {
                //     console.log(files);
                // })

                // var fs_write_stream = fs.createWriteStream(`uploads/${req.files[0].filename}`);
                // console.log(fs_write_stream)

                // fs.createReadStream(`uploads/${req.files[0].filename}`).pipe(writestream);
                // all set!


            file.on('data', (data) =>{
                fileData+=data
            })
            file.on('end', () =>{
                let params = {
                    _id,
                    name:req.files[0].originalname,
                    path:config.baseUrl+req.files[0].filename
                }
                let model = new OssModel(params)
                model.save()
                res.send(siteFunc.renderApiData(res, 200, '插入成功',params))
            })
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Oss
     * @download 下载
     * @api {get} /Oss/download 下载文件
     * @apiParam {string} id  文件id
     * @apiSampleRequest  /Oss/download
     */
    async download(req, res, next) {
        try {
            // let file = await OssModel.find({'filename':'mongo_file.txt'})
            // console.log(file)
            // res.send(file)


            // var gfs = Grid(db.db);
            // gfs.files.find({ filename:'mongo_file.txt' }).toArray(function (err, files) {
            //     console.log(files);
            // })
            // OssModel.find({_id:ObjectId("5d6658479e5d4f0c28e6f482")}).then(function(contents){
            //     console.log(contents)
            // })
            // res.send(file[0].data)
            // res.send(
            //     "xOO6w7ChDQrE47rDsKENCsTjusOwoQ0KxOO6w7ChDQrE47rDsKE=")


            let data = await OssModel.find({'_id': req.query.id})
            res.send(siteFunc.renderApiData(res, 200, '成功',data))


            // var pathname = file[0].pathName;
            // var realPath = `uploads/${pathname}`
            // fs.exists(realPath, function (exists) {
            //     if (!exists) {
            //         console.log("文件不存在");
            //         res.writeHead(404, {
            //             'Content-Type': 'text/plain'
            //         });
            //
            //         res.write("This request URL " + pathname + " was not found on this server.");
            //         res.end();
            //     } else {
            //         console.log("文件存在");
            //         fs.readFile(realPath, "base64", function (err, file) {
            //             if (err) {
            //                 res.writeHead(500, {
            //                     'Content-Type': 'text/plain'
            //                 });
            //                 console.log("读取文件错误");
            //                 res.end(err);
            //             } else {
            //                 res.writeHead(200, {
            //                     'Content-Type': 'text/html'
            //                 });
            //                 console.log("读取文件完毕，正在发送......");
            //
            //                 res.write(file, "base64");
            //
            //                 res.end();
            //                 console.log("文件发送完毕");
            //             }
            //         });
            //     }
            // });
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
}
module.exports = new Oss();