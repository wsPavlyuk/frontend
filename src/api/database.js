import axios from 'axios';

var token = localStorage.getItem('token')

export default axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        Authorization: token
      }
});