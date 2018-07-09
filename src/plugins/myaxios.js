import axios from 'axios'
const MyAxios = {}
MyAxios.install = function (Vue) {
    axios.defaults.baseUrl = 'http://localhost:3000/'
    Vue.prototype.$http = axios
}
export default MyAxios