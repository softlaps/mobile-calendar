import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'http://192.168.0.158:8080/';
// client.defaults.baseURL = 'http://121.254.171.155:3003/';
client.defaults.withCredentials = true;

export default client;
