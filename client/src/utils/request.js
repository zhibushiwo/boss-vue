import axios from 'axios';
const BASE_URL = "./api"

let instance = axios.create({
    baseURL: BASE_URL
})
instance.interceptors.request.use(reqHandle, errHandle)
instance.interceptors.response.use(resHandle, errHandle)

function reqHandle(config) {
    return config;
}

function resHandle(res) {
    return res.data
}
function errHandle(err) {
    console.log(err)
}

export default instance;