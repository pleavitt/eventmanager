import axios from 'axios';

const mocky = axios.create({
  baseURL: 'http://mocky.io/v2',
  responseType: 'json',
});

const api = axios.create({
  baseURL: 'https://localhost:5001/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status, data, config } = error.response;

    return Promise.reject(error);
  }
);

export { mocky, api };
