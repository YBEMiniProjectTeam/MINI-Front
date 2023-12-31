import axios from "axios";
import { getAuthLocalStorage } from "@utils/getAuthLocalStorage";

const { headers } = getAuthLocalStorage();

const axiosInstance = axios.create({
  baseURL: "https://api.anti-bias.kr/api",
  timeout: 5000,
  headers: headers,
  withCredentials: true
});

export default axiosInstance;
