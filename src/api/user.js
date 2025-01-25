// 导入request.js请求工具d:\D\itheima\02\06_前端\12_大事件资料\02_请求工具request.js\request.js
import request from '@/utils/request'

// 提供调用注册接口的函数
export const userRegisterService = (registerData) => {
    // urlSearchParams完成参数传递
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('user/register', params)
}

// 提供调用登录接口的函数
export const userLoginService = (loginData) => {
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, loginData[key])
    }
    return request.post('/user/login', params)
}

// 获取用户详细信息
export const userInfoService = () => {
    return request.get('/user/userInfo')
}