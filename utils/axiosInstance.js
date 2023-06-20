const axios = require('axios')
const config = require('../config')

const axiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: {
    Authorization: `Bearer ${config.SECRET_KEY}`
  }
})

module.exports = axiosInstance
