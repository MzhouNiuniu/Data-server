var createError = require('http-errors');
var express = require('express');
var path = require('path');
const session = require('express-session');
var MongoStore = require('connect-mongo')(session)

// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');



let sessionConfig = {
    secret: config.session_secret,
    name:'session',
    resave: false,
    saveUninitialized: true,
    rolling: true,/*只要页面在操作就不会过期，无操作1小时后过期*/
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly:false,
        // domain: 'localhost', path: '/'

    },
    store: new MongoStore({
        url: `mongodb://${config.HOST}:${config.PORT}/${config.DB}`,
    }),


}

var indexRouter = require('./routes/index');
import userRouter from './routes/user'
import newRouter from './routes/news'
import expertRouter from './routes/expert'
import organizationRouter from './routes/organization'
import oss from './routes/oss'
import collaborateRouter from './routes/collaborate'
import statuteRouter from './routes/statute'
import researchReportRouter from './routes/researchReport'
import researchScripturesRouter from './routes/researchScriptures'
import magazineRouter from './routes/magazine'
import aboutRouter from './routes/about'
import indexConfigRouter from './routes/indexConfig'
import companyDataRouter from './routes/companyData'
import basicDataRouter from './routes/BasicData'
import financialingRouter from './routes/financialing'


var app = express();
var bodyParser = require('body-parser')
import config from './config/settings'
app.use(session(sessionConfig));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); //
// app.use(cookieParser(config.session_secret));



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials','true');
    res.header('Access-Control-Allow-Origin', req.headers.origin); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization,token');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    // res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
        next();
    }
});


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');//设置html为模板引擎 注意这里是html

app.use(express.static(path.join(__dirname, 'public/dist'),{maxAge:31557600}))
app.engine('.html', require('ejs').__express); //设置ejs渲染html
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/news', newRouter)
app.use('/expert', expertRouter)
app.use('/oss', oss)
app.use('/organization', organizationRouter)//机构
app.use('/collaborate', collaborateRouter)//项目合作
app.use('/statute', statuteRouter)//法律法规
app.use('/researchReport', researchReportRouter)//研究报告
app.use('/researchScriptures', researchScripturesRouter)//经典案例
app.use('/magazine', magazineRouter)//杂志
app.use('/about', aboutRouter)//关于我们
app.use('/indexConfig', indexConfigRouter)//首页配置
app.use('/companyData', companyDataRouter)//城投
app.use('/basicData', basicDataRouter)
app.use('/financialing', financialingRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
