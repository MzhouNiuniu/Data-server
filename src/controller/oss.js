import config from "../../config/settings";

const {server, siteFunc} = require('../../utils');
const formidable = require('formidable');
var path = require('path');
const fs = require('fs');
const OssModel = require("../model").Oss;
var shortid = require('shortid');
var FdfsClient = require('fastdfs-client');
import  {baseUrl} from '../../config/settings'
// var fdfs = new FdfsClient({
//     // tracker servers
//     trackers: [
//         {
//             host: '47.110.10.44',
//             port: 22122
//         }
//     ],
//     // 默认超时时间10s
//     timeout: 10000,
//     // 默认后缀
//     // 当获取不到文件后缀时使用
//     defaultExt: 'txt',
//     // charset默认utf8
//     charset: 'utf8'
// });

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
            var form = new formidable.IncomingForm();
            form.encoding = 'utf-8';
            form.uploadDir = path.join(__dirname, '../../public/dist/upload/');
            form.maxFieldsSize = 2 * 1024 * 1024;  //大小限制
            form.parse(req, function (err, fields, files) {
                try{


                if (err) {
                    res.send(siteFunc.renderApiErr(req, res, 500, err))
                    return;
                }
                console.log(files)
                var oldpath = files.File.path;
                let _id = shortid.generate()
                var newpath
                let suffix
                if(files.File.type=='image/png'){
                    suffix=_id+'.png'
                    newpath = path.join(path.dirname(oldpath),suffix);
                }
                if(files.File.type=='image/jpeg'){
                    suffix=_id+'.jpg'
                    newpath = path.join(path.dirname(oldpath),suffix);
                }
                if(files.File.type=='application/x-rar-compressed'){
                    suffix=_id+'.rar'
                    newpath = path.join(path.dirname(oldpath),suffix);
                }
                    if(files.File.type=='application/octet-stream'){
                        suffix=_id+'.rar'
                        newpath = path.join(path.dirname(oldpath),suffix);
                    }
                    if(files.File.type=='application/x-zip-compressed'){
                        suffix=_id+'.rar'
                        newpath = path.join(path.dirname(oldpath),suffix);
                    }

                if(files.File.type=='application/zip'){
                    suffix=_id+'.zip'
                    newpath = path.join(path.dirname(oldpath),suffix);
                }
                if(files.File.type=='application/vnd.openxmlformats-officedocument.presentationml.presentation'){
                    suffix=_id+'.ppt'
                    newpath = path.join(path.dirname(oldpath),suffix);
                }
                if(files.File.type=='application/vnd.openxmlformats-officedocument.presentationml.presentation'){
                    suffix=_id+'.ppt'
                    newpath = path.join(path.dirname(oldpath),suffix);
                }
                if(files.File.type=='application/msword'){
                    suffix=_id+'.doc'
                    newpath = path.join(path.dirname(oldpath),suffix);
                }


                fs.rename(oldpath,newpath,(err)=>{
                    if(err) throw err;
                   // res.send(baseUrl+_id+'.png')
                    res.send(siteFunc.renderApiData(res, 200, '插入成功',{url:baseUrl+suffix}))
                })
                console.log(files.File)
                console.log(files.File.path)

                // fdfs.upload(files.File.path).then(function (fileId) {
                //     // fileId 为 group + '/' + filename
                //     console.log(fileId);
                //     console.log('successs')
                // }).catch(function (err) {
                //     console.log('321')
                //         console.error(err)
                //     }
                // )

                // if(!files.){
                //
                // }
                }
                catch (err) {
                    res.send(siteFunc.renderApiErr(req, res, 500, err))
                }


            })


            //     let _id = shortid.generate()
            //     let file = fs.createReadStream(`uploads/${req.files[0].filename}`,{encoding: 'utf-8'})
            //     let fileData = ''
            //     file.on('data', (data) =>{
            //         fileData+=data
            //     })
            //     file.on('end', () =>{
            //         let params = {
            //             _id,
            //             name:req.files[0].originalname,
            //             path:config.baseUrl+req.files[0].filename
            //         }
            //         let model = new OssModel(params)
            //         model.save()
            //         res.send(siteFunc.renderApiData(res, 200, '插入成功',params))
            //     })
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
            res.send(siteFunc.renderApiData(res, 200, '成功', data))


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
