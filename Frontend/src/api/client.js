import axios from 'axios'

// Basic API client you can point at your .NET backend
export const oldapi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:5001/api',
  timeout: 15000,
})

oldapi.interceptors.request.use((config) => {
  // Example: attach auth token or correlation id here
   const token = localStorage.getItem('authToken')
   if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

oldapi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API ERROR]', error?.response || error?.message)
    return Promise.reject(error)
  },
)
