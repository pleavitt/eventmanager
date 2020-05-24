import axios from 'axios';

const mocky = axios.create({
  baseURL: 'http://mocky.io/v2',
  responseType: 'json',
});

const restAPI = axios.create({
  baseURL: 'https://localhost:5001/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

restAPI.interceptors.request.use(
  (config) => {
    console.log('Sending request', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

restAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status, data, config } = error.response;

    if (status === 401) {
      console.log('unauthorised');
    }
    return Promise.reject(error);
  }
);

export { mocky, restAPI };
