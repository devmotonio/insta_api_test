import axios, { AxiosInstance } from 'axios'

const accessToken = 'access_token'
const api: AxiosInstance = axios.create({
  baseURL: 'https://graph.instagram.com/v15.0/me/media?access_token=' + accessToken
})

export default api
