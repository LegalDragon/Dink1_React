import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// In a real app, get these dynamically
let authToken = localStorage.getItem('authToken');
;
let clientId = null;


export function setAuthToken(token){
  authToken = token;
}

export function setClientId(id){
  clientId = id;
}


export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.dink1.com',
  timeout: 15000,
})


// export const api = axios.create({
//   baseURL: 'https://pietest.funtimepb.com/v2',
//   timeout: 15000
// });

// Request Interceptor
api.interceptors.request.use((config)=>{
  config.headers['X-Dink1-App-Version'] = '1.0.0';
  config.headers['X-Dink1-Platform'] = 'web';
  config.headers['X-Dink1-Device-ID'] = clientId || 'unknown';
  config.headers['X-Dink1-Request-ID'] = uuidv4();
    
  if(authToken){
    config.headers['Authorization'] = `Bearer ${authToken}`;
  }
  return config;
});

// Response Interceptor
api.interceptors.response.use(
  res => res,
  err => {
    console.error('Global API Error:', err?.response || err);
    return Promise.reject(err);
  }
);
 
export { api as default };