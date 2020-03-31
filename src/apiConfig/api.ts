import axios from 'axios';
import { getToken } from '../util/localStorageHelper'

axios.interceptors.request.use(config => {
    const token = getToken();
    config.headers = token && Object.assign(config.headers, {
        Authorization: `Token ${token}`
    })
    return config;
})

axios.interceptors.response.use(response => {
    return response;
},
    error => {

    }
)

export default axios;