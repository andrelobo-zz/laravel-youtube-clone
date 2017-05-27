export const BASE_URL = 'http://generic-videos.local'

import axios from 'axios'

export const API = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
