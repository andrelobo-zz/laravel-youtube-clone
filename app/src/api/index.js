export const BASE_URL = 'http://generic-videos.local'

import axios from 'axios'

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
