import axios from "axios";

//const BASE_URL = "https://rickandmortyapi.com/api/";
const BASE_URL = "http://localhost:8000/api/";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
});
 
export const tokenRequestInterceptor = () => axiosInstance.interceptors.request.use(
    request =>{
        request.headers.Authorization = localStorage.getItem("token")
        return request
    },
    error => Promise.reject(error)
)

export const tokenResponseInterceptor = () => axiosInstance.interceptors.response.use(
    response => response,
    error =>{
        if(error?.response?.status === 401){
            localStorage.removeItem('token')
        }
        return Promise.reject(error)
    }
)