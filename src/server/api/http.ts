import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default http;
