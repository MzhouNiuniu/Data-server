
function _clearSession(req) {
    req.session.adminlogined = false;
    req.session.adminPower = '';
    req.session.adminUserInfo = '';
}
module.exports = (req, res, next) => {
    console.log(req.session)
    const authorization = req.session.adminlogined;
    if (!authorization) {
        res.send({ code:401,'message':'登录超时' });// 登录超时
    } else {
        next();
    }

}
