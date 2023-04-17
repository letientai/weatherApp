import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});
const API_KEY = process.env.VUE_APP_API_KEY;

export default {
  findCountries(data) {
    return instance.get(`find?q=${data}&appid=${API_KEY}&units=imperial`);
  },
};
