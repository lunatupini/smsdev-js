import axios from 'axios'

export const apiEndpoint = 'https://api.smsdev.com.br'
export const apiVersion = 'v1'
export const baseURL = `${apiEndpoint}/${apiVersion}/`

export const api = axios.create({ baseURL })
