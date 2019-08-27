var createError = require('http-errors');
var express = require('express');
var path = require('path');
const session = require('express-session');
var MongoStore = require('connect-mongo')(session)

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var indexRouter = require('./routes/index');
import userRouter from './routes/user'
import newRouter from './routes/news'
import expertRouter from './routes/expert'
import organizationRouter from './routes/organization'
var app = express();
var bodyParser = require('body-parser')
import config from './config/settings'

app.use(bodyParser.json())
app.use(cookieParser(config.session_secret));
let sessionConfig = {
    secret: config.encrypt_key,
    name:'session',
    cookie: {
        maxAge: 1000 * 60 * 60
    },
    store: new MongoStore({
        url: `mongodb://${config.HOST}:${config.PORT}/${config.DB}`,
    }),
    resave: false,
    saveUninitialized: true,
    rolling: true/*只要页面在操作就不会过期，无操作1小时后过期*/
}


app.use(session(sessionConfig));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization,token');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    res.header('Content-Type', 'application/json;charset=utf-8');
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
        next();
    }
});


// view engine setup
app.set('views', path.join(__dirname, '/views'));// 设置静态文件目录
app.engine('.html', require('ejs').__express); //设置ejs渲染html
app.set('view engine', 'html');//设置html为模板引擎 注意这里是html
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/news', newRouter)
app.use('/expert', expertRouter)
app.use('/organization', organizationRouter)
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
