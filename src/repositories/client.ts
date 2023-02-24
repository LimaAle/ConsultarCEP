import axios from "axios";
let baseURL: string = "https://brasilapi.com.br/api";
const api = axios.create({
  baseURL
})
export default api;