import baseURL from './baseUrl'
//开发期间防止冲突，api分开处理
import  zy from './zyApi'
import ck from './ckApi'
export default Object.assign({
    //公共接口

}, zy,ck)
