import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_service_host,
  timeout: 5000
});

instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token');
  if (token) {
    config.headers['token'] = token;
  }

  return config;
}, function (error) {

  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
//   if (response && response.data ) {

//   }
  return response;
}, function (error) {
  return Promise.reject(error);
});




export default instance