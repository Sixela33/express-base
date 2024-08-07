import axios from 'axios';
export const BASE_URL = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_BASE_PATH : 'http://localhost:8080';


export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});