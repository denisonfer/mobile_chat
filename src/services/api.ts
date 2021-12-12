import { NativeModules } from 'react-native';

import axios from 'axios';

const { scriptURL } = NativeModules.SourceCode;
const ipLocal = scriptURL.split('://')[1].split(':')[0];

export const api = axios.create({
  baseURL: __DEV__ ? `http://${ipLocal}:3000/` : 'http://localhost:3000/',
});
