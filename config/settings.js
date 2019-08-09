/**
 * Created by dora on 2017/5/19.
 *
 */

module.exports = {
    session_secret: 'doracms', // 务必修改
    auth_cookie_name: 'token',
    // 密码盐
    encrypt_key: 'CMS',
    salt_aes_key: "doracms_", // 可以解密，秘钥必须为：8/16/32位
    salt_md5_key: "dora", // MD5的盐，用于加密密码

    //    数据库配置
    URL: 'mongodb://127.0.0.1:27017/doracms2',
    DB: 'doracms2',
    HOST: 'localhost',
    PORT: 27017,
    USERNAME: 'doramart',
    PASSWORD: 'doramart',


};



