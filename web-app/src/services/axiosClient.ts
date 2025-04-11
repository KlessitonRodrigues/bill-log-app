import axios from "axios";
import { getToken } from "src/utils/localStorage";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: getToken(),
  },
});

export default axiosClient;
