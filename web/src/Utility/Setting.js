import axios from "axios";

export const DOMAIN = 'http://localhost:3100/api';

// cấu hình interceptor cho axios
export const http = axios.create({
    baseURL : DOMAIN,
    timeout : 3000
});