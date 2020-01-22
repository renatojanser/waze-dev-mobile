import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.5.4.111:3333'
})

export default api