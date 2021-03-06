import axios from 'axios';

// console.log('token', token)

const database = axios.create({
    baseURL: 'http://localhost:5000',
    // headers: {
    //     Authorization: token
    //   }
});

// Add a request interceptor
database.interceptors.request.use(function (config) {
  // Do something before request is sent
  var token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token;
  }
  
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default database