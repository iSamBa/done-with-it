import { create } from 'apisauce'

const apiClient = create({
    baseURL: 'http://http://192.168.2.105:9000/api',
})

export default apiClient
