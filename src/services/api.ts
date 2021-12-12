import axios from 'axios';

export const api = axios.create({
  baseURL: __DEV__ ? 'http://localhost:3000/' : 'http://localhost:3000/',
});
