import Axios from "axios";

const API_HOST = process.env.REACT_APP_SERVER_URI;
// const API_HOST = 'http://192.168.149.211:8080';

console.log(API_HOST)
const pokerClient = Axios.create({
  baseURL: API_HOST,
  headers: {
    "Content-type": "application/json",
  },
  timeout: 100000,
});

pokerClient.interceptors.request.use((request) => {
  if (request.headers) request.headers["x-auth-token"] = localStorage.token;
  return request;
});

export default pokerClient;
