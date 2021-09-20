import axios from 'axios'

export const launchesApi = axios.create({
  baseURL: process.env.LAUNCHES_API_URL
})
